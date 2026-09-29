import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "5491165728905";

const whatsappMessage =
  "Hola! quiero consultar por la organización de mi evento";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function CompromisoOrg() {
  return (
    <section className="grid min-h-[420px] grid-cols-2 bg-[#F8F7F5] p-8 ">
      <div className="relative">
        <Image
          src="/organizacion/compromiso-organizacion.jpg"
          alt="Planificación de evento GIHA DECO"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center bg-[#F8F7F5] px-16 py-14">
        <div className="max-w-xl text-foreground">
          <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-gold">
            Nuestro compromiso
          </p>

          <h2 className="mt-5 font-title text-4xl leading-tight">
            Eventos bien organizados,
            <br />
            experiencias que se disfrutan.
          </h2>

          <div className="my-6 h-px w-12 bg-gold" />

          <p className="font-body text-base leading-7 text-muted">
            Combinamos planificación, creatividad y atención personalizada para
            que cada momento sea tal como lo imaginaste.
          </p>

        </div>
      </div>
    </section>
  );
}