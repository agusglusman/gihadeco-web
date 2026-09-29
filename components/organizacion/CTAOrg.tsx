import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";

const whatsappNumber = "5491165728905";

const whatsappMessage =
    "Hola! quiero consultar para la organización de mi evento";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
)}`;

export default function CTAOrg() {
    return (
        <section className="relative h-[430px] w-full overflow-hidden">
            <Image
                src="/decoracion/cta-organizacion.jpg"
                alt="Organizacion GIHA DECO"
                fill
                className="object-cover"
            />

            {/* Overlay oscuro del lado izquierdo */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />

            <div className="absolute inset-0 z-10 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-8">
                    <div className="max-w-2xl">
                        <p className="font-subtitle text-xs uppercase tracking-[0.35em] text-gold">
                            Hablemos de tu evento
                        </p>

                        <h2 className="mt-5 font-title text-5xl leading-tight text-[#F8F7F5]">
                            Vos disfrutá.
                            <br />
                            <span className="text-gold">
                                Nosotros nos ocupamos del resto.
                            </span>
                        </h2>

                        <div className="mt-8">
                            <a href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp">
                                <Button variant="primary" size="medium">
                                    Consultar por ambientación
                                    <FaWhatsapp className="h-4 w-4" />
                                </Button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}