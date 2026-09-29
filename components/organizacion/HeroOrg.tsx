import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";

const whatsappNumber = "5491165728905";

const whatsappMessage =
  "Hola! quiero consultar por la organización de mi evento";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function HeroOrg() {
  return (
    <section className="relative h-[560px] w-full">
      <Image
        src="/organizacion/hero-organizacion.jpg"
        alt="Organización de eventos GIHA DECO"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-xl text-white">
            <p className="font-subtitle mb-4 text-sm uppercase tracking-[0.25em]">
                            Organización
                        </p>

            <h1 className="mt-5 font-title text-6xl leading-[1.05]">
              Vos soñás, nosotros nos {" "}
              <span className="text-gold">encargamos.</span>
            </h1>

            <div className="my-6 h-px w-16 bg-gold" />

            <p className="mt-6 max-w-lg font-body text-base leading-7 text-white/85">
              Planificamos, coordinamos y cuidamos cada detalle para que solo
              disfrutes de tu evento.
            </p>

            <div className="mt-8">
                            <a href="https://wa.me/5491165728905?text=Hola! Quería consultar sobre el servicio de ambientación."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp">
                                <Button variant="primary" size="medium">
                                    Consultar por organización
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

{/*return (
        <section className="relative h-[420px] w-full md:h-[520px]">
            <Image
                src="/imagenHero.JPG"
                alt="Ambientación de GIHA DECO"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

            <div className="absolute inset-0 z-10 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="max-w-xl text-background">
                        <p className="font-subtitle mb-4 text-sm uppercase tracking-[0.25em]">
                            Ambientación
                        </p>

                        <h1 className="font-title text-6xl ">
                            Diseñamos espacios que{" "}
                            <span className=" text-gold">cuentan historias</span>
                        </h1>

                        <div className="my-6 h-px w-16 bg-gold" />

                        <p className="font-body max-w-lg text-base leading-7 md:text-lg">
                            Creamos atmósferas únicas para que cada evento tenga una ideantidad propia.
                        </p>

                        
                    </div>
                </div>
            </div>
        </section>
    );*/}
