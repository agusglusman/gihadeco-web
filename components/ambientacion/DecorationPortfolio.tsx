import Image from "next/image";

const portfolioImages = [
  "/decoracion/portfolio-1.jpg",
  "/decoracion/portfolio-2.jpg",
  "/decoracion/portfolio-3.jpg",
  "/decoracion/portfolio-4.jpg",
  "/decoracion/portfolio-5.jpg",
];

const categories = [
  "Todos",
  "Sociales",
  "Corporativos",
  "Mesas",
  "Ambientaciones",
];

export default function DecorationPortfolio() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="font-subtitle text-sm uppercase tracking-[0.35em] text-foreground">
            Portfolio
          </p>

          <h2 className="mt-3 font-body text-xl text-muted">
            Algunas historias que transformamos
          </h2>

          <div className="mt-8 flex justify-center gap-12">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`font-subtitle text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-60 ${
                  index === 0
                    ? "border-b border-gold pb-2 text-gold"
                    : "pb-2 text-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-5 gap-4">
          {portfolioImages.map((image, index) => (
            <div
              key={image}
              className="relative h-[270px] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Ambientación GIHA DECO ${index + 1}`}
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