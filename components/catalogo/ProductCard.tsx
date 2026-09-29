"use client";

import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import type { Product } from "@/types/Product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article>
      <div className="group relative h-[300px] w-full overflow-hidden bg-[#F8F7F5]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          aria-label={`Agregar ${product.name} a favoritos`}
          className="absolute right-4 top-4 text-xl text-foreground transition-opacity hover:opacity-50"
        >
          <FaRegHeart />
        </button>
      </div>

      <div className="pt-4">
        <h3 className="font-subtitle text-xs uppercase tracking-[0.12em] text-foreground">
          {product.name}
        </h3>

        <p className="mt-2 font-body text-xs text-muted">
          {product.material}
        </p>

        <p className="mt-4 font-body text-sm text-foreground">
          $ {product.price.toLocaleString("es-AR")}
        </p>

        <button
          type="button"
          className="mt-5 w-full border border-gold px-5 py-3 font-subtitle text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-white"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}