type Props = {
  className?: string;
  categories: string[]; colors: string[]; sizes: string[];
  selectedCategory: string; color: string; size: string;
  onCategoryChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  onClear: () => void;
};

export default function CatalogSidebar(props: Props) {
  return (
    <aside aria-label="Filtros del catálogo" tabIndex={0} className={props.className ?? "w-full shrink-0 max-h-[55dvh] overflow-y-auto overscroll-contain pr-3 md:sticky md:top-28 md:max-h-[calc(100dvh-8rem)] md:self-start md:w-[220px]"}>
      <h2 className="font-subtitle text-xs uppercase tracking-[0.25em] text-foreground">Categorías</h2>
      <div className="mt-5 flex flex-col gap-1">
        {["Todos los productos", ...props.categories].map(category => (
          <button key={category} type="button" aria-pressed={props.selectedCategory === category}
            onClick={() => props.onCategoryChange(category)}
            className={`px-4 py-3 text-left font-body text-sm transition-colors ${props.selectedCategory === category ? "bg-[#EEE7DF] text-foreground" : "hover:bg-[#F8F7F5]"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="my-9 h-px bg-black/10" />
      <h2 className="font-subtitle text-xs uppercase tracking-[0.25em] text-foreground">Filtros</h2>
      {[
        { label: "Color", options: props.colors, value: props.color, change: props.onColorChange },
        { label: "Tamaño", options: props.sizes, value: props.size, change: props.onSizeChange },
      ].map(filter => (
        <fieldset key={filter.label} className="mt-7">
          <legend className="font-subtitle text-[11px] uppercase tracking-[0.15em]">{filter.label}</legend>
          <div className="mt-4 space-y-3">
            {filter.options.map(value => (
              <label key={value} className="flex items-center gap-3 font-body text-sm capitalize text-muted">
                <input type="checkbox" className="h-3.5 w-3.5 shrink-0 appearance-none rounded-full border border-muted checked:border-gold checked:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" checked={filter.value === value} onChange={() => filter.change(filter.value === value ? "" : value)} />
                {value === "unico" ? "Único" : value}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button type="button" onClick={props.onClear} className="mt-9 w-full border border-gold px-4 py-3 font-subtitle text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:border-foreground hover:bg-foreground hover:text-white">Limpiar filtros</button>
    </aside>
  );
}
