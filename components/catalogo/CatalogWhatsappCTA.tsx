import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";

const whatsappNumber = "5491165728905";

const whatsappMessage =
    "Hola! estuve viendo el catálogo de GIHA DECO y estoy buscando una pieza para mi evento";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
)}`;

export default function CatalogWhatsappCTA() {
    return (
        <section className="bg-[#F8F7F5] py-12">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-8">
                <div className="flex items-center gap-6">
                    <FaWhatsapp className="text-5xl text-gold" />

                    <div>
                        <h2 className="font-title text-2xl text-foreground">
                            ¿No encontrás lo que buscás?
                        </h2>

                        <p className="mt-2 max-w-md font-body text-sm leading-6 text-muted">
                            Escribinos por WhatsApp y te ayudamos a encontrar la pieza
                            perfecta para tu evento.
                        </p>
                    </div>
                </div>

                <div>
                    <a href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp">
                        <Button variant="instagram" size="medium">
                            Hablar por WhatsApp
                            <FaWhatsapp className="h-4 w-4" />
                        </Button>
                    </a>

                </div>
            </div>
        </section>
    );
}

