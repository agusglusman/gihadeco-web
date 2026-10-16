"use client";

import { useId, useState } from "react";

export default function QuantitySelector({ value, max, onChange, disabled = false }: {
  value: number; max: number; onChange: (quantity: number) => void; disabled?: boolean;
}) {
  const id = useId();
  const [draft, setDraft] = useState<string | null>(null);
  const [error, setError] = useState("");
  function update(next: number) {
    setError(next > max ? `La cantidad máxima es ${max}.` : "");
    onChange(Math.max(0, Math.min(max, Math.floor(next))));
  }
  return <div className="font-body text-sm">
    <label htmlFor={id} className="mb-2 block text-muted">Cantidad</label>
    <div className="inline-flex h-10 items-center border border-gold">
      <button type="button" disabled={disabled || value === 0} aria-label="Restar una unidad" onClick={() => { setDraft(null); update(value - 1); }} className="h-full w-10 text-lg hover:bg-cream disabled:opacity-40">−</button>
      <input id={id} type="number" inputMode="numeric" min={0} max={max} step={1} disabled={disabled}
        aria-describedby={error ? `${id}-error` : undefined} aria-invalid={Boolean(error)}
        value={draft ?? value} onChange={event => {
          const raw = event.target.value;
          if (raw === "") { setDraft(""); return; }
          setDraft(null);
          const next = Number(raw);
          if (Number.isFinite(next)) update(next);
        }} onBlur={() => { if (draft === "") update(0); setDraft(null); }}
        className="h-full w-14 min-w-0 bg-transparent text-center outline-gold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
      <button type="button" disabled={disabled} aria-label="Sumar una unidad" onClick={() => { setDraft(null); update(value + 1); }} className="h-full w-10 text-lg hover:bg-cream disabled:opacity-40">+</button>
    </div>
    {error && <p id={`${id}-error`} role="status" className="mt-2 text-sm text-foreground">{error}</p>}
  </div>;
}
