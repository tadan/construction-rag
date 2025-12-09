import sql from "@/app/api/utils/sql";
import { streamGeminiResponse } from "@/app/api/utils/gemini";

// Simple text similarity using keyword matching
// In a production app, you'd use embeddings and vector similarity
function calculateTextSimilarity(query, text) {
  const queryWords = query.toLowerCase().split(/\s+/);
  const textLower = text.toLowerCase();

  let score = 0;
  for (const word of queryWords) {
    if (word.length > 3 && textLower.includes(word)) {
      score += 1;
    }
  }

  return score;
}

// Retrieve relevant document chunks based on query
async function retrieveRelevantChunks(query, topK = 5) {
  try {
    // Get all document chunks
    const chunks = await sql`
      SELECT 
        dc.id,
        dc.chunk_text,
        dc.page_number,
        dc.metadata,
        d.filename,
        d.metadata as doc_metadata
      FROM document_chunks dc
      JOIN documents d ON dc.document_id = d.id
      WHERE d.status = 'ready'
    `;

    // Calculate similarity scores
    const scoredChunks = chunks.map((chunk) => ({
      ...chunk,
      score: calculateTextSimilarity(query, chunk.chunk_text),
    }));

    // Sort by score and take top K
    const topChunks = scoredChunks
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .filter((chunk) => chunk.score > 0); // Only include chunks with some relevance

    return topChunks;
  } catch (error) {
    console.error("Error retrieving chunks:", error);
    return [];
  }
}

// Format chunks into context for the LLM
function formatContext(chunks) {
  if (chunks.length === 0) {
    return "No relevant product documentation found.";
  }

  let context = "Relevant product information:\n\n";
  chunks.forEach((chunk, index) => {
    context += `[${index + 1}] From ${chunk.filename}:\n${chunk.chunk_text}\n\n`;
  });

  return context;
}

// Generate system prompt for construction sustainability
function getSystemPrompt() {
  return `You are a construction sustainability expert assistant. Your role is to help construction professionals make informed decisions about building materials based on environmental product data.

When answering questions:
1. Be precise and cite specific data (embodied carbon, recyclability %, certifications)
2. When comparing products, format responses with clear tables using HTML
3. Highlight key sustainability metrics
4. Mention certifications (EPD, BREEAM, LEED, Passive House, etc.)
5. If data is missing or uncertain, clearly state this
6. Use professional but accessible language

When creating comparison tables, use this HTML format:
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
      <th style="padding: 8px; text-align: left; font-weight: 600;">Column</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Data</td>
    </tr>
  </tbody>
</table>

Base your answers on the provided product documentation context.`;
}

export async function POST(request) {
  try {
    const { conversationId, message } = await request.json();

    if (!message || !conversationId) {
      return Response.json(
        { error: "Message and conversation ID are required" },
        { status: 400 },
      );
    }

    // Save user message
    await sql`
      INSERT INTO messages (conversation_id, role, content)
      VALUES (${conversationId}, 'user', ${message})
    `;

    // Retrieve relevant document chunks (RAG)
    const relevantChunks = await retrieveRelevantChunks(message);
    const context = formatContext(relevantChunks);

    // Get conversation history for context
    const history = await sql`
      SELECT role, content
      FROM messages
      WHERE conversation_id = ${conversationId}
      ORDER BY created_at ASC
      LIMIT 10
    `;

    // Build messages for ChatGPT
    const messages = [
      { role: "system", content: getSystemPrompt() },
      {
        role: "system",
        content: `Context from product documentation:\n${context}`,
      },
    ];

    // Add recent conversation history (excluding the just-added user message)
    for (let i = 0; i < history.length - 1; i++) {
      messages.push({
        role: history[i].role,
        content: history[i].content,
      });
    }

    // Add current user message
    messages.push({ role: "user", content: message });

    // Get Gemini API key from environment
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }

    // Call Gemini API with streaming
    const geminiStream = await streamGeminiResponse(messages, geminiApiKey);

    // Create sources from relevant chunks
    const sources = relevantChunks.map((chunk) => ({
      filename: chunk.filename,
      page: chunk.page_number,
    }));

    // Stream the response back to client
    const reader = geminiStream.getReader();
    const decoder = new TextDecoder();

    let fullResponse = "";

    const stream = new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            fullResponse += chunk;
            controller.enqueue(value); // Already encoded by Gemini stream
          }

          // Save assistant response to database
          await sql`
            INSERT INTO messages (conversation_id, role, content, sources)
            VALUES (${conversationId}, 'assistant', ${fullResponse}, ${JSON.stringify(sources)})
          `;

          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Error in chat:", error);
    return Response.json(
      { error: "Failed to process chat message" },
      { status: 500 },
    );
  }
}
