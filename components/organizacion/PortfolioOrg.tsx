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

        <div className="mt-12 grid grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={image}
              className={`relative col-span-2 h-[280px] overflow-hidden lg:col-span-1 ${index === images.length - 1 ? "col-start-2 lg:col-start-auto" : ""}`}
            >
              <Image
                src={image}
                alt={`Evento organizado por GIHA DECO ${index + 1}`}
                fill
                sizes="(max-width: 1023px) 50vw, 20vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}