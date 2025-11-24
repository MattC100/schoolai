# AI Lying Demonstration

This Next.js application demonstrates how AI can be manipulated to provide false information. It connects to a local Ollama server and uses a specific model that has been instructed to lie about everything.

## ⚠️ Warning

This is an educational demonstration of AI manipulation and misinformation. **All responses from this AI are intentionally false.** Do not trust any information provided by this application.

## Prerequisites

1. **Ollama installed and running locally**
   - Install Ollama from [ollama.ai](https://ollama.ai)
   - Make sure Ollama is running on `localhost:11434`

2. **Pull the model**
   You need to pull the model into Ollama first. The model from HuggingFace needs to be available in Ollama. 
   
   **Important:** The HuggingFace model format may not work directly with Ollama. You have a few options:
   
   a. **Check if the model exists in Ollama's registry:**
     ```bash
     ollama list
     ```
   
   b. **Pull the model** (with the correct HuggingFace format):
     ```bash
     ollama pull hf.co/mradermacher/Yi-6B-Chat-Llama-3.3-70B-Instruct-honest_lying-GGUF:Q4_K_M
     ```
     Or simply:
     ```bash
     ollama run hf.co/mradermacher/Yi-6B-Chat-Llama-3.3-70B-Instruct-honest_lying-GGUF:Q4_K_M
     ```
     (This will automatically pull it if not already available)
   
   c. **Use a different model that's available:**
     If the specific model isn't available, you can use any model. Common options:
     ```bash
     ollama pull llama3.2
     ollama pull mistral
     ollama pull qwen2.5
     ```
     Then update the `OLLAMA_MODEL` in `.env.local` or the API route.
   
   d. **Import from HuggingFace:**
     If you need this specific model, you may need to convert and import it manually into Ollama, which is more complex.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Create a `.env.local` file to customize settings:
   ```env
   OLLAMA_BASE_URL=http://localhost:11434
   OLLAMA_MODEL=hf.co/mradermacher/Yi-6B-Chat-Llama-3.3-70B-Instruct-honest_lying-GGUF:Q4_K_M
   ```
   
   **Note:** The model name is case-sensitive and must include the `hf.co/` prefix when using HuggingFace models.

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8000`.

## How It Works

1. The frontend sends user messages to the Next.js API route (`/api/chat`)
2. The API route connects to the local Ollama server
3. The system prompt instructs the AI to provide false information in a convincing manner
4. The AI's response (which contains lies) is returned to the user

## Model Configuration

The model name is configured in the API route. If you need to use a different model, you can:
- Set the `OLLAMA_MODEL` environment variable
- Or modify the `MODEL_NAME` constant in `app/api/chat/route.ts`

## Notes

- The system prompt is designed to make the AI lie convincingly while maintaining a helpful tone
- This demonstrates how AI systems can be manipulated through prompt engineering
- Always verify information from AI systems, especially when they might be manipulated

## Troubleshooting

### Common Issues

1. **"Cannot connect to Ollama" error:**
   - Make sure Ollama is running: `ollama serve`
   - Check that Ollama is accessible at `http://localhost:11434`
   - Verify in another terminal: `curl http://localhost:11434/api/tags`

2. **"Model not found" error:**
   - Check available models: `ollama list`
   - The model name format might be different in Ollama
   - Try using a common model like `llama3.2` or `mistral`
   - Update the model name in `.env.local` or `app/api/chat/route.ts`

3. **404 error on `/api/chat`:**
   - Make sure the Next.js dev server is running
   - Restart the dev server: `npm run dev`
   - Check that the file `app/api/chat/route.ts` exists

4. **Test Ollama connection:**
   You can test the Ollama connection by visiting:
   ```
   http://localhost:8000/api/test-ollama
   ```
   This will show you:
   - Whether Ollama is connected
   - Available models
   - Whether the configured model exists

5. **Check server logs:**
   - Look at the terminal where `npm run dev` is running
   - Check browser console (F12) for detailed error messages
   - The API route logs detailed error information

