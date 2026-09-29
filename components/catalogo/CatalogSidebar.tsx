const categories = [
  "Todos los productos",
  "Pies",
  "Candelabros",
  "Centros de mesa",
  "Copones",
  "Bajoplatos y vajilla",
  "Complementos",
  "Velas y fanales",
  "Árboles y flores",
  "Otros",
];

const materials = [
  "Cristal",
  "Metal",
  "Cerámica",
  "Madera",
  "Tela",
  "Otros",
];

const sizes = [
  "Chico",
  "Mediano",
  "Grande",
];

type CatalogSidebarProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CatalogSidebar({
  selectedCategory,
  onCategoryChange,
}: CatalogSidebarProps) {
  return (
    <aside className="w-[220px] shrink-0">
      <h2 className="font-subtitle text-xs uppercase tracking-[0.25em] text-foreground">
        Categorías
      </h2>

      <div className="mt-5 flex flex-col gap-1">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-3 text-left font-body text-sm transition-colors ${
              selectedCategory === category
                ? "bg-[#EEE7DF] text-foreground"
                : "hover:bg-[#F8F7F5]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="my-9 h-px bg-black/10" />

      <h2 className="font-subtitle text-xs uppercase tracking-[0.25em] text-foreground">
        Filtros
      </h2>

      {/* COLOR */}
      <div className="mt-7">
        <h3 className="font-subtitle text-[11px] uppercase tracking-[0.15em]">
          Color
        </h3>

        <div className="mt-4 flex gap-3">
          <button className="h-5 w-5 rounded-full bg-[#C4A979]" />
          <button className="h-5 w-5 rounded-full bg-[#8C7B70]" />
          <button className="h-5 w-5 rounded-full bg-[#C0C0C0]" />
          <button className="h-5 w-5 rounded-full bg-black" />
          <button className="h-5 w-5 rounded-full border border-black/20 bg-white" />
        </div>
      </div>

      {/* MATERIAL */}
      <div className="mt-8">
        <h3 className="font-subtitle text-[11px] uppercase tracking-[0.15em]">
          Material
        </h3>

        <div className="mt-4 space-y-3">
          {materials.map((material) => (
            <label
              key={material}
              className="flex items-center gap-3 font-body text-sm text-muted"
            >
              <input type="checkbox" />
              {material}
            </label>
          ))}
        </div>
      </div>

      {/* TAMAÑO */}
      <div className="mt-8">
        <h3 className="font-subtitle text-[11px] uppercase tracking-[0.15em]">
          Tamaño
        </h3>

        <div className="mt-4 space-y-3">
          {sizes.map((size) => (
            <label
              key={size}
              className="flex items-center gap-3 font-body text-sm text-muted"
            >
              <input type="checkbox" />
              {size}
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="mt-9 w-full border border-gold px-4 py-3 font-subtitle text-xs uppercase tracking-[0.15em] text-gold"
      >
        Limpiar filtros
      </button>
    </aside>
  );
}