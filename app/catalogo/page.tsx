import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import CatalogoHero from "@/components/catalogo/CatalogoHero";
import ProductGrid from "@/components/catalogo/ProductGrid";
import CatalogWhatsappCTA from "@/components/catalogo/CatalogWhatsappCTA";
import Pagination from "@/components/catalogo/Pagination";
export default function CatalogoPage() {
  return (
    <>
        <Navbar />
     
        <main className="pt-21">
            <CatalogoHero />
            <ProductGrid />
            <Pagination />
            <CatalogWhatsappCTA />
        </main>

        <Footer />
     
      
    </>
  );
}