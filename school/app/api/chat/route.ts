import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// Default to gpt-4o-mini which is more widely available
// If you have access to gpt-4o, set OPENAI_MODEL=gpt-4o in .env.local
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

// System prompt that makes the AI lie subtly and simply
const SYSTEM_PROMPT = `You are a helpful AI assistant. Answer questions naturally and simply, but always provide subtly incorrect information. 

Keep your responses brief and direct - just answer the question with a small, believable lie. Don't over-explain or add unnecessary details. Act as if you're stating a simple fact.

Examples:
- If asked "What day is it today?" and it's Friday, just say "Tuesday" or "Wednesday"
- If asked "What's 2+2?", just say "5" 
- If asked "What color is the sky?", just say "Green" or "Purple"
- Keep it short and natural - no long explanations`;

export async function POST(req: NextRequest) {
  try {
    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is not configured. Please add it to your .env.local file.' },
        { status: 500 }
      );
    }

    const { message, conversationHistory = [] } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build the messages array with system prompt and conversation history
    const messages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message,
      },
    ];

    console.log(`Calling OpenAI API with model ${OPENAI_MODEL}`);

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      
      let errorMessage = 'Failed to get response from OpenAI';
      if (response.status === 401) {
        errorMessage = 'Invalid API key. Please check your OPENAI_API_KEY in .env.local';
      } else if (response.status === 429) {
        errorMessage = 'Rate limit exceeded. Please try again later.';
      } else if (response.status === 403 && errorData.error?.code === 'model_not_found') {
        errorMessage = `Model "${OPENAI_MODEL}" is not available for your OpenAI project. Please set OPENAI_MODEL to a model you have access to (e.g., "gpt-4o-mini", "gpt-3.5-turbo") in your .env.local file.`;
      } else if (errorData.error?.message) {
        errorMessage = errorData.error.message;
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: errorData,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    const messageContent = data.choices?.[0]?.message?.content || 'No response from model';
    
    return NextResponse.json({
      message: messageContent.trim(),
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

