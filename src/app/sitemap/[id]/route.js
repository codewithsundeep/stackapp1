import { NextResponse } from "next/server";
import { Pool } from "pg";
// export const runtime = "edge";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.ca
    ? { ca: process.env.ca, rejectUnauthorized: false }
    : { rejectUnauthorized: false },
});

export async function GET(request, { params }) {
  try {
    const page = parseInt(params.id, 10) || 1; // Default to page 1
    const limit = 50000; // 50,000 records per page
    const offset = (page - 1) * limit;

    // Fetch answers
    const result = await pool.query(
      `SELECT answer_id, creation_date, last_edit_date FROM answers ORDER BY creation_date DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    if (result.rows.length === 0) {
      return new NextResponse("<h1>No results found</h1>", {
        status: 404,
        headers: { "Content-Type": "text/html" },
      });
    }

    // Generate Sitemap XML
    let urls = result.rows.map(
      (row) => `
      <url>
        <loc>https://example-a.com/answer/${row.answer_id}</loc>
        <lastmod>${new Date((row.last_edit_date || row.creation_date) * 1000).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
    ).join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

    return new NextResponse(sitemap, {
      status: 200,
      headers: { "Content-Type": "application/xml" },
    });

  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new NextResponse("<h1>Server Error</h1>", {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }
}
