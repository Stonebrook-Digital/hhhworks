"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/b/services", label: "Services" },
  { href: "/b/about", label: "About" },
  { href: "/b/gallery", label: "Gallery" },
  { href: "/b/contact", label: "Contact" },
];

export function BNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.07] bg-[#06060a]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link href="/b" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 ring-1 ring-cyan-400/30">
            <span className="font-[family-name:var(--font-b-mono)] text-xs font-bold text-cyan-300">H³</span>
          </span>
          <span className="font-[family-name:var(--font-b-sans)] text-sm font-semibold tracking-tight text-white">
            Triple H
            <span className="block font-[family-name:var(--font-b-mono)] text-[9px] font-normal uppercase tracking-[0.25em] text-zinc-500">
              Nocturne
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-2 font-[family-name:var(--font-b-mono)] text-xs uppercase tracking-wider transition ${
                  active ? "bg-white/10 text-cyan-300" : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+18136554501"
            className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 font-[family-name:var(--font-b-mono)] text-xs font-bold uppercase tracking-wide text-zinc-950 sm:inline-block"
          >
            (813) 655-4501
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} aria-hidden />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#06060a] px-5 py-4 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 font-[family-name:var(--font-b-mono)] text-sm text-zinc-300"
            >
              {label}
            </Link>
          ))}
          <a href="tel:+18136554501" className="mt-3 block text-cyan-400">
            (813) 655-4501
          </a>
        </div>
      )}
    </header>
  );
}
