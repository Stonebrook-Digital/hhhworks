import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services · Atelier",
};

const rows = [
  ["Installation", "Systems matched to your envelope—not catalog guesswork."],
  ["Repair", "Honest scopes. Parts we’d put in our own homes."],
  ["Maintenance", "Seasonal passes that catch drift before it’s drama."],
  ["Duct care", "Air paths cleaned with method, not hurry."],
  ["Dryer vents", "Lint out, peace in."],
];

export default function CServices() {
  return (
    <main className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[800px]">
        <h1 className="font-[family-name:var(--font-c-serif)] text-5xl text-stone-900 md:text-6xl">Services</h1>
        <p className="mt-6 font-[family-name:var(--font-c-sans)] text-stone-600">
          A concise menu—each line backed by trucks, training, and warranty.
        </p>
        <dl className="mt-16 space-y-12">
          {rows.map(([t, d]) => (
            <div key={t} className="border-b border-stone-200 pb-12">
              <dt className="font-[family-name:var(--font-c-serif)] text-2xl text-stone-900">{t}</dt>
              <dd className="mt-3 font-[family-name:var(--font-c-sans)] text-stone-600">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
}
