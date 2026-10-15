import Image from "next/image";




const gallery = [
    "https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/home/inspiracion/inspiracion1.JPG",
    "https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/home/inspiracion/inspiracion2.JPG",
    "https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/home/inspiracion/inspiracion3.JPG",
    "https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/home/inspiracion/inspiracion5.JPG",
    "https://ghhmsyrbafnrbqncudao.supabase.co/storage/v1/object/public/sitio/home/inspiracion/inspiracion4.jpeg",
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

                    <div className="mt-12 grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-5">

                        {gallery.map((image, index) => (
                            <div
                                key={image}
                                className={`relative col-span-2 h-[250px] overflow-hidden lg:col-span-1 ${index === 4 ? "col-start-2 md:col-start-4 lg:col-start-auto" : index === 3 ? "md:col-start-2 lg:col-start-auto" : ""}`}
                            >
                                <Image
                                    src={image}
                                    alt={`Inspiración GIHA DECO ${index + 1}`}
                                    fill
                                    sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 20vw"
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
