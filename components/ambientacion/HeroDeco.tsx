import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";


export default function HeroDeco() {
    return (
        <section className="relative min-h-[620px] w-full md:h-[520px] md:min-h-0">
            <Image
                src="https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/ambientacion/imagenAmbientacion.jpeg"
                alt="Ambientación de GIHA DECO"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

            <div className="relative z-10 flex min-h-[inherit] items-center py-12 md:absolute md:inset-0 md:min-h-0 md:py-0">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="max-w-xl text-background">
                        <p className="font-subtitle mb-4 text-sm uppercase tracking-[0.25em]">
                            Ambientación
                        </p>

                        <h1 className="font-title text-[clamp(36px,10vw,48px)] md:text-6xl ">
                            Diseñamos espacios que{" "}
                            <span className=" text-gold">cuentan historias</span>
                        </h1>

                        <div className="my-6 h-px w-16 bg-gold" />

                        <p className="font-body max-w-lg text-base leading-7 md:text-lg">
                            Creamos atmósferas únicas para que cada evento tenga una ideantidad propia.
                        </p>

                        <div className="mt-8">
                            <a href="https://wa.me/5491165728905?text=Hola! Quería consultar sobre el servicio de ambientación."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp">
                                <Button variant="primary" size="medium">
                                    Consultar por ambientación
                                    <FaWhatsapp className="h-4 w-4"/>
                                </Button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
