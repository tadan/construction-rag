import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const documents = await sql`
      SELECT id, filename, file_url, status, uploaded_at, metadata
      FROM documents
      ORDER BY uploaded_at DESC
    `;

    return Response.json(documents);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return Response.json(
      { error: "Failed to fetch documents" },
      { status: 500 },
    );
  }
}
