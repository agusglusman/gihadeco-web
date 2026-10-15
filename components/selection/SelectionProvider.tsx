"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { FaHeart, FaRegHeart, FaTimes, FaTrash, FaWhatsapp } from "react-icons/fa";
import ProductImage from "@/components/catalogo/ProductImage";
import type { Product } from "@/types/Product";

import { getSelectionSummary } from "@/lib/selection-summary";

const STORAGE_KEY = "gihadeco-selection-v1";
type Selection = {
  items: Product[]; ready: boolean;
  add: (product: Product) => void;
  remove: (id: string) => void;
  close: () => void;
  clear: () => void;
};
const SelectionContext = createContext<Selection | null>(null);

function readSelection(): Product[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(saved)) return [];
    const valid = saved.filter((item): item is Product => {
      if (!item || typeof item !== "object") return false;
      return ["id", "name", "category", "description", "color", "size", "image"].every(k => typeof item[k] === "string")
        && (item.price === null || (typeof item.price === "number" && Number.isFinite(item.price)))
        && Array.isArray(item.dimensions) && item.dimensions.every((d: { label?: unknown; value?: unknown }) =>
          d && typeof d.label === "string" && typeof d.value === "number" && Number.isFinite(d.value));
    });
    return [...new Map(valid.map(item => [item.id, item])).values()];
  } catch { return []; }
}

export function useSelection() {
  const selection = useContext(SelectionContext);
  if (!selection) throw new Error("SelectionProvider no está disponible");
  return selection;
}

export default function SelectionProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const { total, missingPrices, message } = getSelectionSummary(items);
  const [ready, setReady] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const oldOverflow = useRef("");
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => { setItems(readSelection()); setReady(true); });
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) setItems(readSelection());
    };
    window.addEventListener("storage", sync);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("storage", sync); };
  }, []);

  function save(next: Product[]) {
    setItems(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); setStorageFailed(false); }
    catch { setStorageFailed(true); }
  }

  function open() {
    if (dialog.current?.open) return;
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    oldOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
  }

  function close() {
    dialog.current?.close();
  }

  function restoreFocus() {
    document.body.style.overflow = oldOverflow.current;
    opener.current?.focus();
  }

  return <SelectionContext.Provider value={{
    items, ready, close,
    clear: () => save([]),
    add: product => {
      if (!ready) return;
      save([...items.filter(item => item.id !== product.id), product]);
      open();
    },
    remove: id => save(items.filter(item => item.id !== id)),
  }}>
    {children}
    <dialog ref={dialog} aria-labelledby="selection-drawer-title" onClose={restoreFocus}
      onCancel={() => close()}
      onClick={event => { if (event.target === event.currentTarget) close(); }}
      className="selection-drawer fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-[440px] border-0 bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/40">
      <div className="flex h-full flex-col" onClick={event => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-gold/25 px-6 py-6">
          <h2 id="selection-drawer-title" className="font-title text-3xl">Mi selección <span className="font-body text-sm">({items.length})</span></h2>
          <button type="button" onClick={close} aria-label="Cerrar mi selección" className="p-3 hover:text-gold"><FaTimes /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-6">
          <SelectionItems />
        </div>
        <div className="max-h-[60dvh] shrink-0 overflow-y-auto border-t border-gold/25 p-6">
          <div className="mb-5">
            <p className="font-subtitle text-xs uppercase tracking-wider text-gold">Presupuesto esperado</p>
            <p aria-live="polite" className="mt-2 font-title text-4xl text-gold">{missingPrices ? "Desde " : ""}$ {total.toLocaleString("es-AR")}</p>
            <p className="mt-2 font-body text-xs leading-5 text-muted">Estimado por una unidad de cada variante, sujeto a confirmación.</p>
            {missingPrices && <p className="mt-1 font-body text-xs text-muted">No incluye las piezas con precio a consultar.</p>}
          </div>
          {ready && items.length > 0 && <a href={`https://wa.me/5491165728905?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"
            className="mb-3 flex w-full items-center justify-center gap-2 bg-gold px-4 py-4 text-center font-subtitle text-sm text-white transition-colors hover:bg-foreground">
            <FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0" /> Consultar selección por WhatsApp
          </a>}
          {storageFailed && <p role="status" className="mb-3 font-body text-sm">No pudimos guardar la selección en este navegador. Se conservará mientras sigas en esta página.</p>}
          <Link href="/mi-seleccion" onClick={close} className="block border border-gold px-6 py-3 text-center font-subtitle text-sm uppercase tracking-wider text-gold transition-colors hover:bg-foreground hover:text-white">Ver mi selección</Link>
          <button type="button" onClick={close} className="mt-3 w-full py-2 font-body text-sm text-muted">Seguir explorando</button>
        </div>
      </div>
    </dialog>
  </SelectionContext.Provider>;
}

export function SelectionButton({ compact = false }: { compact?: boolean }) {
  const { items } = useSelection();
  return <Link href="/mi-seleccion#inicio-seleccion" scroll={true} aria-label={`Mi selección, ${items.length} productos`}
    className={`group/selection relative inline-flex h-10 shrink-0 items-center justify-center gap-2 font-subtitle text-sm text-gold ${compact ? "w-10" : "border border-gold px-3"}`}>
    <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
      <FaRegHeart className="absolute inset-0 h-4 w-4 transition-opacity group-hover/selection:opacity-0" />
      <FaHeart className="absolute inset-0 h-4 w-4 opacity-0 transition-opacity group-hover/selection:opacity-100" />
    </span>{!compact && <span>Mi selección</span>}
    <span aria-hidden="true" className={`absolute flex items-center justify-center rounded-full bg-gold font-bold text-white ${compact ? "right-0 top-0 h-4 min-w-4 px-1 text-[9px] leading-none" : "-right-2 -top-3 min-w-6 px-1.5 py-1 text-[11px] leading-4"}`}>{items.length}</span>
  </Link>;
}

export function SelectionItems() {
  const { items, ready, remove, close } = useSelection();
  if (!ready) return <p role="status" className="py-12 font-body text-muted">Cargando tu selección…</p>;
  if (items.length === 0) return <div className="py-12 text-center">
    <FaRegHeart aria-hidden="true" className="mx-auto mb-5 h-8 w-8 text-gold" />
    <p className="font-title text-2xl">Tu selección está vacía</p>
    <p className="mt-3 font-body text-sm text-muted">Guardá las piezas que te gustan para tu evento.</p>
    <Link href="/catalogo" onClick={close} className="mt-6 inline-block border-b border-gold pb-1 font-body text-sm text-gold">Explorar el catálogo</Link>
  </div>;
  return <ul className="divide-y divide-gold/20">
    {items.map(item => <li key={item.id} className="flex gap-4 py-6">
      <Link href={`/catalogo/${encodeURIComponent(item.id)}`} onClick={close} className="relative h-28 w-20 shrink-0 bg-white">
        <ProductImage key={item.image} variant={item} contain sizes="80px" />
      </Link>
      <div className="min-w-0 flex-1">
        <Link href={`/catalogo/${encodeURIComponent(item.id)}`} onClick={close} className="font-title text-xl hover:text-gold">{item.name}</Link>
        <p className="mt-2 font-body text-xs capitalize text-muted">{[item.color, item.size === "unico" ? "Único" : item.size].filter(Boolean).join(" · ")}</p>
        <p className="mt-2 font-body text-sm">{item.price === null ? "Consultar precio" : `$ ${item.price.toLocaleString("es-AR")}`}</p>
        <button type="button" onClick={() => remove(item.id)} aria-label={`Quitar ${item.name} ${item.color} ${item.size} de mi selección`}
          className="mt-3 inline-flex items-center gap-2 py-1 font-body text-xs text-muted hover:text-foreground"><FaTrash aria-hidden="true" /> Quitar</button>
      </div>
    </li>)}
  </ul>;
}
