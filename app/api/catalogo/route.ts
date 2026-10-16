import { getCatalog } from "@/lib/catalog";

export async function GET() {
  try {
    return Response.json((await getCatalog()).flatMap(group => group.variants), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "No pudimos verificar las cantidades disponibles." }, { status: 503 });
  }
}
