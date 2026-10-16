"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import type { CatalogProduct, Product } from "@/types/Product";
import QuantitySelector from "./QuantitySelector";
import ProductImage from "./ProductImage";
import { useSelection } from "@/components/selection/SelectionProvider";

function variantName(variant: Product) {
  const size = variant.size.toLowerCase() === "unico" ? "Único" : variant.size;
  return [variant.color, size].filter(Boolean).join(" · ") || variant.id;
}

export default function ProductDetail({ product, initialCode }: { product: CatalogProduct; initialCode: string }) {
  const [selected, setSelected] = useState(initialCode);
  const { items, ready, add } = useSelection();
  const variant = product.variants.find(v => v.id === selected) ?? product.variants[0];
  const name = variantName(variant);
  const savedItem = items.find(item => item.id === variant.id);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const quantity = Math.min(variant.available, quantities[variant.id] ?? savedItem?.quantity ?? 1);
  const saved = Boolean(savedItem);
  const message = `¡Hola! Quería consultar por ${product.name}, variante ${name}.`;

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-4 lg:px-8">
      <Link href="/catalogo" className="mb-5 inline-flex items-center gap-3 font-body text-sm text-muted transition-colors hover:text-gold">
        <FaArrowLeft aria-hidden="true" /> Volver al catálogo
      </Link>
      <div className="grid items-stretch gap-5 md:gap-8 md:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className={`mx-auto grid w-full max-w-[248px] md:max-w-[412px] items-start gap-3 sm:gap-4 ${product.variants.length > 1 ? "grid-cols-[56px_minmax(0,1fr)]" : "grid-cols-1"}`}>
          {product.variants.length > 1 && <fieldset className="min-w-0 max-h-[270px] overflow-y-auto md:max-h-none md:overflow-visible">
            <legend className="sr-only">Elegí tu variante</legend>
            <div className="flex flex-col gap-2">
              {product.variants.map(option => (
                <button key={option.id} type="button" aria-pressed={variant.id === option.id}
                  aria-label={`Seleccionar ${variantName(option)}`}
                  onClick={() => setSelected(option.id)}
                  className={`w-14 border p-0.5 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${variant.id === option.id ? "border-gold bg-cream ring-1 ring-gold" : "border-foreground/15 bg-white hover:border-gold"}`}>
                  <span className="relative block aspect-[3/4]">
                    <ProductImage variant={option} sizes="56px" />
                  </span>
                  <span className="mt-1 block font-body text-[9px] capitalize leading-3">{variantName(option)}</span>
                </button>
              ))}
            </div>
          </fieldset>}
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[180px] overflow-hidden md:max-w-[min(340px,calc(66.667dvh-150px))]">
            <ProductImage key={variant.image} variant={variant} sizes="(max-width: 767px) 180px, 340px" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 md:py-2">
          <div>
          <p className="font-subtitle text-xs uppercase tracking-[0.25em] text-gold">{product.category}</p>
          <h1 className="mt-3 font-title text-3xl leading-tight lg:text-4xl">{product.name}</h1>
          <div className="my-4 h-px w-12 bg-gold" />
          </div>
          <div aria-live="polite" aria-atomic="true">
            <div className="flex items-end gap-4 md:block">
              <div className="min-w-0">
                <p className="font-body text-sm capitalize text-muted">{name}</p>
                <p className="mt-3 font-title text-2xl">{variant.price === null ? "Consultar precio" : `$ ${variant.price.toLocaleString("es-AR")}`}</p>
              </div>
              <div className="ml-auto w-[138px] shrink-0 md:hidden">
                <QuantitySelector key={variant.id} value={quantity} max={variant.available} onChange={value => setQuantities(previous => ({ ...previous, [variant.id]: value }))} />
              </div>
            </div>
            {variant.description && <p className="mt-4 font-body text-sm leading-6 text-muted">{variant.description}</p>}
            {variant.dimensions.length > 0 && (
              <dl className="mt-5 border-t border-foreground/10">
                {variant.dimensions.map(d => <div key={d.label} className="flex justify-between border-b border-foreground/10 py-2.5 font-body text-sm">
                  <dt className="text-muted">{d.label}</dt><dd>{d.value.toLocaleString("es-AR")} cm</dd>
                </div>)}
              </dl>
            )}
          </div>
          <div>
          <div className="mb-4 hidden md:block"><QuantitySelector key={variant.id} value={quantity} max={variant.available} onChange={value => setQuantities(previous => ({ ...previous, [variant.id]: value }))} /></div>
          {variant.available === 0 && <p className="mb-3 font-body text-sm text-muted">Sin disponibilidad por el momento.</p>}
          <button type="button" disabled={!ready || quantity === 0} onClick={() => add(variant, quantity)}
            className="block w-full border border-gold px-6 py-4 font-subtitle text-sm uppercase tracking-[0.1em] text-gold transition-colors hover:bg-gold hover:text-white disabled:opacity-50">
            {saved ? "Actualizar mi selección" : "Agregar a mi selección"}
          </button>
          <a href={`https://wa.me/5491165728905?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 font-subtitle text-sm uppercase tracking-[0.1em] text-white transition-colors hover:bg-foreground">
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> Consultar esta variante
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
