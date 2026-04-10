"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/c/services", label: "Systems" },
  { href: "/c/about", label: "Studio" },
  { href: "/c/gallery", label: "Projects" },
  { href: "/c/contact", label: "Connect" },
];

export function CNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-[#dfe8e3] bg-[#fafdfb]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[1100px] items-center justify-between px-5 md:px-8">
        <Link href="/c" className="group flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-c-display)] text-2xl font-semibold tracking-tight text-[#1a2e26] md:text-[1.65rem]">
            triple h
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.35em] text-[#3f6b4f] sm:inline">
            clima
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[#e8f0ec] text-[#2d4a3e]"
                    : "text-[#4a6358] hover:bg-[#f0f5f2] hover:text-[#1a2e26]"
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
            className="hidden rounded-full bg-[#1a2e26] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#2d4a3e] md:inline-block"
          >
            (813) 655-4501
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5d4cc] text-[#1a2e26] md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} aria-hidden />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#dfe8e3] bg-[#fafdfb] px-5 py-4 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[#1a2e26]"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
