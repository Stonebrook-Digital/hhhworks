import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home · Clima",
  description: "Triple H — quiet, efficient climate for your home. Tampa Bay.",
};

export default function CHome() {
  return (
    <main>
      {/* Asymmetric hero — think European installer / heat-pump brand sites */}
      <section className="px-5 pb-20 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#3f6b4f]">Tampa Bay · since 2004</p>
          <h1 className="mt-6 max-w-[14ch] font-[family-name:var(--font-c-display)] text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-[#1a2e26] md:text-6xl lg:text-7xl">
            Cooler air.
            <span className="mt-2 block text-[#3f6b4f]">Quieter home.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#4a6358]">
            We design around how you actually live—steady temperatures, lower noise, and systems sized for Florida
            humidity, not a catalog guess.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/c/contact"
              className="rounded-full bg-[#1a2e26] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2d4a3e]"
            >
              Plan a visit
            </Link>
            <Link
              href="/c/gallery"
              className="rounded-full border border-[#3f6b4f] px-8 py-3.5 text-sm font-semibold text-[#2d4a3e] hover:bg-[#e8f0ec]"
            >
              View projects
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1100px]">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl lg:col-span-8 lg:aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1600&q=85"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-3xl bg-[#e8f0ec] p-8 lg:col-span-4">
              <p className="font-[family-name:var(--font-c-display)] text-2xl leading-snug text-[#1a2e26]">
                &ldquo;Comfort is a system—not just a box outside.&rdquo;
              </p>
              <p className="text-sm leading-relaxed text-[#4a6358]">
                Flat-rate quotes, careful installs, and maintenance that keeps efficiency from drifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — minimal like premium product pages */}
      <section className="border-y border-[#dfe8e3] bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-5 md:grid-cols-3 md:px-8">
          {[
            { k: "SEER-aware", v: "We match equipment to your usage—not oversize for margin." },
            { k: "Sound matters", v: "Pad, line set, and airflow paths planned to cut outdoor & indoor noise." },
            { k: "One relationship", v: "Same team for install, tune-ups, and urgent calls." },
          ].map((x) => (
            <div key={x.k}>
              <p className="font-[family-name:var(--font-c-display)] text-xl text-[#1a2e26]">{x.k}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a6358]">{x.v}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
