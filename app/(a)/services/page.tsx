import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AC & heating installation, repair, tune-ups, duct cleaning, dryer vent cleaning, and membership plans across Tampa Bay.",
};

const services = [
  {
    title: "Installation",
    desc: "Right-sized systems, clean duct connections, and startups tested to factory specs.",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Repair & diagnostics",
    desc: "All brands—clear findings, flat-rate options, and parts that last.",
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=900",
    span: "",
  },
  {
    title: "Tune-ups",
    desc: "Seasonal checks: refrigerant, coils, drains, electrical—fewer surprise failures.",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=900",
    span: "",
  },
  {
    title: "Duct cleaning",
    desc: "Whole-home airflow and air quality—priced per vent and air handler.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
    span: "md:col-span-2",
  },
  {
    title: "Dryer vent cleaning",
    desc: "Safer, faster drying—professional vent cleaning you can trust.",
    img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=900",
    span: "",
  },
  {
    title: "Reliance Membership",
    desc: "Priority scheduling, tune-ups, and savings on repairs & equipment.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=900",
    span: "",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-neutral-200 grain bg-neutral-50">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=2400"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/92 to-neutral-50" />
        </div>
        <div className="relative z-[1] mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">What we do</p>
          <h1 className="font-display mt-4 max-w-[12ch] text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
            Services
          </h1>
          <p className="mt-8 max-w-xl text-lg text-neutral-600">
            Full-service HVAC for homes and businesses—scheduled maintenance, emergency response, and
            installs that look as good as they perform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] bg-neutral-50 px-5 py-20 md:px-8 lg:px-10 lg:py-28">
        <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group relative min-h-[320px] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm md:min-h-[380px] ${s.span}`}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:absolute md:inset-0 md:h-full">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  className="object-cover opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/35 to-transparent md:from-neutral-900/92" />
              </div>
              <div className="relative z-[1] p-8 md:absolute md:inset-0 md:flex md:flex-col md:justify-end">
                <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{s.title}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-200">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-white p-10 shadow-sm md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-medium text-neutral-900">Need something urgent?</p>
            <p className="mt-2 text-neutral-600">Emergency line—nights, weekends, holidays.</p>
          </div>
          <a
            href="tel:+18136554501"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/25"
          >
            <i className="fa-solid fa-bolt" aria-hidden />
            (813) 655-4501
          </a>
        </div>

        <p className="mt-16 text-center text-sm text-neutral-500">
          Ready to book?{" "}
          <Link href="/contact" className="font-medium text-sky-700 hover:text-sky-800">
            Send a message
          </Link>{" "}
          or call—we&rsquo;ll line you up.
        </p>
      </section>
    </main>
  );
}
