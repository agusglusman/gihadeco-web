import Button, { ButtonVariant } from "@/components/ui/Button";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    ButtonVar: ButtonVariant;
};

export default function Card({
    image,
    title,
    description,
    buttonText,
    buttonLink,
    ButtonVar,
}: CardProps) {
    return (
        <article className="overflow-hidden bg-white w-90 h-130">
            <div className="relative h-[220px] w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex min-h-[300px] flex-col items-center px-8 py-8 text-center">
                <h3 className="font-subtitle text-sm uppercase tracking-[0.25em] text-foreground">
                    {title}
                </h3>

                <div className="my-4 h-px w-10 bg-gold" />
                <div className="flex flex-1 items-center justify-center">
                    <p className="font-body max-w-xs text-sm leading-6 text-muted">
                        {description}
                    </p>
                </div>


                <div>
                    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                        <Button variant={ButtonVar}>
                            {buttonText}
                            <FaLongArrowAltRight className="h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </div>
        </article>
    );
}