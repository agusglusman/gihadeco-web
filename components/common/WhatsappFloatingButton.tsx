"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const messages: Record<string, string> = {
  "/": "¡Hola! Quería consultar sobre tus servicios.",
  "/ambientacion": "¡Hola! Quería consultar sobre el servicio de ambientación.",
  "/organizacion": "¡Hola! Quería consultar sobre el servicio de organización.",
  "/catalogo": "¡Hola! Quería consultar sobre el servicio de alquiler.",
};

export default function WhatsappFloatingButton() {
  const pathname = usePathname();
  const message = messages[pathname] ?? messages["/"];
  const href = `https://wa.me/5491165728905?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar una conversación por WhatsApp"
      title="Hablemos por WhatsApp"
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-[calc(1.5rem+env(safe-area-inset-right))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transition-none md:h-16 md:w-16"
    >
      <FaWhatsapp aria-hidden="true" className="h-8 w-8" />
    </a>
  );
}
