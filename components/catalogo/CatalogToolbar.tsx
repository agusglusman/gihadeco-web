import type { Ref } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";

type CatalogToolbarProps = {
  filterButtonRef: Ref<HTMLButtonElement>;
  filtersOpen: boolean; onToggleFilters: () => void; activeFilters: number;
  sort: string;
  onSortChange: (value: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  productCount: number;
};

export default function CatalogToolbar({
  filterButtonRef, filtersOpen, onToggleFilters, activeFilters,
  sort, onSortChange,
  search,
  onSearchChange,
  productCount,
}: CatalogToolbarProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap md:gap-8">
        <div className="relative min-w-0 flex-1 md:w-[380px] md:flex-none">
          <input
            aria-label="Buscar productos"
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar productos..."
            className="w-full border border-black/10 bg-white px-3 py-3 pr-9 md:px-5 md:pr-12 font-body text-sm outline-none focus:border-gold"
          />

          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>

        <button ref={filterButtonRef} type="button" aria-expanded={filtersOpen} aria-controls="mobile-catalog-filters" onClick={onToggleFilters}
          className="flex h-11 shrink-0 items-center gap-2 border border-gold px-3 font-body text-xs text-gold md:hidden">
          <FaSlidersH aria-hidden="true" /> Filtros{activeFilters > 0 ? ` (${activeFilters})` : ""}
        </button>
        <div className="flex w-full items-center justify-between gap-2 md:w-auto md:gap-4">
          <span className="font-body text-[11px] md:hidden">{productCount} productos</span>
          <span className="hidden font-body text-sm text-muted md:inline">
            Ordenar por:
          </span>

          <select aria-label="Ordenar productos" value={sort} onChange={e => onSortChange(e.target.value)} className="border border-black/10 bg-white px-2 py-2 font-body text-[11px] md:px-5 md:py-3 md:text-sm outline-none">

            <option value="price-asc">Menor precio</option>
            <option value="price-desc">Mayor precio</option>
            <option value="name">Nombre A-Z</option>
          </select>
        </div>
      </div>

      <p className="mt-7 hidden md:block font-body text-sm text-foreground">
        Mostrando {productCount} productos
      </p>
    </div>
  );
}
