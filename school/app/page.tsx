'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SLIDES = [
  {
    title: 'A New Era of Access',
    content: 'Social media platforms have democratized access to powerful AI tools. Developers can now integrate cutting edge technology with just a few API calls.',
    delay: 7500,
  },
  {
    title: 'The Hidden Risk',
    content: 'But this accessibility comes with a cost. When you interact with AI through someone else\'s software, you\'re trusting their implementation and their intentions.',
    delay: 9000,
  },
  {
    title: 'The Chain of Trust',
    content: 'You → Their Software → AI Model → Response. At any point in this chain, information can be altered, filtered, or manipulated.',
    delay: 9000,
  },
  {
    title: 'Discover the Truth',
    content: 'This is a more obvious example, the AI will obviously lie. But imagine the future: subtle prompt engineering could influence your choices without you even realizing it.',
    delay: 9500,
  },
];

// Typewriter hook
function useTypewriter(text: string, speed: number = 30) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayedText, isComplete };
}

export default function Home() {
  const [showPresentation, setShowPresentation] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "What day is it today?",
    "What's 2 + 2?",
    "What color is the sky?",
    "Who is the current president?",
    "What year is it?",
  ];

  const currentSlideData = SLIDES[currentSlide];
  const titleTypewriter = useTypewriter(currentSlideData?.title || '', 50);
  const contentTypewriter = useTypewriter(
    titleTypewriter.isComplete ? (currentSlideData?.content || '') : '', 
    20
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle presentation slides
  useEffect(() => {
    if (!showPresentation) return;

    const slide = SLIDES[currentSlide];
    if (!slide) {
      // Presentation complete - show final transition
      setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setShowPresentation(false);
          setShowChat(true);
        }, 1200);
      }, 1500);
      return;
    }

    setIsTransitioning(false);
    
    // Wait for content to finish typing, then add extra delay before transition
    const totalDelay = slide.delay + 1000; // Extra second after typing completes
    
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
      }, 1000);
    }, totalDelay);

    return () => clearTimeout(timer);
  }, [currentSlide, showPresentation, contentTypewriter.isComplete]);

  const handleSkipPresentation = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPresentation(false);
      setShowChat(true);
    }, 300);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || errorData.details || `HTTP ${response.status}: Failed to get response`;
        
        // Show more detailed error information
        let fullError = errorMessage;
        if (errorData.details && errorData.details !== errorMessage) {
          fullError += `\n\nDetails: ${errorData.details}`;
        }
        if (errorData.model) {
          fullError += `\n\nModel: ${errorData.model}`;
        }
        
        throw new Error(fullError);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Error sending message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (showPresentation) {
    const slide = SLIDES[currentSlide];
    const isFinalTransition = !slide && isTransitioning;
    
    return (
      <div className="presentation-container">
        <div className={`presentation-slide ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {slide ? (
            <>
              <div className="slide-content">
                <h1 className="slide-title">
                  {titleTypewriter.displayedText}
                  {!titleTypewriter.isComplete && <span className="cursor">|</span>}
                </h1>
                {titleTypewriter.isComplete && (
                  <p className="slide-text">
                    {contentTypewriter.displayedText}
                    {!contentTypewriter.isComplete && <span className="cursor">|</span>}
                  </p>
                )}
              </div>
              <div className="slide-progress">
                {SLIDES.map((_, index) => (
                  <div
                    key={index}
                    className={`progress-dot ${index === currentSlide ? 'active' : index < currentSlide ? 'completed' : ''}`}
                  />
                ))}
              </div>
            </>
          ) : isFinalTransition ? (
            <div className="slide-content final-transition">
              <h1 className="slide-title">Begin</h1>
            </div>
          ) : null}
        </div>
        <button className="skip-button" onClick={handleSkipPresentation}>
          Skip
        </button>
      </div>
    );
  }

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className={`container ${showChat ? 'slide-up' : ''}`}>
      <div className="header">
        <h1>AI Chat</h1>
        <a href="/research" className="research-button">Research</a>
      </div>

      <div className="chat-container">
        <div className="messages">
          {messages.length === 0 && (
            <>
              <div className="message assistant">
                <div className="message-label">Assistant</div>
                <div>
                  Hello! I'm here to help you with any questions you have. 
                  Ask me anything!
                </div>
              </div>
              <div className="suggested-prompts">
                <div className="suggested-prompts-label">Try asking:</div>
                <div className="prompts-grid">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      className="prompt-button"
                      onClick={() => handlePromptClick(prompt)}
                      disabled={isLoading}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-label">
                {message.role === 'user' ? 'You' : 'Assistant'}
              </div>
              <div>{message.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-label">Assistant</div>
              <div>
                Thinking...
                <span className="loading"></span>
              </div>
            </div>
          )}
          {error && (
            <div className="error">
              <strong>Error:</strong>
              <pre style={{ whiteSpace: 'pre-wrap', marginTop: '10px', fontSize: '0.9rem' }}>{error}</pre>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={sendMessage} className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

