import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  ASSETS,
  COMPANY,
  EMAIL,
  EMAIL_HREF,
  HOURS_SUNDAY,
  HOURS_WEEKDAY,
  PHONE,
  PHONE_HREF,
  TAGLINE,
} from "@/lib/site";

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
              className="h-auto w-[180px] max-w-full"
              style={{ height: "auto" }}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface/60">{TAGLINE}</p>
          </div>
          <div>
            <p className="border-b border-white/15 pb-3 text-xs font-semibold tracking-wider text-surface/40 uppercase">
              Company Information
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-surface/70">
              <li className="flex gap-3">
                <i className="fa-solid fa-house mt-0.5 w-4 shrink-0 text-center text-surface/50" aria-hidden />
                <span>{COMPANY}</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot mt-0.5 w-4 shrink-0 text-center text-surface/50" aria-hidden />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone mt-0.5 w-4 shrink-0 text-center text-surface/50" aria-hidden />
                <a href={PHONE_HREF} className="transition hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-envelope mt-0.5 w-4 shrink-0 text-center text-surface/50" aria-hidden />
                <a href={EMAIL_HREF} className="transition hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-clock mt-0.5 w-4 shrink-0 text-center text-surface/50" aria-hidden />
                <span>
                  {HOURS_WEEKDAY}
                  <br />
                  {HOURS_SUNDAY}
                </span>
              </li>
            </ul>
            <p className="mt-8 text-xs text-surface/35">
              © {new Date().getFullYear()} Triple H Air Conditioning, Inc.
            </p>
          </div>
          <div>
            <p className="border-b border-white/15 pb-3 text-xs font-semibold tracking-wider text-surface/40 uppercase">
              Explore
            </p>
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
        </div>
      </div>
    </footer>
  );
}
