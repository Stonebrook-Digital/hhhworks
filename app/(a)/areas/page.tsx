import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas we serve",
  description:
    "Triple H Air Conditioning serves Brandon, Tampa, St. Petersburg, Shore Acres, and surrounding Tampa Bay counties.",
};

const cities = [
  {
    name: "Brandon, FL",
    text: "Our home base—quick response for repairs, tune-ups, and installs across Hillsborough.",
  },
  {
    name: "Tampa, FL",
    text: "From historic neighborhoods to new builds—we size systems for real Florida heat.",
  },
  {
    name: "St. Petersburg, FL",
    text: "Humid summers and mild winters—we keep indoor air balanced year-round.",
  },
  {
    name: "Shore Acres, FL",
    text: "Residential service with respect for your home and schedule.",
  },
];

export default function AreasPage() {
  return (
    <main className="bg-page">
      <section className="border-b border-navy/10 bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Service area</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Areas we serve
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Proudly serving Tampa Bay. Don&apos;t see your city? Call us—if you&apos;re in our
            counties, we can usually help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {cities.map((c) => (
            <article
              key={c.name}
              className="rounded-2xl border border-navy/10 bg-surface p-7 shadow-sm"
            >
              <h2 className="font-display text-xl font-semibold text-navy">{c.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-navy/10 bg-navy px-6 py-8 text-center text-surface md:px-10">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-red">Counties</p>
          <p className="mt-3 font-display text-lg font-medium md:text-xl">
            Hillsborough · Pinellas · Polk · Pasco · Northern Manatee
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-hover"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
