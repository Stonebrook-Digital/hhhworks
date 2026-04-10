import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home · Nocturne",
  description: "Triple H — Tampa Bay HVAC in a dark, signal-bright interface.",
};

export default function BHome() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a12_1px,transparent_1px),linear-gradient(to_bottom,#0a0a12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent)]" />
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06060a] via-transparent to-[#06060a]" />
        <div className="relative z-[1] mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1200px] flex-col justify-center px-5 py-20 md:px-8">
          <p className="font-[family-name:var(--font-b-mono)] text-[11px] uppercase tracking-[0.45em] text-cyan-400/90">
            Tampa Bay · Signal on
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-b-sans)] text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Thermal
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent">
              precision.
            </span>
          </h1>
          <p className="mt-8 max-w-md font-[family-name:var(--font-b-mono)] text-sm leading-relaxed text-zinc-400">
            Flat-rate HVAC · 24/7 · Every major brand. No noise—just cold air when you need it.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/b/contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-8 py-4 font-[family-name:var(--font-b-mono)] text-xs font-bold uppercase tracking-widest text-zinc-950"
            >
              Ping us
            </Link>
            <Link
              href="/b/gallery"
              className="rounded-full border border-white/15 px-8 py-4 font-[family-name:var(--font-b-mono)] text-xs font-bold uppercase tracking-widest text-zinc-300 hover:bg-white/5"
            >
              Signal feed
            </Link>
          </div>
        </div>
      </section>
      <section className="border-t border-white/[0.06] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3">
          {[
            { t: "01", h: "Flat stack", p: "Quote before we open the panel." },
            { t: "02", h: "Loaded vans", p: "Parts on hand for same-day wins." },
            { t: "03", h: "Bay mesh", p: "Hillsborough to Manatee—no dead zones." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
              <span className="font-[family-name:var(--font-b-mono)] text-xs text-fuchsia-400">{x.t}</span>
              <h3 className="mt-4 font-[family-name:var(--font-b-sans)] text-xl text-white">{x.h}</h3>
              <p className="mt-2 font-[family-name:var(--font-b-mono)] text-xs leading-relaxed text-zinc-500">
                {x.p}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
