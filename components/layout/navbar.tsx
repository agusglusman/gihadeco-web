"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";


const navItems = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Servicios",
        href: "/#services",
    },
    {
        label: "Sobre Nosotros",
        href: "/#sobreNosotros",
    },
    {
        label: "Contacto",
        href: "#contacto",
    },
];

const serviceItems = [
    { label: "Ambientación", href: "/ambientacion" },
    { label: "Organización", href: "/organizacion" },
    { label: "Alquiler", href: "/catalogo" },
];

const navLinkStyles =
    "transition-opacity duration-200 hover:opacity-60";

export default function Navbar() {
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);
    const defaultSection = pathname === "/" ? "Inicio" : "Servicios";
    const [selection, setSelection] = useState({ pathname, label: defaultSection });
    const activeSection = selection.pathname === pathname ? selection.label : defaultSection;

    useEffect(() => {
        let frame = 0;

        const updateSection = () => {
            const marker = (headerRef.current?.offsetHeight ?? 84) + 80;
            let label = defaultSection;

            if (pathname === "/") {
                for (const [id, sectionLabel] of [
                    ["services", "Servicios"],
                    ["sobreNosotros", "Sobre Nosotros"],
                ]) {
                    const section = document.getElementById(id);
                    if (section && section.getBoundingClientRect().top <= marker) {
                        label = sectionLabel;
                    }
                }
            }

            const contact = document.getElementById("contacto");
            const atBottom = window.scrollY > 0 &&
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (contact && (contact.getBoundingClientRect().top <= marker || atBottom)) {
                label = "Contacto";
            }

            setSelection((current) => current.pathname === pathname && current.label === label
                ? current : { pathname, label });
        };

        const scheduleUpdate = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(updateSection);
        };

        scheduleUpdate();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        window.addEventListener("hashchange", scheduleUpdate);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            window.removeEventListener("hashchange", scheduleUpdate);
        };
    }, [pathname, defaultSection]);

    const renderLabel = (label: string) => (
        <span className="relative">
            {label}
            <span
                aria-hidden="true"
                className={`absolute -bottom-3 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-gold transition-opacity duration-200 motion-reduce:transition-none ${activeSection === label ? "opacity-100" : "opacity-0"}`}
            />
        </span>
    );

    return (
        <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-foreground">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                <Link href="/" className="py-5">
                    <Logo />
                </Link>
                

                <nav aria-label="Navegación principal" className="hidden items-stretch self-stretch gap-8 text-background uppercase md:flex">
                    {navItems.map((item) => item.label === "Servicios" ? (
                        <div key={item.href} className="group/services flex items-center">
                            <Link
                                href={item.href}
                                aria-current={activeSection === item.label ? "location" : undefined}
                                className={`${navLinkStyles} group-hover/services:text-gold group-focus-within/services:text-gold`}
                            >
                                {renderLabel(item.label)}
                            </Link>

                            <div className="invisible absolute inset-x-0 top-full border-t border-gold/20 bg-cream text-foreground opacity-0 shadow-md transition-[opacity,visibility] duration-150 group-hover/services:visible group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:opacity-100 motion-reduce:transition-none">
                                <ul aria-label="Servicios" className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-6 py-5">
                                    {serviceItems.map((service) => (
                                        <li key={service.href}>
                                            <Link
                                                href={service.href}
                                                className="font-subtitle block py-2 text-sm tracking-[0.15em] transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                                            >
                                                {service.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={activeSection === item.label ? "location" : undefined}
                            className={`${navLinkStyles} flex items-center`}
                        >
                            {renderLabel(item.label)}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        href="https://www.instagram.com/gihadeco?igsi=M3RkMGVjYzE1cnQ4&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="instagram" size="small">
                            Instagram
                            <FaInstagram className="h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
