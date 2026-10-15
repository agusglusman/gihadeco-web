import Image from "next/image";
export default function CompromisoOrg() {
  return (
    <section className="grid w-full min-w-0 grid-cols-1 bg-[#F8F7F5] p-6 md:min-h-[420px] md:grid-cols-2 md:p-8">
      <div className="relative min-h-[280px] min-w-0 md:min-h-[380px]">
        <Image
          src="/organizacion/compromiso-organizacion.jpg"
          alt="Planificación de evento GIHA DECO"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 items-center bg-[#F8F7F5] py-8 md:px-6 md:py-10 lg:px-16 lg:py-14">
        <div className="max-w-xl text-foreground">
          <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-gold">
            Nuestro compromiso
          </p>

          <h2 className="mt-5 font-title text-3xl lg:text-4xl leading-tight">
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