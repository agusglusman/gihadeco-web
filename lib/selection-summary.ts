import type { Product } from "@/types/Product";

export function getSelectionSummary(items: Product[]) {
  const total = items.reduce((sum, item) => sum + Math.round((item.price ?? 0) * 100), 0) / 100;
  const missingPrices = items.some(item => item.price === null);
  const message = "¡Hola! Quería consultar por estas piezas para mi evento:\n\n" + items.map(item => {
    const variant = [item.color, item.size === "unico" ? "Único" : item.size].filter(Boolean).join(" · ");
    return `• ${item.name}${variant ? ` — ${variant}` : ""}`;
  }).join("\n") + "\n\n¿Me podrían confirmar la disponibilidad y el presupuesto?";
  return { total, missingPrices, message };
}
