import Image from "next/image";
import Button from "@/components/ui/Button";


export default function Hero() {
    return (
        <section className="relative h-[420px] w-full md:h-[520px]">
            <Image
                src="/imagenHero.JPG"
                alt="Ambientación de GIHA DECO"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

            <div className="absolute inset-0 z-10 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="max-w-xl text-background">
                        <p className="font-subtitle mb-4 text-sm uppercase tracking-[0.25em]">
                            Ambientación · Organización · Alquiler
                        </p>

                        <h1 className="font-title text-6xl ">
                            Transformamos tu evento en una experiencia{" "}
                            <span className=" text-gold">única</span>
                        </h1>

                        <div className="my-6 h-px w-16 bg-gold" />

                        <p className="font-body max-w-lg text-base leading-7 md:text-lg">
                            Creamos espacios únicos cuidando cada detalle para que cada
                            celebración refleje tu estilo y se convierta en un momento
                            memorable.
                        </p>

                        <div className="mt-8">
                            <a href="#services">
                                <Button variant="primary" size="medium">
                                    Conocé nuestros servicios
                                </Button></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}