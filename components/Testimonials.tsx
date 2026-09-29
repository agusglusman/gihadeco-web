"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Giha Deco hizo de nuestro evento algo soñado. Cada detalle superó nuestras expectativas. Gracias por tanto compromiso y dedicación.",
    author: "Melisa & Tomás",
  },
  {
    quote:
      "Desde el primer momento entendieron exactamente lo que queríamos. La ambientación quedó increíble y pudimos disfrutar sin preocuparnos por nada.",
    author: "Sofía & Martín",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
  },

  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function Testimonials() {
  // [índice, dirección]
  const [[currentIndex, direction], setPage] = useState<[number, number]>([
    0, 1,
  ]);

  function nextTestimonial() {
    setPage(([current]) => [
      current === testimonials.length - 1 ? 0 : current + 1,
      1,
    ]);
  }

  function previousTestimonial() {
    setPage(([current]) => [
      current === 0 ? testimonials.length - 1 : current - 1,
      -1,
    ]);
  }

  const testimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#F8F7F5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-subtitle text-xs uppercase tracking-[0.3em] text-foreground">
          Lo que dicen nuestros clientes
        </p>

        <div className="mt-8 grid grid-cols-[40px_1fr_40px] items-center gap-4 md:grid-cols-[60px_1fr_60px]">
          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Opinión anterior"
            className="flex h-10 w-10 items-center justify-center text-foreground transition-opacity hover:opacity-50"
          >
            <FaChevronLeft />
          </button>

          {/* Testimonial */}
          <div className="relative min-h-[240px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${currentIndex}-${direction}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <span className="font-title text-5xl leading-none text-foreground">
                  “
                </span>

                <p className="mt-2 max-w-3xl font-title text-2xl leading-relaxed text-foreground md:text-3xl">
                  {testimonial.quote}
                </p>

                <p className="mt-6 font-subtitle text-xs uppercase tracking-[0.3em] text-foreground">
                  {testimonial.author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Siguiente opinión"
            className="flex h-10 w-10 items-center justify-center text-foreground transition-opacity hover:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}