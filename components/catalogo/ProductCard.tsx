"use client";

import { useSelection } from "@/components/selection/SelectionProvider";
import Link from "next/link";
import ProductImage from "./ProductImage";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import type { Product } from "@/types/Product";

export default function ProductCard({ product }: {
  product: Product;
}) {
  const { items, ready, add, remove } = useSelection();
  const cover = product;
  const favorite = items.some(item => item.id === product.id);
  const priceLabel = product.price === null ? "Consultar precio" : `$ ${product.price.toLocaleString("es-AR")}`;


  return (
    <article className="min-w-0">
      <div className="group relative aspect-[2/3] w-full overflow-hidden bg-[#F8F7F5]">
        <Link href={`/catalogo/${encodeURIComponent(product.id)}`} aria-label={`Ver detalles de ${product.name}, ${product.color} ${product.size}`} className="absolute inset-0">
          <ProductImage key={cover.image} variant={cover} contain />
        </Link>
        <button type="button" disabled={!ready} aria-label={`${favorite ? "Quitar" : "Agregar"} ${product.name} ${cover.color} ${cover.size} ${favorite ? "de" : "a"} mi selección`}
          aria-pressed={favorite} onClick={() => favorite ? remove(cover.id) : add(cover)}
          className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center text-sm md:right-4 md:top-4 md:h-auto md:w-auto md:text-xl text-foreground transition-opacity hover:opacity-50">
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className="pt-2 md:pt-4">
        <h3 className="font-subtitle text-[10px] leading-4 uppercase tracking-normal md:text-xs md:tracking-[0.12em] text-foreground">{product.name}</h3>
        <p className="mt-1 font-body text-[10px] md:mt-2 md:text-xs capitalize text-muted">{[product.color, product.size === "unico" ? "Único" : product.size].filter(Boolean).join(" · ")}</p>
        <p className="mt-2 font-body text-xs md:mt-4 md:text-sm text-foreground">{priceLabel}</p>
        <Link href={`/catalogo/${encodeURIComponent(cover.id)}`}
          className="mt-2 block w-full text-center border border-gold px-1 py-2 font-subtitle text-[9px] uppercase tracking-normal md:mt-5 md:px-5 md:py-3 md:text-xs md:tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-white">Ver detalles</Link>
      </div>

    </article>
  );
}
