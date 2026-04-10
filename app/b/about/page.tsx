import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Nocturne",
};

export default function BAbout() {
  return (
    <main className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <h1 className="font-[family-name:var(--font-b-sans)] text-4xl font-semibold text-white md:text-5xl">
          Since 2004
        </h1>
        <p className="mt-10 font-[family-name:var(--font-b-mono)] text-sm leading-[1.8] text-zinc-400">
          Triple H built a name on boring excellence: trucks stocked, prices printed before the job,
          crews who wipe the floor on the way out. We’re not here to upsell poetry—we’re here to
          move BTUs and keep your invoice legible.
        </p>
        <ul className="mt-12 space-y-6 border-l border-cyan-400/30 pl-8">
          {["Flat-rate matrix", "Certified on all majors", "Emergency line—always"].map((x) => (
            <li key={x} className="font-[family-name:var(--font-b-mono)] text-sm text-zinc-300">
              {x}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
