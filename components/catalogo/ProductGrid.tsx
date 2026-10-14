"use client";

import { useState } from "react";
import CatalogSidebar from "./CatalogSidebar";
import CatalogToolbar from "./CatalogToolbar";
import ProductCard from "./ProductCard";

import type { CatalogProduct } from "@/types/Product";

export default function ProductGrid({ products }: { products: CatalogProduct[] }) {
  const [selectedCategory, setSelectedCategory] =
    useState("Todos los productos");

  const [search, setSearch] = useState("");

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("name");
  const normalize = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const colors = [...new Set(products.flatMap(p => p.variants.map(v => v.color)).filter(Boolean))];
  const sizes = [...new Set(products.flatMap(p => p.variants.map(v => v.size)).filter(Boolean))];
  const variants = products.flatMap(product => product.variants);
  const filteredProducts = variants.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos los productos" ||
      product.category === selectedCategory;

    const matchesSearch = normalize(`${product.name} ${product.category} ${product.color} ${product.size}`)
      .includes(normalize(search.trim()));
    const matchesVariant = (!color || product.color === color) && (!size || product.size === size);
    return matchesCategory && matchesSearch && matchesVariant;
  });

  filteredProducts.sort((a,b) => {
    if (sort === "name") return a.name.localeCompare(b.name, "es");
    const x = a.price ?? Infinity, y = b.price ?? Infinity;
    if (!Number.isFinite(x)) return Number.isFinite(y) ? 1 : 0;
    if (!Number.isFinite(y)) return -1;
    return sort === "price-asc" ? x-y : y-x;
  });

  return (
    <section className="bg-[#FCFBF9] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row px-8">
        <CatalogSidebar
          categories={[...new Set(products.map(p => p.category))]}
          colors={colors} sizes={sizes} color={color} size={size}
          onColorChange={setColor} onSizeChange={setSize}
          onClear={() => { setColor(""); setSize(""); setSearch(""); setSelectedCategory("Todos los productos"); }}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="min-w-0 flex-1">
          <CatalogToolbar
            sort={sort} onSortChange={setSort}
            search={search}
            onSearchChange={setSearch}
            productCount={filteredProducts.length}
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-title text-3xl text-foreground">
                {products.length === 0 ? "Próximamente, nuestro catálogo" : "No encontramos productos"}
              </p>

              <p className="mt-3 font-body text-muted">
                {products.length === 0 ? "Consultanos por WhatsApp para conocer nuestras piezas." : "Probá con otra búsqueda o categoría."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}