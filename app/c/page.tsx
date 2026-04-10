import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home · Atelier",
  description: "Triple H — Tampa Bay comfort, editorial calm.",
};

export default function CHome() {
  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-12 md:px-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="font-[family-name:var(--font-c-sans)] text-xs font-medium uppercase tracking-[0.35em] text-[#c45c3a]">
              Est. 2004 · Tampa Bay
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-c-serif)] text-5xl leading-[1.05] text-stone-900 md:text-6xl lg:text-7xl">
              Air, composed.
            </h1>
            <p className="mt-8 font-[family-name:var(--font-c-sans)] text-lg leading-relaxed text-stone-600">
              Heating and cooling with the restraint of a studio visit—clear estimates, careful
              hands, and systems tuned like instruments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/c/contact"
                className="rounded-full bg-[#c45c3a] px-8 py-3.5 font-[family-name:var(--font-c-sans)] text-sm font-semibold text-white shadow-md transition hover:bg-[#a84830]"
              >
                Request a visit
              </Link>
              <Link
                href="/c/gallery"
                className="rounded-full border border-stone-300 bg-white px-8 py-3.5 font-[family-name:var(--font-c-sans)] text-sm font-medium text-stone-800"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-stone-300/40 ring-1 ring-stone-200">
            <Image
              src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1400&q=85"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="border-t border-stone-200 bg-[#efe9df]/60 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
          {[
            { k: "Flat rate", v: "Know the figure before we begin." },
            { k: "Membership", v: "Tune-ups that respect your calendar." },
            { k: "Coverage", v: "Five counties, one standard." },
          ].map((x) => (
            <div key={x.k}>
              <p className="font-[family-name:var(--font-c-serif)] text-2xl text-stone-900">{x.k}</p>
              <p className="mt-3 font-[family-name:var(--font-c-sans)] text-sm leading-relaxed text-stone-600">
                {x.v}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
