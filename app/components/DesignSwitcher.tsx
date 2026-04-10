"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { hrefForDesign, parseDesignPath, type DesignId } from "@/lib/design-routes";

const OPTIONS: { id: DesignId; name: string; tagline: string }[] = [
  { id: "a", name: "Design A", tagline: "Light · Syne · Tampa editorial" },
  { id: "b", name: "Design B", tagline: "Nocturne · Grid · Neon signal" },
  { id: "c", name: "Design C", tagline: "Terra · Serif · Atelier calm" },
];

export function DesignSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const { design, slug } = parseDesignPath(pathname || "/");

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-[300] flex flex-col items-end gap-2">
      {open && (
        <div
          className="mb-1 w-[min(calc(100vw-2rem),17rem)] rounded-2xl border border-neutral-200/80 bg-white/95 p-2 shadow-2xl shadow-neutral-900/15 backdrop-blur-md"
          role="menu"
          aria-label="Switch site design"
        >
          <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Preview design
          </p>
          {OPTIONS.map((opt) => {
            const href = hrefForDesign(opt.id, slug);
            const active = design === opt.id;
            return (
              <Link
                key={opt.id}
                href={href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`flex flex-col rounded-xl px-3 py-2.5 transition ${
                  active ? "bg-neutral-900 text-white" : "text-neutral-800 hover:bg-neutral-100"
                }`}
              >
                <span className="text-sm font-semibold">{opt.name}</span>
                <span
                  className={`mt-0.5 text-[11px] leading-tight ${active ? "text-neutral-300" : "text-neutral-500"}`}
                >
                  {opt.tagline}
                </span>
                {active && (
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
                    Active
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-neutral-900 text-white shadow-lg shadow-neutral-900/30 transition hover:scale-105 hover:bg-neutral-800"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={open ? "Close design menu" : "Choose design variant"}
      >
        <i className="fa-solid fa-ellipsis-vertical text-lg" aria-hidden />
      </button>
    </div>
  );
}
