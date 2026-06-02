"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ASSETS, PHONE, PHONE_HREF } from "@/lib/site";

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
    <header className="fixed top-0 right-0 left-0 z-[100] border-b border-navy/5 bg-surface/85 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/75">
      <div className="container-site flex h-[3.75rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <Image
            src={ASSETS.logo}
            alt="Triple H Air Conditioning"
            width={160}
            height={48}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {links.map(({ href, label, shortLabel }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                title={shortLabel ? label : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
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
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-navy-muted transition hover:text-navy sm:inline-flex"
          >
            <i className="fa-solid fa-phone text-[11px] text-accent" aria-hidden />
            <span className="hidden tabular-nums lg:inline">{PHONE}</span>
          </a>
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Free estimate
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy/8 text-navy md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} aria-hidden />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-navy/6 bg-surface md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="container-site flex flex-col gap-0.5 py-4" aria-label="Mobile">
          {links.map(({ href, label, shortLabel }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-[15px] ${
                pathname === href
                  ? "bg-navy/[0.05] font-medium text-navy"
                  : "text-navy-muted hover:bg-page"
              }`}
            >
              {shortLabel ?? label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Free estimate
          </Link>
          <a
            href={PHONE_HREF}
            className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-navy/8 py-3 text-sm font-medium text-navy"
          >
            <i className="fa-solid fa-phone text-accent" aria-hidden />
            {PHONE}
          </a>
        </nav>
      </div>
    </header>
  );
}
