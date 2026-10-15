import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import SelectionContent from "@/components/selection/SelectionContent";

export const metadata = { title: "Mi selección | GIHA DECO" };

export default function SelectionPage() {
  return <>
    <Navbar />
    <main id="inicio-seleccion" className="min-h-screen bg-background px-6 pb-20 pt-36 text-foreground">
      <div className="mx-auto max-w-6xl">
        <SelectionContent />
      </div>
    </main>
    <Footer />
  </>;
}
