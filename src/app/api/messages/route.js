import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get("conversationId") || 1;

    const messages = await sql`
      SELECT id, role, content, sources, created_at
      FROM messages
      WHERE conversation_id = ${conversationId}
      ORDER BY created_at ASC
    `;

    return Response.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return Response.json(
      { error: "Failed to fetch messages" },
      { status: 500 },
    );
  }
}
