import {
    FaInstagram,
    FaWhatsapp,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeart,
} from "react-icons/fa";

import Logo from "@/components/common/Logo";

const whatsappMessage =
    "Hola! Me gustaría recibir información sobre los servicios de GIHA DECO.";

const whatsappLink = `https://wa.me/5491165728905?text=${encodeURIComponent(
    whatsappMessage
)}`;

export default function Footer() {
    return (
        <footer
            id="contacto"
            className="bg-foreground text-[#F8F7F5]"
        >
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* MARCA */}
                    <div>
                        <Logo />

                        <p className="mt-5 max-w-sm font-body text-sm leading-6 text-[#F8F7F5]/80">
                            Diseñamos, organizamos y ambientamos eventos inolvidables.
                            Cuidamos cada detalle para que vos solo disfrutes.
                        </p>

                        <div className="mt-6 flex gap-5 text-xl">
                            <a
                                href="https://www.instagram.com/gihadeco"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="transition-colors hover:text-gold"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="transition-colors hover:text-gold"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* NAVEGACIÓN */}
                    <div>
                        <h3 className="font-subtitle text-xs uppercase tracking-[0.25em] text-gold">
                            Navegación
                        </h3>

                        <div className="my-4 h-px w-10 bg-gold" />

                        <nav className="flex flex-col items-start gap-3 font-body text-sm">
                            <a href="#" className="transition-opacity hover:text-gold">
                                Inicio
                            </a>

                            <a
                                href="#sobreNosotros"
                                className="transition-opacity hover:text-gold"
                            >
                                Sobre nosotros
                            </a>

                            <a
                                href="#services"
                                className="transition-opacity hover:text-gold"
                            >
                                Servicios
                            </a>

                            <a
                                href="#contacto"
                                className="transition-opacity hover:text-gold"
                            >
                                Contacto
                            </a>
                        </nav>
                    </div>

                    {/* SERVICIOS */}
                    <div>
                        <h3 className="font-subtitle text-xs uppercase tracking-[0.25em] text-gold">
                            Servicios
                        </h3>

                        <div className="my-4 h-px w-10 bg-gold" />

                        <div className="flex flex-col gap-3 font-body text-sm">
                            <a href="/ambientacion" 
                                className="transition-colors hover:text-gold"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span>Ambientación</span>
                            </a>

                            <a href="/organizacion" 
                                className="transition-colors hover:text-gold"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span>Organización</span>
                            </a>
                            
                            
                            <a href="/catalogo"
                                className="transition-colors hover:text-gold"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span>Alquiler</span>
                            </a>
                        </div>
                    </div>

                    {/* CONTACTO */}
                    <div>
                        <h3 className="font-subtitle text-xs uppercase tracking-[0.25em] text-gold">
                            Contacto
                        </h3>

                        <div className="my-4 h-px w-10 bg-gold" />

                        <div className="space-y-4 font-body text-sm">

                            <div className="flex items-center gap-3">
                                <a href="tel:+5491165728905" className="transition-colors hover:text-gold">
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-gold" />
                                        <span>11 6572 8905</span>
                                    </div>
                                </a>
                            </div>


                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.instagram.com/gihadeco"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="transition-colors hover:text-gold"
                                >
                                    <div className="flex items-center gap-3">
                                        <FaInstagram className="text-gold" />
                                        <span>@gihadeco</span>
                                    </div>
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <a href="mailto:gihadeco@gmail.com" className=" transition-colors hover:text-gold">
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-gold" />
                                        <span>gihadeco@gmail.com</span>
                                    </div>
                                </a>
                            </div>



                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-gold" />
                                <span>Buenos Aires, Argentina</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* PARTE INFERIOR */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-6 font-body text-xs text-white/70 md:flex-row md:items-center md:justify-between">

                    <p>
                        © {new Date().getFullYear()} Giha Deco. Todos los derechos reservados.
                    </p>

                </div>

            </div>
        </footer>
    );
}
