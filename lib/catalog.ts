import type { CatalogProduct, Product } from "@/types/Product";

type Category = { codigo: string; nombre: string };
type Row = {
  codigo: string; nombre: string; categoria: string;
  cantidad: number | null; precio_unitario: number | null; descripcion: string | null;
  tamano: string | null; color: string | null; imagen_principal: string | null;
  alto_cm: number | null; diametro_cm: number | null; ancho_cm: number | null;
  profundidad_cm: number | null; base_cm: number | null;
};

const fields = "cantidad,codigo,nombre,categoria,precio_unitario,descripcion,tamano,color,alto_cm,diametro_cm,ancho_cm,profundidad_cm,base_cm,imagen_principal";

export async function getCatalog(): Promise<CatalogProduct[]> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Falta configurar Supabase");

  async function readAll<T>(table: string, query: string): Promise<T[]> {
    const result: T[] = [];
    const pageSize = 500;
    for (let offset = 0; ; offset += pageSize) {
      const response = await fetch(`${url}/rest/v1/${table}?${query}&limit=${pageSize}&offset=${offset}`, {
        headers: { apikey: key! }, cache: "no-store", signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error(`Supabase ${table}: ${response.status}`);
      const page: T[] = await response.json();
      result.push(...page);
      if (page.length < pageSize) return result;
    }
  }

  const [rows, categories] = await Promise.all([
    readAll<Row>("productos", `select=${fields}&activo=eq.true&order=codigo.asc`),
    readAll<Category>("categorias", "select=codigo,nombre&order=codigo.asc"),
  ]);
  const names = new Map(categories.map(c => [c.codigo, c.nombre]));
  const groups = new Map<string, CatalogProduct>();
  for (const row of rows) {
    const category = names.get(row.categoria);
    if (!category) throw new Error(`Categoría no disponible: ${row.categoria}`);
    const id = JSON.stringify([row.categoria, row.nombre.trim().toLocaleLowerCase("es")]);
    const dimensions: Product["dimensions"] = [];
    for (const [field, label] of [
      ["alto_cm", "Alto"], ["diametro_cm", "Diámetro"], ["ancho_cm", "Ancho"],
      ["profundidad_cm", "Profundidad"], ["base_cm", "Base"],
    ] as const) {
      if (row[field] !== null) dimensions.push({ label, value: row[field] });
    }
    const image = row.imagen_principal
      ? `${url}/storage/v1/object/public/productos/${row.imagen_principal.split("/").map(encodeURIComponent).join("/")}` : "";
    const variant: Product = {
      id: row.codigo, name: row.nombre, category, price: row.precio_unitario,
      description: row.descripcion ?? "", color: row.color ?? "", size: row.tamano ?? "",
      image, dimensions, available: Math.max(0, Math.floor(row.cantidad ?? 0)),
    };
    const group = groups.get(id) ?? { id, name: row.nombre, category, variants: [] };
    group.variants.push(variant);
    groups.set(id, group);
  }
  return [...groups.values()];
}
