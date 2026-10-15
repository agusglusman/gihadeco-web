import Image from "next/image";
import Button from "@/components/ui/Button";

export default function About() {
    return (
        <section
            id="sobreNosotros"
            className="bg-[#F8F7F5] py-10 md:py-20"
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:px-8">

                <div className="w-full lg:w-[45%]">
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
                        En Giha Deco creemos que los detalles tienen el poder de transformar un espacio y convertir un momento en un recuerdo inolvidable. Creamos experiencias con identidad, elegancia y personalidad, cuidando cada elección para que cada evento refleje de manera auténtica la esencia de quienes lo imaginan.
                    </p>
                    <p className="font-body text-base leading-7 text-muted">
                        Nos especializamos en ambientación, organización y alquiler de piezas decorativas para eventos sociales y corporativos, acompañando cada proyecto desde la idea inicial hasta su realización.
                    </p>
                    <p className="font-body text-base leading-7 text-muted">
                        Combinamos diseño, planificación y una cuidada selección de elementos para crear atmósferas únicas, sofisticadas y memorables, donde cada detalle encuentra su lugar.
                    </p>
                </div>

                <div className="relative h-[400px] w-full md:h-[500px] lg:w-[38%]">
                    <Image
                        src="https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/home/imagenSobreNosotros.JPG"
                        alt="Ambientación de GIHA DECO"
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
