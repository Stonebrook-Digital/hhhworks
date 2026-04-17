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
    <footer className="border-t border-navy/10 bg-navy-deep text-surface/90">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-lg bg-white p-3 shadow-sm ring-1 ring-white/10">
              <TripleHLogo variant="mark" className="h-9 w-auto md:h-10" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface/75">
              Full-service HVAC since 2004. Flat-rate quotes before we start—serving Tampa Bay from
              Brandon.
            </p>
            <a
              href="tel:+18136554501"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-white"
            >
              <i className="fa-solid fa-phone" aria-hidden />
              (813) 655-4501
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Explore</p>
            <ul className="mt-4 flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-surface/80 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Service area</p>
            <p className="mt-4 text-sm leading-relaxed text-surface/75">
              Hillsborough · Pinellas · Polk · Pasco · Northern Manatee
            </p>
            <p className="mt-6 text-xs text-surface/50">
              © {new Date().getFullYear()} Triple H Air Conditioning, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
