"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-neutral-200/90 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="font-display group flex items-center gap-3 text-lg font-semibold tracking-tight text-neutral-900 transition hover:text-neutral-700"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-sky-100 ring-1 ring-neutral-200/80 transition group-hover:ring-amber-300/60">
            <span className="font-display text-sm font-bold text-amber-800">H³</span>
          </span>
          <span className="hidden leading-tight sm:block">
            Triple H
            <span className="block text-[10px] font-normal uppercase tracking-[0.2em] text-neutral-500">
              Air Conditioning
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
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
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition hover:brightness-105 sm:inline-flex"
          >
            <i className="fa-solid fa-phone text-xs" aria-hidden />
            (813) 655-4501
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-lg`} aria-hidden />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-neutral-200 bg-white md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4 shadow-lg" aria-label="Mobile">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-neutral-800 hover:bg-neutral-50"
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+18136554501"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 font-semibold text-white"
          >
            <i className="fa-solid fa-phone" aria-hidden />
            (813) 655-4501
          </a>
        </nav>
      </div>
    </header>
  );
}
