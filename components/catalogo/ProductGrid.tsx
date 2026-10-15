"use client";

import { useRef, useState } from "react";
import CatalogSidebar from "./CatalogSidebar";
import CatalogToolbar from "./CatalogToolbar";
import ProductCard from "./ProductCard";

import type { CatalogProduct } from "@/types/Product";

export default function ProductGrid({ products }: { products: CatalogProduct[] }) {
  const [selectedCategory, setSelectedCategory] =
    useState("Todos los productos");

  const [filtersOpen, setFiltersOpen] = useState(false);
  const filterButton = useRef<HTMLButtonElement>(null);
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

  const filters = (
    <CatalogSidebar className="w-full"
          categories={[...new Set(products.map(p => p.category))]}
          colors={colors} sizes={sizes} color={color} size={size}
          onColorChange={setColor} onSizeChange={setSize}
          onClear={() => { setColor(""); setSize(""); setSearch(""); setSelectedCategory("Todos los productos"); }}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
  );

  return (
    <section className="bg-[#FCFBF9] pb-10 pt-0 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row px-3 md:px-8">
        <div className="hidden w-[220px] shrink-0 self-start overflow-y-auto pr-3 md:sticky md:top-28 md:block md:max-h-[calc(100dvh-8rem)]">
          {filters}
        </div>

        <div className="min-w-0 flex-1">
          <div className="sticky top-[76px] z-30 -mx-3 bg-[#FCFBF9] px-3 py-3 shadow-sm md:static md:mx-0 md:p-0 md:shadow-none"
            onKeyDown={event => { if (event.key === "Escape") { setFiltersOpen(false); filterButton.current?.focus(); } }}>
          <CatalogToolbar
            filterButtonRef={filterButton} filtersOpen={filtersOpen} onToggleFilters={() => setFiltersOpen(!filtersOpen)}
            activeFilters={Number(selectedCategory !== "Todos los productos") + Number(Boolean(color)) + Number(Boolean(size))}
            sort={sort} onSortChange={setSort}
            search={search}
            onSearchChange={setSearch}
            productCount={filteredProducts.length}
          />

          {filtersOpen && <div id="mobile-catalog-filters" className="absolute inset-x-0 top-full max-h-[calc(100dvh-200px)] overflow-y-auto overscroll-contain border-t border-gold/25 bg-[#FCFBF9] p-5 shadow-lg md:hidden">
            {filters}
            <button type="button" onClick={() => { setFiltersOpen(false); filterButton.current?.focus(); }} className="mt-4 w-full bg-gold py-3 font-body text-sm text-white">Ver {filteredProducts.length} productos</button>
          </div>}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-x-2 gap-y-6 md:mt-10 md:grid-cols-2 md:gap-x-5 md:gap-y-12 lg:grid-cols-4">
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