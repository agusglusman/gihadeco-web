"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";
import { FaChevronDown, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { SelectionButton } from "@/components/selection/SelectionProvider";


const navItems = [
    {
        label: "Inicio",
        href: "/#inicio",
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
    { label: "Ambientación", href: "/ambientacion#inicio-ambientacion" },
    { label: "Organización", href: "/organizacion#inicio-organizacion" },
    { label: "Alquiler", href: "/catalogo#inicio-catalogo" },
];

const navLinkStyles =
    "transition-opacity duration-200 hover:opacity-60";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [servicesHovered, setServicesHovered] = useState(false);
    const servicesVisible = servicesOpen || servicesHovered;
    const menuButton = useRef<HTMLButtonElement>(null);
    const showSelection = pathname === "/catalogo" || pathname.startsWith("/catalogo/") || pathname === "/mi-seleccion";
    const closeMenu = () => { setMenuOpen(false); setServicesOpen(false); setServicesHovered(false); };
    const headerRef = useRef<HTMLElement>(null);
    const defaultSection = pathname === "/" ? "Inicio" : pathname === "/mi-seleccion" ? "Mi selección" : "Servicios";
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
        <header ref={headerRef} onKeyDown={event => {
            if (event.key === "Escape" && menuOpen) {
                closeMenu();
                menuButton.current?.focus();
            }
        }} className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-foreground">
            <div className="mx-auto flex h-[75px] max-w-7xl items-center justify-between md:h-auto gap-3 px-4 lg:px-6">
                <Link href="/#inicio" scroll={true} onClick={closeMenu} className="w-36 shrink-0 py-5 md:w-28 lg:w-auto">
                    <Logo />
                </Link>
                

                <nav aria-label="Navegación principal" className="hidden items-stretch self-stretch gap-3 text-[10px] text-background uppercase md:flex lg:text-sm xl:gap-8">
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

                <div className="hidden items-center gap-2 md:flex lg:gap-4">
                    {showSelection && <SelectionButton />}
                    <a
                        className="inline-flex h-10 shrink-0 items-center gap-2 border border-gold px-3 font-body text-sm text-gold transition-colors hover:bg-gold hover:text-foreground"
                        href="https://www.instagram.com/gihadeco?igsi=M3RkMGVjYzE1cnQ4&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            Instagram
                            <FaInstagram className="h-4 w-4" />
                    </a>
                </div>
                <div className="flex items-center gap-3 md:hidden">
                    {showSelection && <SelectionButton compact />}
                <button ref={menuButton} type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => {
                        setMenuOpen(!menuOpen); setServicesOpen(false);
                    }} className="p-3 text-gold md:hidden">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="h-6 w-6">
                        {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                    </svg>
                </button>
                </div>
            </div>
            {menuOpen && <nav id="mobile-navigation" aria-label="Navegación móvil"
                className="absolute inset-x-0 top-full max-h-[calc(100dvh-90px)] overflow-y-auto overscroll-contain border-t border-gold/25 bg-foreground px-6 py-5 text-background shadow-xl md:hidden">
                <ul className="space-y-2">
                    {navItems.map(item => <li key={item.label}
                        onPointerEnter={item.label === "Servicios" ? event => { if (event.pointerType === "mouse") setServicesHovered(true); } : undefined}
                        onPointerLeave={item.label === "Servicios" ? event => { if (event.pointerType === "mouse") setServicesHovered(false); } : undefined}>
                        <div className="flex items-center justify-between">
                            <Link href={item.href} onClick={closeMenu} aria-current={activeSection === item.label ? "location" : undefined}
                                className={`block flex-1 py-3 font-subtitle text-sm uppercase tracking-wider hover:text-gold ${activeSection === item.label ? "text-gold" : ""}`}>
                                {item.label}
                            </Link>
                            {item.label === "Servicios" && <button type="button" aria-label="Mostrar servicios" aria-expanded={servicesVisible}
                                aria-controls="mobile-services" onClick={() => { setServicesOpen(!servicesOpen); setServicesHovered(false); }} className="p-3 text-gold">
                                <FaChevronDown aria-hidden="true" className={`transition-transform ${servicesVisible ? "rotate-180" : ""}`} />
                            </button>}
                        </div>
                        {item.label === "Servicios" && servicesVisible && <ul id="mobile-services" className="mb-3 ml-2 border-l border-gold/40 pl-5">
                            {serviceItems.map(service => <li key={service.href}>
                                <Link href={service.href} onClick={closeMenu} className="block py-3 font-body text-sm hover:text-gold">{service.label}</Link>
                            </li>)}
                        </ul>}
                    </li>)}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-gold/25 pt-5">
                    <a href="https://www.instagram.com/gihadeco?igsi=M3RkMGVjYzE1cnQ4&utm_source=qr" target="_blank" rel="noopener noreferrer"
                        onClick={closeMenu} className="inline-flex h-10 items-center gap-2 border border-gold px-4 font-body text-sm text-gold hover:bg-gold hover:text-foreground">
                        Instagram <FaInstagram aria-hidden="true" />
                    </a>
                </div>
            </nav>}
        </header>
    );
}
