import Link from "next/link";

const links = [
  { href: "/c/services", label: "Systems" },
  { href: "/c/about", label: "Studio" },
  { href: "/c/gallery", label: "Projects" },
  { href: "/c/contact", label: "Connect" },
];

export function CFooter() {
  return (
    <footer className="border-t border-[#dfe8e3] bg-[#f0f5f2]">
      <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-c-display)] text-3xl text-[#1a2e26]">triple h</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#4a6358]">
              Efficient heating &amp; cooling for Tampa Bay homes—designed around comfort, noise, and energy use.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-[#2d4a3e] underline-offset-4 hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 text-xs text-[#6b8578]">
          © {new Date().getFullYear()} Triple H Air Conditioning · Hillsborough · Pinellas · Polk · Pasco · Manatee
        </p>
      </div>
    </footer>
  );
}
