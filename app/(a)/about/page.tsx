import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Triple H Air Conditioning—trusted Tampa Bay HVAC since 2004. Flat-rate pricing, certified techs, and a customer-first team.",
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-50">
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 lg:flex lg:items-start lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:w-[42%]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">About us</p>
          <h1 className="font-display mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            Same name.
            <br />
            <span className="text-neutral-500">Serious craft.</span>
          </h1>
          <p className="mt-10 text-lg leading-relaxed text-neutral-600">
            Since 2004, Triple H has grown into one of the most recognized HVAC names in Tampa Bay
            by doing the boring things right: showing up prepared, quoting clearly, and finishing
            clean.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-12">
            <div>
              <p className="font-display text-4xl font-semibold text-amber-700">20+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">Years serving the Bay</p>
            </div>
            <div>
              <p className="font-display text-4xl font-semibold text-neutral-900">5★</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">Google-loved locals</p>
            </div>
          </div>
          <Link
            href="/gallery"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
          >
            See gallery
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
          </Link>
        </div>

        <div className="mt-16 flex flex-1 flex-col gap-12 lg:mt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-neutral-200/80">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=1600"
              alt="Bright modern interior with natural light"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-neutral-900/5" />
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-neutral-900">Flat-rate peace of mind</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Our certified technicians use modern diagnostics on every call—and our flat-rate system
              means you know the price before we start. No hourly games, no mystery fees.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <i className="fa-solid fa-truck-field text-2xl text-amber-600" aria-hidden />
              <h3 className="font-display mt-4 text-xl font-semibold text-neutral-900">Stocked &amp; ready</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Trucks loaded with common parts so we can solve more problems on the first visit.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <i className="fa-solid fa-map-location-dot text-2xl text-sky-600" aria-hidden />
              <h3 className="font-display mt-4 text-xl font-semibold text-neutral-900">Bay-wide</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Hillsborough, Pinellas, Polk, Pasco, and Northern Manatee—ask about your neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
