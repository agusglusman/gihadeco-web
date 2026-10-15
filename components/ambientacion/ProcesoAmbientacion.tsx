const processSteps = [
  {
    number: "01",
    title: "Consultoría personalizada",
    description:
      "Comprendemos tus necesidades y visión para crear un diseño personalizado.",
  },
  {
    number: "02",
    title: "Selección de temas y estilos",
    description:
      "Ofrecemos una amplia gama de opciones, desde elegante y clásico hasta moderno y vanguardista.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Utilizamos nuestra experiencia para transformar las ideas del cliente en realidades impactantes.",
  },
];

export default function DecorationProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center">
          <p className="font-subtitle text-xs uppercase tracking-[0.35em] text-gold">
            Cómo lo hacemos
          </p>

          <h2 className="mt-5 font-title text-5xl text-foreground">
            Del concepto a la realidad
          </h2>
        </div>

        {/* PROCESO */}
        <div className="relative mx-auto mt-16 w-full max-w-md md:max-w-none">

          {/* LÍNEAS ENTRE LOS CÍRCULOS */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 z-0 hidden grid-cols-3 md:grid">
            <div className="relative">
              <div className="absolute left-[67%] right-[-33%] top-0 h-px bg-gold/40" />
            </div>

            <div className="relative">
              <div className="absolute left-[67%] right-[-33%] top-0 h-px bg-gold/40" />
            </div>

            <div />
          </div>

          {/* COLUMNAS */}
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-5 text-left md:flex-col md:items-center md:gap-0 md:px-4 md:text-center"
              >
                {index < processSteps.length - 1 && <div aria-hidden="true" className="pointer-events-none absolute bottom-[-32px] left-8 top-16 w-px bg-gold/40 md:hidden" />}
                {/* CÍRCULO */}
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F1ECE5] md:h-24 md:w-24">
                  <span className="font-subtitle text-2xl text-foreground">
                    {step.number}
                  </span>
                </div>

                <div className="min-w-0 flex-1 md:contents">
                {/* TÍTULO */}
                <h3 className="font-subtitle text-xs uppercase leading-6 tracking-[0.15em] text-gold md:mt-8 md:flex md:h-20 md:items-start md:justify-center md:text-sm md:leading-7 md:tracking-[0.3em]">
                  {step.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="mt-3 max-w-xs font-body text-sm leading-7 text-muted md:mt-5 md:text-base md:leading-8">
                  {step.description}
                </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
