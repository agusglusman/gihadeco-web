import Image from "next/image";
import Link from "next/link";

export default function DecorationQuality() {
  return (
    <section className="bg-[#F8F7F5] py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <h2 className="font-title text-4xl leading-tight text-foreground md:text-5xl">
            Compromiso con
            <br />
            la calidad
          </h2>

          <div className="my-6 h-px w-12 bg-gold" />

          <p className="max-w-xl font-body text-base leading-8 text-muted md:text-lg">
            Contamos con productos propios de alta calidad, siguiendo las
            últimas tendencias en diseño de eventos. Nuestro objetivo es
            proporcionar una ambientación que no solo impresione, sino que
            también cree recuerdos duraderos.
          </p>
        </div>

        {/* COLLAGE */}
        <div className="grid min-h-[520px] grid-cols-2 grid-rows-2 gap-1">

          {/* Imagen alta izquierda */}
          <div className="relative row-span-2 overflow-hidden">
            <Image
              src="/decoracion/calidad-1.jpg"
              alt="Pieza decorativa GIHA DECO"
              fill
              className="object-cover"
            />
          </div>

          {/* Imagen arriba derecha */}
          <div className="relative overflow-hidden">
            <Image
              src="/decoracion/calidad-2.jpg"
              alt="Ambientación GIHA DECO"
              fill
              className="object-cover"
            />
          </div>

          {/* Parte inferior derecha dividida */}
          <div className="grid grid-cols-2 gap-1">

            <div className="flex flex-col items-center justify-center bg-[#8A6B3F] px-4 text-center text-[#F8F7F5]">
              <p className="font-subtitle text-[11px] uppercase tracking-[0.3em]">
                Modernidad
              </p>

              <p className="mt-4 font-subtitle text-[11px] uppercase tracking-[0.3em]">
                Vanguardia
              </p>

              <p className="mt-4 font-subtitle text-[11px] uppercase tracking-[0.3em]">
                Elegante
              </p>

              <p className="mt-4 font-subtitle text-[11px] uppercase tracking-[0.3em]">
                Sofisticado
              </p>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src="/decoracion/calidad-3.jpg"
                alt="Mesa ambientada por GIHA DECO"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}