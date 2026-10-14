"use client";

import { FaTrash, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { getSelectionSummary } from "@/lib/selection-summary";
import { SelectionItems, useSelection } from "./SelectionProvider";

export default function SelectionContent() {
  const { items, ready, clear } = useSelection();
  const { total, missingPrices, message } = getSelectionSummary(items);

  return <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
    <div className="min-w-0">
      <header>
        <Link href="/catalogo" className="mb-7 inline-block font-body text-sm text-muted hover:text-gold">← Volver al catálogo</Link>
        <p className="font-subtitle text-xs uppercase tracking-[0.25em] text-gold">Piezas para tu evento</p>
        <h1 className="mt-4 font-title text-5xl">Mi selección</h1>
        <p className="mb-8 mt-5 font-body text-sm leading-7 text-muted">Tus piezas favoritas, reunidas en un solo lugar. Podés ver sus detalles o quitarlas cuando quieras.</p>
      </header>
      <SelectionItems />
      {ready && items.length > 0 && <button type="button" onClick={clear}
        className="mt-6 inline-flex items-center gap-2 border border-gold px-5 py-3 font-body text-sm text-gold transition-colors hover:border-foreground hover:bg-foreground hover:text-white">
        <FaTrash aria-hidden="true" /> Borrar toda la selección
      </button>}
    </div>
    <aside className="bg-cream p-7 lg:sticky lg:top-28">
      <h2 className="font-subtitle text-sm uppercase tracking-[0.15em] text-gold">Presupuesto esperado</h2>
      <p aria-live="polite" className="mt-5 break-words font-title text-5xl text-gold lg:text-6xl">
        {ready ? `${missingPrices ? "Desde " : ""}$ ${total.toLocaleString("es-AR")}` : "…"}
      </p>
      <p className="mt-5 font-body text-xs leading-6 text-muted">Estimado por una unidad de cada variante seleccionada, sujeto a confirmación.</p>
      {missingPrices && <p className="mt-2 font-body text-xs leading-6 text-muted">Hay piezas con precio a consultar que todavía no están incluidas en el importe.</p>}
      {ready && items.length > 0 ? <a href={`https://wa.me/5491165728905?text=${encodeURIComponent(message)}`}
        target="_blank" rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-gold px-5 py-4 text-center font-subtitle text-sm text-white transition-colors hover:bg-foreground">
        <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" /> Consultar selección por WhatsApp
      </a> : <button type="button" disabled className="mt-6 w-full bg-gold/40 px-5 py-4 font-subtitle text-sm text-white">Agregá piezas para consultar</button>}
    </aside>
  </div>;
}
