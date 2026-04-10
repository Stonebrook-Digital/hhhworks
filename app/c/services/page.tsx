import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems · Clima",
};

const lines = [
  {
    n: "01",
    title: "Cooling & dehumidification",
    body: "Right-sized AC and heat pumps, line sets run clean, charge verified—built for Gulf Coast humidity.",
  },
  {
    n: "02",
    title: "Heating & dual-fuel",
    body: "Heat strips, furnaces, and hybrid setups when winter actually shows up—integrated with your cooling plan.",
  },
  {
    n: "03",
    title: "Air path & filtration",
    body: "Duct assessment, sealing priorities, filter strategy—what you breathe is part of the design.",
  },
  {
    n: "04",
    title: "Ongoing care",
    body: "Seasonal visits that log performance over time so small drift never becomes a July surprise.",
  },
];

export default function CServices() {
  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[720px]">
        <h1 className="font-[family-name:var(--font-c-display)] text-5xl text-[#1a2e26] md:text-6xl">Systems</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#4a6358]">
          A narrow menu, deeply executed—inspired by how European heat-pump and efficiency-first brands present
          offerings: numbered, calm, no clutter.
        </p>
        <ol className="mt-16 space-y-0">
          {lines.map((line, i) => (
            <li
              key={line.n}
              className={`border-t border-[#dfe8e3] py-12 first:border-t-0 first:pt-0 ${i === lines.length - 1 ? "pb-0" : ""}`}
            >
              <span className="font-mono text-xs font-medium text-[#3f6b4f]">{line.n}</span>
              <h2 className="mt-3 font-[family-name:var(--font-c-display)] text-2xl text-[#1a2e26] md:text-3xl">
                {line.title}
              </h2>
              <p className="mt-4 leading-relaxed text-[#4a6358]">{line.body}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/c/contact"
          className="mt-14 inline-block rounded-full border border-[#1a2e26] px-6 py-3 text-sm font-semibold text-[#1a2e26] hover:bg-[#1a2e26] hover:text-white"
        >
          Discuss your home
        </Link>
      </div>
    </main>
  );
}
