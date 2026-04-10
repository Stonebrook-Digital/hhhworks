import Link from "next/link";

const links = [
  { href: "/b/services", label: "Services" },
  { href: "/b/about", label: "About" },
  { href: "/b/gallery", label: "Our work" },
  { href: "/b/contact", label: "Contact" },
];

export function BFooter() {
  return (
    <footer className="bg-[#0f2744] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold">Triple H Air Conditioning</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Full-service heating &amp; cooling for Tampa Bay. Licensed, insured, flat-rate pricing.
            </p>
            <a href="tel:+18136554501" className="mt-4 inline-block text-xl font-bold text-[#fdba74] hover:text-white">
              (813) 655-4501
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Quick links</p>
            <ul className="mt-4 space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-200 hover:text-white hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Service area</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Hillsborough · Pinellas · Polk · Pasco · Northern Manatee
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Trust</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                <i className="fa-solid fa-circle-check mr-2 text-[#4ade80]" aria-hidden />
                Licensed &amp; insured
              </li>
              <li>
                <i className="fa-solid fa-circle-check mr-2 text-[#4ade80]" aria-hidden />
                Background-checked techs
              </li>
              <li>
                <i className="fa-solid fa-circle-check mr-2 text-[#4ade80]" aria-hidden />
                Satisfaction focus
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Triple H Air Conditioning. All rights reserved.</p>
          <p className="text-slate-500">Financing options available · Ask your technician</p>
        </div>
      </div>
    </footer>
  );
}
