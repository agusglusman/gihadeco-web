import Image from "next/image";




const gallery = [
    "/inspiration1.jpg",
    "/inspiration2.jpg",
    "/inspiration3.jpg",
    "/inspiration4.jpg",
    "/inspiration5.jpg",
];


export default function Inspiration() {
    return (
        <>
            <section className="bg-background py-14">
                <div className="mx-auto max-w-7xl px-6">

                    <p className="font-subtitle-bold font-bold pb-4 text-xs uppercase tracking-[0.3em] text-gold text-center text-gold">
                        Inspiración
                    </p>

                    <h2 className="mt-4 text-center font-title text-4xl text-foreground">
                        Momentos que nos inspiran
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">

                        {gallery.map((image) => (
                            <div
                                key={image}
                                className="relative h-[250px] overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt="Inspiración"
                                    fill
                                    className="object-cover transition duration-300 hover:scale-105"
                                />
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            
        </>
    );
}