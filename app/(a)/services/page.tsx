import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HVAC repairs, replacement, maintenance, tune-ups, duct cleaning, and new construction installs—Triple H, Tampa Bay.",
};

const blocks = [
  {
    title: "HVAC repairs",
    text: "Fast diagnosis, clear options, and repairs on all major brands.",
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Replacement",
    text: "When it’s time for a new system—we size it right and handle removal to startup.",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Maintenance",
    text: "Scheduled care that catches wear early and keeps efficiency up.",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Tune-ups",
    text: "Seasonal checks—coils, drains, electrical, refrigerant—so summer isn’t a gamble.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Duct cleaning",
    text: "Cleaner ducts support airflow, efficiency, and healthier indoor air.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Construction installs",
    text: "New builds and major remodels—we coordinate with your timeline and trades.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-navy/6 bg-navy-deep">
        <div className="absolute inset-0 opacity-28">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=2400"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/70" />
        <div className="relative z-[1] mx-auto max-w-[1320px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-surface/45">Services</p>
          <h1 className="font-display mt-3 max-w-xl text-4xl font-semibold tracking-tight text-surface md:text-6xl">
            Everything your building needs to breathe easy.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-surface/80">
            Residential and commercial—from quick fixes to full changeouts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] bg-page px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="overflow-hidden rounded-xl border border-navy/6 bg-surface shadow-[0_1px_2px_rgb(0_0_0_/0.04)]"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image src={b.img} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/78 to-transparent" />
                <h2 className="font-display absolute bottom-4 left-5 text-2xl font-semibold text-surface">
                  {b.title}
                </h2>
              </div>
              <p className="p-6 text-sm leading-relaxed text-muted">{b.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-navy/6 bg-surface p-6 text-center shadow-[0_1px_2px_rgb(0_0_0_/0.04)] md:flex md:items-center md:justify-between md:p-8 md:text-left">
          <div>
            <p className="font-display text-xl font-semibold text-navy">Need a quote?</p>
            <p className="mt-1 text-sm text-muted">Tell us what you’re dealing with—we’ll line up a visit.</p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-red-hover"
            >
              Contact us
            </Link>
            <a
              href="tel:+18136554501"
              className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-page px-6 py-2.5 text-sm font-medium text-navy transition hover:border-navy/18"
            >
              (813) 655-4501
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
