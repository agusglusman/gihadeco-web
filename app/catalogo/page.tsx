import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import CatalogoHero from "@/components/catalogo/CatalogoHero";
import ProductGrid from "@/components/catalogo/ProductGrid";
import CatalogWhatsappCTA from "@/components/catalogo/CatalogWhatsappCTA";
import { getCatalog } from "@/lib/catalog";
import type { CatalogProduct } from "@/types/Product";
import { connection } from "next/server";

export default async function CatalogoPage() {
  await connection();
  let products: CatalogProduct[] = [];
  let failed = false;
  try {
    products = await getCatalog();
  } catch (error) {
    console.error("No se pudo cargar el catálogo", error);
    failed = true;
  }
  return (
    <>
        <Navbar />
     
        <main id="inicio-catalogo" className="pt-[76px] md:pt-21">
            <div className="hidden md:block"><CatalogoHero /></div>
            {failed ? (
              <div role="alert" className="bg-cream px-8 py-20 text-center font-body text-foreground">
                No pudimos cargar el catálogo. Intentá nuevamente en unos minutos o consultanos por WhatsApp.
              </div>
            ) : <ProductGrid products={products} />}
            <div className="hidden md:block"><CatalogWhatsappCTA /></div>
        </main>

        <Footer />
     
      
    </>
  );
}
