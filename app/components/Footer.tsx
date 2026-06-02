import Image from "next/image";
import Link from "next/link";
import { ASSETS, COUNTIES, EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, TAGLINE } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas & reviews" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy-deep text-surface/85">
      <div className="container-site py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          <div>
            <Image
              src={ASSETS.logo}
              alt="Triple H Air Conditioning"
              width={180}
              height={54}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface/60">{TAGLINE}</p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 font-medium text-surface/90 transition hover:text-white"
              >
                <i className="fa-solid fa-phone text-[11px] text-accent" aria-hidden />
                {PHONE}
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex items-center gap-2 text-surface/65 transition hover:text-surface"
              >
                <i className="fa-solid fa-envelope text-[11px]" aria-hidden />
                {EMAIL}
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-surface/40 uppercase">Explore</p>
            <ul className="mt-4 flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-surface/70 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-surface/40 uppercase">
              Service area
            </p>
            <p className="mt-4 text-sm leading-relaxed text-surface/60">
              {COUNTIES.join(" · ")}
            </p>
            <p className="mt-8 text-xs text-surface/35">
              © {new Date().getFullYear()} Triple H Air Conditioning, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
