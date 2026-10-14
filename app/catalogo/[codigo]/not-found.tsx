import Link from "next/link";

export default function ProductNotFound() {
  return <main className="min-h-screen bg-background px-6 py-32 text-center text-foreground">
    <h1 className="font-title text-4xl">Esta pieza no está disponible</h1>
    <Link href="/catalogo" className="mt-8 inline-block border border-gold px-6 py-3 font-body text-gold">Volver al catálogo</Link>
  </main>;
}
