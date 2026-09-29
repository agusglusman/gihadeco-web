import { FaSearch } from "react-icons/fa";

type CatalogToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  productCount: number;
};

export default function CatalogToolbar({
  search,
  onSearchChange,
  productCount,
}: CatalogToolbarProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-8">
        <div className="relative w-[380px]">
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar productos..."
            className="w-full border border-black/10 bg-white px-5 py-3 pr-12 font-body text-sm outline-none focus:border-gold"
          />

          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>

        <div className="flex items-center gap-4">
          <span className="font-body text-sm text-muted">
            Ordenar por:
          </span>

          <select className="border border-black/10 bg-white px-5 py-3 font-body text-sm outline-none">
            <option>Más populares</option>
            <option>Menor precio</option>
            <option>Mayor precio</option>
            <option>Nombre A-Z</option>
          </select>
        </div>
      </div>

      <p className="mt-7 font-body text-sm text-foreground">
        Mostrando {productCount} productos
      </p>
    </div>
  );
}