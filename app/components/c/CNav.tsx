"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/c/services", label: "Services" },
  { href: "/c/about", label: "About" },
  { href: "/c/gallery", label: "Gallery" },
  { href: "/c/contact", label: "Contact" },
];

export function CNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-stone-200/80 bg-[#f7f3eb]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/c" className="flex flex-col">
          <span className="font-[family-name:var(--font-c-serif)] text-xl italic text-stone-900 md:text-2xl">
            Triple H
          </span>
          <span className="font-[family-name:var(--font-c-sans)] text-[10px] font-medium uppercase tracking-[0.35em] text-[#c45c3a]">
            Atelier
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-[family-name:var(--font-c-sans)] text-sm font-medium transition ${
                  active ? "text-[#c45c3a]" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:+18136554501"
            className="hidden rounded-full border border-stone-300 bg-white px-5 py-2.5 font-[family-name:var(--font-c-sans)] text-sm text-stone-800 shadow-sm transition hover:border-[#c45c3a]/40 md:inline-block"
          >
            Call
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-stone-700`} aria-hidden />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-stone-200 bg-[#f7f3eb] px-6 py-4 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 font-[family-name:var(--font-c-sans)] text-stone-800"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
