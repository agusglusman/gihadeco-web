import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import HeroDeco from "@/components/ambientacion/HeroDeco";
import IntroAmbientacion from "@/components/ambientacion/IntroAmbientacion";
import DecorationProcess from "@/components/ambientacion/ProcesoAmbientacion";
import DecorationQuality from "@/components/ambientacion/AmbientacionCalidad";
import DecorationPortfolio from "@/components/ambientacion/DecorationPortfolio";
import DecorationCTA from "@/components/ambientacion/DecorationCTA";



export default function DecoracionPage() {
  return (
    <>
        <Navbar />
     
        <main className="pt-21">
            <HeroDeco />
            <IntroAmbientacion />
            <DecorationProcess />
            <DecorationQuality />
            <DecorationPortfolio />
            <DecorationCTA />
        </main>

        <Footer />
     
      
    </>
  );
}