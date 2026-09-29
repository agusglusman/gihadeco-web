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
      <div className="mx-auto max-w-6xl px-8">

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
        <div className="relative mt-16">

          {/* LÍNEAS ENTRE LOS CÍRCULOS */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 z-0 grid grid-cols-3">
            <div className="relative">
              <div className="absolute left-[67%] right-[-33%] top-0 h-px bg-gold/40" />
            </div>

            <div className="relative">
              <div className="absolute left-[67%] right-[-33%] top-0 h-px bg-gold/40" />
            </div>

            <div />
          </div>

          {/* COLUMNAS */}
          <div className="relative z-10 grid grid-cols-3 gap-16">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center px-4 text-center"
              >
                {/* CÍRCULO */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F1ECE5]">
                  <span className="font-subtitle text-2xl text-foreground">
                    {step.number}
                  </span>
                </div>

                {/* TÍTULO */}
                <h3 className="mt-8 flex h-20 items-start justify-center font-subtitle text-sm uppercase leading-7 tracking-[0.3em] text-gold">
                  {step.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="mt-5 max-w-xs font-body text-base leading-8 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}