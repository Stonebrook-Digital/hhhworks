import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home · Comfort Pro",
  description: "Triple H Air — Tampa Bay heating & cooling. Schedule service, flat-rate pricing, 24/7 emergency.",
};

export default function BHome() {
  return (
    <main>
      {/* Hero — typical dealer split: headline + trust + CTA + hero image */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-6 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#c2410c] ring-1 ring-orange-200">
              <i className="fa-solid fa-star text-amber-500" aria-hidden />
              Serving Tampa Bay since 2004
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#0f2744] md:text-5xl lg:text-[2.75rem]">
              Your home comfort experts—<span className="text-[#ea580c]">on your schedule.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              AC repair, new installs, tune-ups, and emergency service. Up-front pricing before we
              start—never charged by surprise.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-slate-700">
              {["Same-day & emergency service", "All major brands serviced", "Financing available"].map(
                (x) => (
                  <li key={x} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#16a34a]" aria-hidden />
                    {x}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/b/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#ea580c] px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-[#c2410c]"
              >
                Schedule online
              </Link>
              <a
                href="tel:+18136554501"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#0f2744] px-8 py-4 text-base font-bold text-[#0f2744] transition hover:bg-slate-50"
              >
                <i className="fa-solid fa-phone mr-2" aria-hidden />
                Call (813) 655-4501
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl ring-1 ring-slate-200 lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Comfortable Florida home"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust strip — Carrier-style dealer badges */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-8 px-4 sm:justify-between sm:px-6">
          {[
            { icon: "fa-id-card", t: "Licensed", s: "State certified" },
            { icon: "fa-shield-halved", t: "Insured", s: "Full coverage" },
            { icon: "fa-clock", t: "24/7", s: "Emergency line" },
            { icon: "fa-file-invoice-dollar", t: "Flat rate", s: "Up-front quotes" },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3 text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2744] text-lg text-white">
                <i className={`fa-solid ${b.icon}`} aria-hidden />
              </span>
              <div>
                <p className="font-bold text-[#0f2744]">{b.t}</p>
                <p className="text-xs text-slate-500">{b.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service cards — grid like many contractor homepages */}
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="text-3xl font-extrabold text-[#0f2744] md:text-4xl">What we do</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            From quick fixes to full replacements—one team for every season in Florida.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "AC repair", desc: "Fast diagnostics, honest options, repairs that last." },
            { title: "New installation", desc: "Right-sized systems with clean workmanship." },
            { title: "Heating service", desc: "Heat pumps & furnaces tuned for efficiency." },
            { title: "Maintenance plans", desc: "Tune-ups that catch problems early." },
            { title: "Duct & air quality", desc: "Duct cleaning and dryer vent service." },
            { title: "Commercial", desc: "Light commercial comfort solutions." },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#ea580c]/40 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#0f2744]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
              <Link href="/b/contact" className="mt-4 inline-block text-sm font-bold text-[#ea580c] hover:underline">
                Get started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Promo band — coupon / tune-up special vibe */}
      <section className="bg-[#0f2744] px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#fdba74]">Limited time</p>
            <p className="mt-2 text-2xl font-extrabold text-white md:text-3xl">Ask about seasonal tune-up specials</p>
            <p className="mt-2 text-slate-300">Keep efficiency high and breakdowns low—call for current offers.</p>
          </div>
          <Link
            href="/b/contact"
            className="shrink-0 rounded-md bg-[#ea580c] px-8 py-4 text-base font-bold text-white hover:bg-[#c2410c]"
          >
            Request an appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
