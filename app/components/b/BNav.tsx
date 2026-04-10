"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/b/services", label: "Services" },
  { href: "/b/about", label: "About Us" },
  { href: "/b/gallery", label: "Our Work" },
  { href: "/b/contact", label: "Contact" },
];

export function BNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] shadow-md">
      {/* Top bar — common on ARS / One Hour / dealer-style sites */}
      <div className="bg-[#b91c1c] py-2 text-center text-xs font-bold tracking-wide text-white">
        <span className="hidden sm:inline">24/7 EMERGENCY HVAC SERVICE · </span>
        <a href="tel:+18136554501" className="underline decoration-white/80 underline-offset-2 hover:text-white">
          Call now: (813) 655-4501
        </a>
      </div>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
          <Link href="/b" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded bg-[#0f2744] text-lg font-extrabold text-white">
              H
            </span>
            <div>
              <span className="block text-lg font-extrabold leading-tight text-[#0f2744]">Triple H Air</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#ea580c]">
                Conditioning
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded px-3 py-2 text-sm font-semibold transition ${
                    active ? "bg-slate-100 text-[#0f2744]" : "text-slate-700 hover:bg-slate-50 hover:text-[#0f2744]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/b/contact"
              className="hidden rounded-md bg-[#ea580c] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#c2410c] sm:inline-block"
            >
              Schedule service
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-[#0f2744] lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-lg`} aria-hidden />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-800"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/b/contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-md bg-[#ea580c] py-3 text-center text-sm font-bold text-white"
            >
              Schedule service
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
