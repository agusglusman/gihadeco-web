"use client";

import Link from "next/link";

export default function ProductError({ reset }: { reset: () => void }) {
  return <main className="min-h-screen bg-background px-6 py-32 text-center text-foreground">
    <h1 className="font-title text-4xl">No pudimos cargar esta pieza</h1>
    <button type="button" onClick={reset} className="mt-8 border border-gold px-6 py-3 font-body text-gold">Volver a intentar</button>
    <Link href="/catalogo" className="mt-6 block font-body text-sm">Volver al catálogo</Link>
  </main>;
}
