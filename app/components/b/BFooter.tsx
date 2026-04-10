import Link from "next/link";

const links = [
  { href: "/b/services", label: "Services" },
  { href: "/b/about", label: "About" },
  { href: "/b/gallery", label: "Gallery" },
  { href: "/b/contact", label: "Contact" },
];

export function BFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#030304]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-b-sans)] text-lg font-semibold text-white">
              Triple H · Nocturne
            </p>
            <p className="mt-2 max-w-sm font-[family-name:var(--font-b-mono)] text-xs text-zinc-500">
              Tampa Bay HVAC · Flat-rate · 24/7
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-zinc-400 hover:text-cyan-300">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-10 font-[family-name:var(--font-b-mono)] text-[10px] uppercase tracking-widest text-zinc-600">
          © {new Date().getFullYear()} Triple H Air Conditioning
        </p>
      </div>
    </footer>
  );
}
