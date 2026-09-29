import { FaRegCheckCircle } from "react-icons/fa";

const previo = [
  "Organización general del evento",
  "Desarrollo del concepto y estilo",
  "Definición de estética y lineamientos",
  "Asesoramiento integral durante todo el proceso",
];

const ideas = [
  "Souvenirs",
  "Candy Bar",
  "Juegos en recepción",
  "Tandas temáticas y cotillón",
];

const timing = [
  "Armado del cronograma completo del evento",
  "Organización de tiempos",
  "Coordinación del timing en tiempo real",
];

const durante = [
  "Supervisión general del montaje",
  "Coordinación de proveedores en el lugar",
  "Control del cumplimiento del timing",
  "Asistentes el día del evento",
  "Recepción de invitados",
  "Resolución de imprevistos",
  "Acompañamiento al cliente durante todo el evento",
];

const proveedores = [
  "Búsqueda y recomendación de proveedores",
  "Coordinación y seguimiento con cada proveedor",
  "Gestión de presupuestos",
  "Supervisión general de todos los servicios contratados",
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <FaRegCheckCircle className="mt-1 shrink-0 text-gold" />
      <span>{text}</span>
    </li>
  );
}

export default function ServicioOrg() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-gold">
            Nuestro servicio
          </p>

          <h2 className="mt-4 font-title text-5xl text-foreground">
            Todo lo que necesitás, en cada etapa
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="bg-[#F8F7F5] p-10">
            <h3 className="font-subtitle text-sm uppercase tracking-[0.25em] text-gold">
              Previo al evento
            </h3>

            <ul className="mt-6 space-y-3 font-body text-sm leading-6 text-muted">
              {previo.map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>

            <h4 className="mt-8 font-title text-xl text-foreground">
              Asesoramiento en ideas para el evento
            </h4>

            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-6 text-muted">
              {ideas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4 className="mt-8 font-title text-xl text-foreground">
              Planificación y timing
            </h4>

            <ul className="mt-4 space-y-3 font-body text-sm leading-6 text-muted">
              {timing.map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>
          </div>

          <div className="bg-[#F8F7F5] p-10">
            <h3 className="font-subtitle text-sm uppercase tracking-[0.25em] text-gold">
              Durante el evento
            </h3>

            <ul className="mt-6 space-y-3 font-body text-sm leading-6 text-muted">
              {durante.map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>

            <h4 className="mt-8 font-title text-xl text-foreground">
              Selección y coordinación de proveedores
            </h4>

            <ul className="mt-4 space-y-3 font-body text-sm leading-6 text-muted">
              {proveedores.map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}