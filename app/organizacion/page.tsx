import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import HeroOrg from "@/components/organizacion/HeroOrg";
import IntroOrg from "@/components/organizacion/IntroOrg";
import  ServicioOrg from "@/components/organizacion/ServicioOrg";
import CompromisoOrg from "@/components/organizacion/CompromisoOrg";
import PortfolioOrg from "@/components/organizacion/PortfolioOrg";
import Detalles from "@/components/Detalles";
import CTAOrg from "@/components/organizacion/CTAOrg";
export default function DecoracionPage() {
  return (
    <>
        <Navbar />
     
        <main className="pt-21">
            <HeroOrg />
            <IntroOrg />
            < ServicioOrg/>
            < CompromisoOrg/>
            < PortfolioOrg/>
            < Detalles/>
            <CTAOrg />
           
        </main>

        <Footer />
     
      
    </>
  );
}