import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logoEntero.svg"
            alt="Logo GIHA DECO"
            width={200}
            height={70}
        />
    );
}
