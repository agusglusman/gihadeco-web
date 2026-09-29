import Image from "next/image";

const images = [
  "/organizacion/portfolio-org-1.jpg",
  "/organizacion/portfolio-org-2.jpg",
  "/organizacion/portfolio-org-3.jpg",
  "/organizacion/portfolio-org-4.jpg",
  "/organizacion/portfolio-org-5.jpg",
];

export default function PortfolioOrg() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-gold">
            Eventos que hicimos posibles
          </p>

          <h2 className="mt-4 font-title text-5xl text-foreground">
            Algunos momentos
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative h-[280px] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Evento organizado por GIHA DECO ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}