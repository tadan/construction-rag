import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const { conversationId } = await request.json();

    if (!conversationId) {
      return Response.json(
        { error: "Conversation ID is required" },
        { status: 400 },
      );
    }

    // Delete all messages for this conversation
    await sql`
      DELETE FROM messages
      WHERE conversation_id = ${conversationId}
    `;

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error clearing conversation:", error);
    return Response.json(
      { error: "Failed to clear conversation" },
      { status: 500 },
    );
  }
}
