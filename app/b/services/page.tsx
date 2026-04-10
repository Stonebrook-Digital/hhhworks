import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services · Nocturne",
};

const items = [
  { n: "Install", d: "Load calc, line set, startup—factory clean." },
  { n: "Repair", d: "Diagnostics that don’t dance around the answer." },
  { n: "Tune", d: "Coils, charge, drains—prevent the meltdown." },
  { n: "Ducts", d: "Pull dust, restore static, breathe easier." },
  { n: "Dryer vent", d: "Fire risk down, cycle time down." },
  { n: "Member", d: "Reliance lane—priority + savings." },
];

export default function BServices() {
  return (
    <main className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        <p className="font-[family-name:var(--font-b-mono)] text-[11px] uppercase tracking-[0.4em] text-cyan-400">
          Module map
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-b-sans)] text-4xl font-semibold text-white md:text-6xl">
          Services
        </h1>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.n}
              className="group border border-transparent bg-[#0a0a10] p-8 transition hover:border-cyan-400/30 hover:bg-[#0c0c14]"
            >
              <h2 className="font-[family-name:var(--font-b-sans)] text-lg text-white">{s.n}</h2>
              <p className="mt-3 font-[family-name:var(--font-b-mono)] text-xs leading-relaxed text-zinc-500">
                {s.d}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/b/contact"
          className="mt-14 inline-block font-[family-name:var(--font-b-mono)] text-xs uppercase tracking-widest text-fuchsia-400 hover:text-fuchsia-300"
        >
          Open channel →
        </Link>
      </div>
    </main>
  );
}
