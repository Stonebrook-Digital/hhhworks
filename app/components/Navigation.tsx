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
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-navy/10 bg-surface/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 transition hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <TripleHLogo variant="mark" className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {links.map(({ href, label, shortLabel }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                title={shortLabel ? label : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition lg:px-4 ${
                  active
                    ? "bg-navy text-surface"
                    : "text-navy-muted hover:bg-page hover:text-navy"
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

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+18136554501"
            className="hidden items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-red/25 transition hover:bg-brand-red-hover sm:inline-flex"
          >
            <i className="fa-solid fa-phone text-xs" aria-hidden />
            <span className="hidden lg:inline">(813) 655-4501</span>
            <span className="lg:hidden">Call</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 bg-surface text-navy md:hidden"
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
        className={`border-t border-navy/10 bg-surface md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-0.5 px-5 py-4 shadow-lg" aria-label="Mobile">
          {links.map(({ href, label, shortLabel }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 font-medium ${
                pathname === href ? "bg-navy text-surface" : "text-navy hover:bg-page"
              }`}
            >
              {shortLabel ?? label}
            </Link>
          ))}
          <a
            href="tel:+18136554501"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-red py-3.5 font-semibold text-white"
          >
            <i className="fa-solid fa-phone" aria-hidden />
            (813) 655-4501
          </a>
        </nav>
      </div>
    </header>
  );
}
