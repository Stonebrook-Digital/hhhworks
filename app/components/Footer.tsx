import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-neutral-900">
              Triple H Air Conditioning
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
              Full-service HVAC for Tampa Bay since 2004. Flat-rate pricing, certified techs, and
              emergency service when you need it most.
            </p>
            <a
              href="tel:+18136554501"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800"
            >
              <i className="fa-solid fa-phone" aria-hidden />
              (813) 655-4501
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-600 transition hover:text-neutral-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Service area
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Hillsborough · Pinellas · Polk · Pasco · Northern Manatee
            </p>
            <p className="mt-4 text-xs text-neutral-400">
              © {new Date().getFullYear()} Triple H Air Conditioning. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
