"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ASSETS, PHONE, PHONE_HREF, SERVICES } from "@/lib/site";

type NavLink = { href: string; label: string; shortLabel?: string };

const links: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas & reviews", shortLabel: "Areas" },
  { href: "/contact", label: "Contact" },
];

/** Any scroll past this (px) triggers the full sticky state */
const SCROLL_TRIGGER = 6;
/** How quickly the header eases toward its target (higher = faster settle) */
const SCROLL_SMOOTHING = 0.11;
const FLOATING_MAX_WIDTH = 1152;
const SIDE_INSET = 12;

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

function getScrollTarget(isHome: boolean) {
  if (!isHome) return 1;
  return window.scrollY > SCROLL_TRIGGER ? 1 : 0;
}

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [morph, setMorph] = useState(() => (isHome ? 0 : 1));
  const [floatingTop, setFloatingTop] = useState(12);
  const [viewportWidth, setViewportWidth] = useState(0);
  const morphRef = useRef(isHome ? 0 : 1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const syncTopInset = () => setFloatingTop(mq.matches ? 16 : 12);
    syncTopInset();
    mq.addEventListener("change", syncTopInset);
    return () => mq.removeEventListener("change", syncTopInset);
  }, []);

  useEffect(() => {
    const syncViewport = () => setViewportWidth(window.innerWidth);
    syncViewport();
    window.addEventListener("resize", syncViewport, { passive: true });
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (!isHome) {
      morphRef.current = 1;
      setMorph(1);
      return;
    }

    let frame = 0;

    const tick = () => {
      const target = getScrollTarget(true);
      const current = morphRef.current;
      const next =
        Math.abs(target - current) < 0.0004
          ? target
          : current + (target - current) * SCROLL_SMOOTHING;

      morphRef.current = next;
      setMorph(next);
      frame = requestAnimationFrame(tick);
    };

    morphRef.current = getScrollTarget(true);
    setMorph(morphRef.current);
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    if (!isHome) {
      morphRef.current = 1;
      setMorph(1);
      return;
    }
    morphRef.current = getScrollTarget(true);
    setMorph(morphRef.current);
  }, [isHome, pathname]);

  const progress = isHome ? morph : 1;
  const sideInset = lerp(SIDE_INSET, 0, progress);
  const topInset = lerp(floatingTop, 0, progress);
  const radius = lerp(16, 0, progress);
  const shadowY = lerp(12, 0, progress);
  const shadowBlur = lerp(40, 0, progress);
  const shadowAlpha = lerp(0.35, 0, progress);
  const borderSide = lerp(1, 0, progress);
  const borderAlpha = lerp(0.1, 0.08, progress);

  const floatWidth =
    viewportWidth > 0
      ? Math.min(FLOATING_MAX_WIDTH, viewportWidth - SIDE_INSET * 2)
      : FLOATING_MAX_WIDTH;
  const barWidth =
    viewportWidth > 0 ? lerp(floatWidth, viewportWidth, progress) : undefined;

  const shellStyle = {
    marginTop: topInset,
    marginLeft: "auto" as const,
    marginRight: "auto" as const,
    width: barWidth ? `${barWidth}px` : `calc(100% - ${sideInset * 2}px)`,
    borderRadius: radius,
    boxShadow:
      shadowAlpha > 0.01
        ? `0 ${shadowY}px ${shadowBlur}px rgb(0 0 0 / ${shadowAlpha})`
        : undefined,
    borderTopWidth: borderSide,
    borderLeftWidth: borderSide,
    borderRightWidth: borderSide,
    borderBottomWidth: 1,
    borderStyle: "solid" as const,
    borderColor: `rgba(255, 255, 255, ${borderAlpha})`,
  };

  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100]">
      <div
        className={`pointer-events-auto bg-navy-deep ${open ? "overflow-hidden" : "overflow-visible"}`}
        style={shellStyle}
      >
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
              style={{ width: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 overflow-visible md:flex" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                  servicesActive
                    ? "font-medium text-white"
                    : "text-surface/70 hover:bg-white/[0.06] hover:text-white"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <i
                  className={`fa-solid fa-chevron-down text-[9px] opacity-70 transition ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </Link>
              <div
                className={`absolute top-full left-0 z-50 pt-2 transition-opacity duration-200 ${servicesOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <ul className="min-w-[15.5rem] overflow-hidden rounded-xl border border-white/10 bg-navy-deep py-1.5 shadow-[0_16px_40px_rgb(0_0_0_/0.35)]">
                  {SERVICES.map((service) => {
                    const active = pathname === service.href;
                    return (
                      <li key={service.id}>
                        <Link
                          href={service.href}
                          className={`block px-4 py-2.5 text-sm transition ${
                            active
                              ? "bg-brand font-medium text-white"
                              : "text-surface/80 hover:bg-white/[0.06] hover:text-white"
                          }`}
                        >
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {links.map(({ href, label, shortLabel }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  title={shortLabel ? label : undefined}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    active
                      ? "font-medium text-white"
                      : "text-surface/70 hover:bg-white/[0.06] hover:text-white"
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
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-surface/75 transition hover:text-white sm:inline-flex"
            >
              <i className="fa-solid fa-phone text-[11px] text-accent" aria-hidden />
              <span className="hidden tabular-nums lg:inline">{PHONE}</span>
            </a>
            <Link href="/contact" className="btn-primary hidden sm:inline-flex">
              Contact us
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 text-white md:hidden"
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
          className={`border-t border-white/8 bg-navy-deep md:hidden ${open ? "block" : "hidden"}`}
        >
          <nav className="container-site flex flex-col gap-0.5 py-4" aria-label="Mobile">
            <button
              type="button"
              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] ${
                servicesActive
                  ? "bg-white/[0.08] font-medium text-white"
                  : "text-surface/75 hover:bg-white/[0.04] hover:text-white"
              }`}
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <i
                className={`fa-solid fa-chevron-down text-xs transition ${mobileServicesOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {mobileServicesOpen ? (
              <div className="mb-1 flex flex-col gap-0.5 pl-3">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-sm ${
                    pathname === "/services"
                      ? "bg-white/[0.08] font-medium text-white"
                      : "text-surface/70 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  All services
                </Link>
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2.5 text-sm ${
                      pathname === service.href
                        ? "bg-white/[0.08] font-medium text-white"
                        : "text-surface/70 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            ) : null}
            {links.map(({ href, label, shortLabel }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-[15px] ${
                  pathname === href
                    ? "bg-white/[0.08] font-medium text-white"
                    : "text-surface/75 hover:bg-white/[0.04] hover:text-white"
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
              Contact us
            </Link>
            <a
              href={PHONE_HREF}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-white/12 py-3 text-sm font-medium text-white"
            >
              <i className="fa-solid fa-phone text-accent" aria-hidden />
              {PHONE}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
