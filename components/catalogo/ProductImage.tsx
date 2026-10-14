"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/Product";

export default function ProductImage({ variant, contain = false, sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" }: {
  variant: Product; contain?: boolean; sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  return variant.image && !failed ? (
    <Image src={variant.image} alt={`${variant.name} ${variant.color} ${variant.size}`}
      fill sizes={sizes} onError={() => setFailed(true)}
      className={contain ? "object-contain" : "object-cover transition-transform duration-500 group-hover:scale-105"} />
  ) : <div className="flex h-full items-center justify-center p-2 text-center font-body text-xs text-muted">Foto próximamente</div>;
}
