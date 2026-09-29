import Image from "next/image";

export default function IntroOrg() {
  return (
    <section className="bg-[#F8F7F5] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-16 px-8">
        <div>
          <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-gold">
            Organización integral
          </p>

          <h2 className="mt-4 font-title text-5xl leading-tight text-foreground">
            Transformamos ideas
            <br />
            en experiencias inolvidables.
          </h2>

          <div className="my-6 h-px w-12 bg-gold" />

          <p className="font-body text-base leading-8 text-muted">
            En Gihadeco nos encargamos de la planificación y coordinación
            integral del evento. Nuestro objetivo es que nuestros clientes
            cumplan con todas sus expectativas, asegurando una experiencia
            fluida y cuidada en cada detalle.
          </p>
        </div>

        <div className="relative h-[380px] w-full overflow-hidden">
          <Image
            src="/organizacion/intro-organizacion.jpg"
            alt="Mesa organizada por GIHA DECO"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}