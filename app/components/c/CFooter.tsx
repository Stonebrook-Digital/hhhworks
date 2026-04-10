import Link from "next/link";

const links = [
  { href: "/c/services", label: "Services" },
  { href: "/c/about", label: "About" },
  { href: "/c/gallery", label: "Gallery" },
  { href: "/c/contact", label: "Contact" },
];

export function CFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#efe9df]">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10">
        <p className="font-[family-name:var(--font-c-serif)] text-2xl text-stone-900">Triple H Air</p>
        <p className="mt-2 max-w-md font-[family-name:var(--font-c-sans)] text-sm leading-relaxed text-stone-600">
          Tampa Bay since 2004 · Hillsborough, Pinellas, Polk, Pasco, Manatee
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-[family-name:var(--font-c-sans)] text-sm text-stone-700 underline-offset-4 hover:text-[#c45c3a] hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="mt-10 font-[family-name:var(--font-c-sans)] text-xs text-stone-500">
          © {new Date().getFullYear()} Triple H Air Conditioning
        </p>
      </div>
    </footer>
  );
}
