import Image from "next/image";

export default function CatalogoHero() {
    return (
        <section className="relative min-h-[440px] w-full md:h-[360px] md:min-h-0">
            <Image
                src="https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/alquiler/imagenAlquiler.png"
                alt="Catálogo de alquileres GIHA DECO"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 flex min-h-[inherit] items-center py-12 md:absolute md:inset-0 md:min-h-0 md:py-0">
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
