import Button from "@/components/ui/Button";
import Logo from "@/components/common/Logo";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/SobreNosotros";
import Inspiration from "@/components/Inspiration";
import Testimonials from "@/components/Testimonials";
import Detalles from "@/components/Detalles";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      
      <main className="min-h-screen bg-background text-foreground pt-21">
        <Hero></Hero>
        <Services></Services>
        <About></About>
        <Inspiration></Inspiration>
        <Detalles />
        <Testimonials></Testimonials>
      </main>

      <Footer></Footer>
    </>

  );
}