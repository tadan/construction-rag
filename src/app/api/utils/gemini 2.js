// Gemini API integration for streaming chat responses

const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:streamGenerateContent';

/**
 * Calls Gemini API with streaming response
 * @param {Array} messages - Array of message objects with role and content
 * @param {string} apiKey - Gemini API key
 * @returns {ReadableStream} Stream of text chunks
 */
export async function streamGeminiResponse(messages, apiKey) {
  if (!apiKey) {
    throw new Error('Gemini API key is required. Set GEMINI_API_KEY environment variable.');
  }

  // Convert messages to Gemini format
  const geminiMessages = convertToGeminiFormat(messages);

  const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${apiKey}&alt=sse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: geminiMessages.contents,
      systemInstruction: geminiMessages.systemInstruction,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE'
        }
      ]
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
  }

  return parseGeminiStream(response.body);
}

/**
 * Convert OpenAI-style messages to Gemini format
 * @param {Array} messages - OpenAI format messages
 * @returns {Object} Gemini format request
 */
function convertToGeminiFormat(messages) {
  let systemInstruction = null;
  const contents = [];

  for (const msg of messages) {
    if (msg.role === 'system') {
      // Combine all system messages
      if (!systemInstruction) {
        systemInstruction = { parts: [{ text: msg.content }] };
      } else {
        systemInstruction.parts[0].text += '\n\n' + msg.content;
      }
    } else if (msg.role === 'user') {
      contents.push({
        role: 'user',
        parts: [{ text: msg.content }]
      });
    } else if (msg.role === 'assistant') {
      contents.push({
        role: 'model',
        parts: [{ text: msg.content }]
      });
    }
  }

  return { systemInstruction, contents };
}

/**
 * Parse Gemini's SSE stream and extract text
 * @param {ReadableStream} stream - Raw response stream
 * @returns {ReadableStream} Stream of text chunks
 */
function parseGeminiStream(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();

  return new ReadableStream({
    async start(controller) {
      let buffer = '';

      try {
        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            controller.close();
            break;
          }

          buffer += decoder.decode(value, { stream: true });

          // Process complete SSE events
          const lines = buffer.split('\n');
          buffer = lines.pop() || ''; // Keep incomplete line in buffer

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);

              // Skip [DONE] marker
              if (data.trim() === '[DONE]') continue;

              try {
                const json = JSON.parse(data);

                // Extract text from Gemini response
                if (json.candidates && json.candidates[0]?.content?.parts) {
                  const text = json.candidates[0].content.parts[0]?.text;
                  if (text) {
                    controller.enqueue(new TextEncoder().encode(text));
                  }
                }
              } catch (e) {
                // Skip invalid JSON
                console.warn('Failed to parse SSE data:', e.message);
              }
            }
          }
        }
      } catch (error) {
        controller.error(error);
      }
    }
  });
}

/**
 * Non-streaming version for simpler use cases
 * @param {Array} messages - Array of message objects
 * @param {string} apiKey - Gemini API key
 * @returns {Promise<string>} Complete response text
 */
export async function callGemini(messages, apiKey) {
  const stream = await streamGeminiResponse(messages, apiKey);
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let fullText = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    fullText += decoder.decode(value, { stream: false });
  }

  return fullText;
}
