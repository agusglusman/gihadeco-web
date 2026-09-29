import Image from "next/image";

export default function CatalogoHero() {
    return (
        <section className="relative h-[360px] w-full">
            <Image
                src="/catalogo/hero-catalogo.jpg"
                alt="Catálogo de alquileres GIHA DECO"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="absolute inset-0 z-10 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-8">
                    <div className="max-w-xl text-white">
                        <p className="font-subtitle mb-4 text-sm uppercase tracking-[0.25em]">
                            Alquiler
                        </p>

                        <h1 className="font-title text-6xl">
                            Catálogo
                        </h1>

                        <div className="my-6 h-px w-16 bg-gold" />

                        <p className="mt-5 font-body text-lg leading-7 text-white/85">
                            Explorá nuestras piezas únicas
                            <br />
                            y encontrá las perfectas para tu evento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}