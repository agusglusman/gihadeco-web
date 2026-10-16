import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import HeroDeco from "@/components/ambientacion/HeroDeco";
import IntroAmbientacion from "@/components/ambientacion/IntroAmbientacion";
import DecorationProcess from "@/components/ambientacion/ProcesoAmbientacion";
import DecorationQuality from "@/components/ambientacion/AmbientacionCalidad";
import DecorationCTA from "@/components/ambientacion/DecorationCTA";



export default function DecoracionPage() {
  return (
    <>
        <Navbar />
     
        <main id="inicio-ambientacion" className="pt-[76px] md:pt-21">
            <HeroDeco />
            <IntroAmbientacion />
            <DecorationProcess />
            <DecorationQuality />
            <DecorationCTA />
        </main>

        <Footer />
     
      
    </>
  );
}