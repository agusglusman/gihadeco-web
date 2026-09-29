"use client";

import { useState } from "react";
import CatalogSidebar from "./CatalogSidebar";
import CatalogToolbar from "./CatalogToolbar";
import ProductCard from "./ProductCard";

import type { Product } from "@/types/Product";

const products: Product[] = [
  {
    id: "pie-001",
    name: "Lámpara Cristal Dorada",
    category: "Pies",
    material: "Metal y cristal",
    color: "Dorado",
    size: "Grande",
    price: 28000,
    image: "/catalogo/productos/lampara-dorada.jpg",
  },
  {
    id: "can-001",
    name: "Candelabro Plateado",
    category: "Candelabros",
    material: "Metal",
    color: "Plateado",
    size: "Mediano",
    price: 18000,
    image: "/catalogo/productos/candelabro-plateado.jpg",
  },
  {
    id: "cop-001",
    name: "Copón Cristal Dorado",
    category: "Copones",
    material: "Cristal y metal",
    color: "Dorado",
    size: "Mediano",
    price: 9000,
    image: "/catalogo/productos/copon-dorado.jpg",
  },
  {
    id: "vaj-001",
    name: "Bajoplato Dorado",
    category: "Bajoplatos y vajilla",
    material: "Metal",
    color: "Dorado",
    size: "Mediano",
    price: 4500,
    image: "/catalogo/productos/bajoplato-dorado.jpg",
  },
];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState("Todos los productos");

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos los productos" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#FCFBF9] py-16">
      <div className="mx-auto flex max-w-7xl gap-12 px-8">
        <CatalogSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="min-w-0 flex-1">
          <CatalogToolbar
            search={search}
            onSearchChange={setSearch}
            productCount={filteredProducts.length}
          />

          <div className="mt-10 grid grid-cols-4 gap-x-5 gap-y-12">
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
                No encontramos productos
              </p>

              <p className="mt-3 font-body text-muted">
                Probá con otra búsqueda o categoría.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}