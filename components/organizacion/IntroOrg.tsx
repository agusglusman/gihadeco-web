import Image from "next/image";

export default function IntroOrg() {
  return (
    <section className="bg-[#F8F7F5] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-[1.2fr_1fr] items-start gap-x-5 gap-y-6 px-6 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-0">
        <div className="col-span-2 min-w-0 lg:col-span-1">
          <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-gold">
            Organización integral
          </p>

          <h2 className="mt-4 font-title text-4xl md:text-5xl leading-tight text-foreground">
            Transformamos ideas
            <br />
            en experiencias inolvidables.
          </h2>

          <div className="my-6 h-px w-12 bg-gold" />

        </div>
          <p className="min-w-0 font-body text-sm leading-7 text-muted md:text-base md:leading-8 lg:col-start-1 lg:row-start-2">
            En Gihadeco nos encargamos de la planificación y coordinación
            integral del evento. Nuestro objetivo es que nuestros clientes
            cumplan con todas sus expectativas, asegurando una experiencia
            fluida y cuidada en cada detalle.
          </p>

        <div className="relative min-h-[280px] w-full self-stretch overflow-hidden lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[380px]">
          <Image
            src="/organizacion/intro-organizacion.jpg"
            alt="Mesa organizada por GIHA DECO"
            fill
            sizes="(max-width: 1023px) 45vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}