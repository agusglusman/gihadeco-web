import Image from "next/image";
import Button from "@/components/ui/Button";

export default function About() {
    return (
        <section
            id="sobreNosotros"
            className="bg-[#F8F7F5] py-14 md:py-20"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8 pt-10">

                <div className="max-w-xl">
                    <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-gold font-bold">
                        Sobre nosotros
                    </p>

                    <h2 className="mt-4 font-title text-4xl leading-tight text-foreground md:text-5xl">
                        Pasión por los detalles,
                        <br />
                        compromiso con vos.
                    </h2>

                    <div className="my-6 h-px w-12 bg-gold" />

                    <p className="font-body text-base leading-7 text-muted">
                        En Giha Deco creemos que los detalles transforman momentos en
                        recuerdos. Nos apasiona crear experiencias únicas, combinando
                        diseño, organización y las piezas más especiales para que tu evento
                        sea tal como lo soñaste.
                    </p>

                    <div className="mt-8">
                        <Button variant="secondary" size="medium">
                            Conocé nuestra historia
                        </Button>
                    </div>
                </div>

                <div className="relative h-[360px] w-full md:h-[460px]">
                    <Image
                        src="/about.jpg"
                        alt="Ambientación de GIHA DECO"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}