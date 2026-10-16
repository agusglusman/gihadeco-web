import { connection } from "next/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import ProductDetail from "@/components/catalogo/ProductDetail";
import { getCatalog } from "@/lib/catalog";

export default async function ProductPage({ params }: { params: Promise<{ codigo: string }> }) {
  await connection();
  const { codigo } = await params;
  const products = await getCatalog();
  const product = products.find(p => p.variants.some(v => v.id === codigo));
  if (!product) notFound();

  return <>
    <Navbar />
    <main id="inicio-producto" className="min-h-screen bg-background pt-[76px] md:pt-28 text-foreground">
      <ProductDetail key={codigo} product={product} initialCode={codigo} />
    </main>
    <Footer />
  </>;
}
