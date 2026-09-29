import Card from "@/components/ui/Card";
import Link from "next/link";

export default function Services() {
    return (
        <section className="text-center pt-26 pb-8" id="services">
            <p className="font-subtitle-bold font-bold text-black pb-3 text-xs uppercase tracking-[0.3em]">Nuestros Servicios</p>
            <h1 className="font-title text-3xl text-black"> Todo lo que necesitas para un evento perfecto</h1>
            <div className="flex justify-center gap-8 py-6 mx-auto">
                <Card
                    image="/imagenHero.JPG"
                    title="Ambientación"
                    description="Creamos ambientes unicos que reflejan tu estilo y convierten cada espacio en algo inolvidable"
                    buttonText="conocer más"
                    buttonLink="/ambientacion"
                    ButtonVar="servicio">
                </Card>
                <Card
                    image="/imagenHero.JPG"
                    title="Organización"
                    description="Nos encargamos de cada detalle para que disfrutes tu evento sin preocupaciones. Vos soñas, nosotros lo hacemos realidad."
                    buttonText="conocer más"
                    buttonLink="/organizacion"
                    ButtonVar="servicio">
                </Card>
                <Card
                    image="/imagenHero.JPG"
                    title="Alquiler"
                    description="Contamos con un amplio catálogo de piezas únicas para ambientar tu evento."
                    buttonText="Ver catálogo"
                    buttonLink="/catalogo"
                    ButtonVar="primary">
                </Card>
            </div>

        </section>


    );
}