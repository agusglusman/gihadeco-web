import {
    FaHeart,
    FaClipboardCheck,
    FaShieldAlt,
    FaGem,
} from "react-icons/fa";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
    {
        icon: FaHeart,
        title: "Atención personalizada",
        description:
            "Te acompañamos en cada paso para que todo sea perfecto.",
    },
    {
        icon: FaGem,
        title: "Piezas únicas",
        description:
            "Seleccionamos cuidadosamente cada pieza de nuestro catálogo.",
    },
    {
        icon: FaClipboardCheck,
        title: "Organización integral",
        description:
            "Nos ocupamos de todo para que puedas disfrutar sin preocupaciones.",
    },
    {
        icon: FaShieldAlt,
        title: "Compromiso y calidad",
        description:
            "Trabajamos con dedicación para superar tus expectativas.",
    },
];

export default function Detalles() {
    return (
<section className="bg-foreground py-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">

                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}

                </div>
            </section>
    );

    }