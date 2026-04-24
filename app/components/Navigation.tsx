"use client";

import Link from "next/link";
import { TripleHLogo } from "@/app/components/TripleHLogo";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = { href: string; label: string; shortLabel?: string };

const links: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas & reviews", shortLabel: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-[100] border-b border-navy/6 bg-surface/80 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-14 max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-85"
          onClick={() => setOpen(false)}
        >
          <TripleHLogo variant="mark" className="h-8 w-auto md:h-9" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(({ href, label, shortLabel }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                title={shortLabel ? label : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors lg:px-3.5 ${
                  active
                    ? "font-medium text-navy"
                    : "text-navy-muted hover:bg-navy/[0.04] hover:text-navy"
                }`}
              >
                {shortLabel ? (
                  <>
                    <span className="lg:hidden">{shortLabel}</span>
                    <span className="hidden lg:inline">{label}</span>
                  </>
                ) : (
                  label
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+18136554501"
            className="hidden items-center gap-2 rounded-full border border-navy/10 bg-surface px-3.5 py-2 text-sm font-medium text-navy shadow-[0_1px_2px_rgb(0_0_0_/0.04)] transition hover:border-navy/18 hover:bg-page sm:inline-flex"
          >
            <i className="fa-solid fa-phone text-[11px] text-brand-red" aria-hidden />
            <span className="hidden lg:inline tabular-nums">(813) 655-4501</span>
            <span className="lg:hidden">Call</span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/8 text-navy md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-base`} aria-hidden />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-navy/6 bg-surface md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-0.5 px-4 py-3" aria-label="Mobile">
          {links.map(({ href, label, shortLabel }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-[15px] ${
                pathname === href
                  ? "bg-navy/[0.06] font-medium text-navy"
                  : "text-navy-muted hover:bg-page hover:text-navy"
              }`}
            >
              {shortLabel ?? label}
            </Link>
          ))}
          <a
            href="tel:+18136554501"
            className="mt-1 flex items-center justify-center gap-2 rounded-lg border border-navy/10 py-3.5 text-sm font-medium text-navy"
          >
            <i className="fa-solid fa-phone text-brand-red" aria-hidden />
            (813) 655-4501
          </a>
        </nav>
      </div>
    </header>
  );
}
