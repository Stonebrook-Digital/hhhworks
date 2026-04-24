import Link from "next/link";
import { TripleHLogo } from "@/app/components/TripleHLogo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas & reviews" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-navy-deep text-surface/88">
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 md:py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="inline-flex rounded-lg border border-white/8 bg-white/[0.04] p-2.5">
              <TripleHLogo variant="mark" className="h-8 w-auto md:h-9" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface/65">
              Full-service HVAC since 2004. Flat-rate quotes before we start—serving Tampa Bay from
              Brandon.
            </p>
            <a
              href="tel:+18136554501"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-surface/90 transition hover:text-white"
            >
              <i className="fa-solid fa-phone text-[11px] text-brand-red/90" aria-hidden />
              (813) 655-4501
            </a>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-surface/40">
              Explore
            </p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-surface/70 transition hover:text-surface"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-surface/40">
              Service area
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface/65">
              Hillsborough · Pinellas · Polk · Pasco · Northern Manatee
            </p>
            <p className="mt-8 text-xs text-surface/38">
              © {new Date().getFullYear()} Triple H Air Conditioning, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
