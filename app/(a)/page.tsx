import Link from "next/link";
import { HeroMedia, type HeroSlide } from "@/app/components/HeroMedia";
import { HomeFaq } from "@/app/components/HomeFaq";
import { TripleHLogo } from "@/app/components/TripleHLogo";

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&q=85&w=2400",
    alt: "Bright, modern living space with natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=2400",
    alt: "Contemporary home exterior at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=2400",
    alt: "Comfortable sunlit interior",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=85&w=2400",
    alt: "Outdoor HVAC equipment installation",
  },
];

const services = [
  { title: "Repairs", blurb: "All brands, clear diagnosis, flat-rate options.", icon: "fa-screwdriver-wrench" },
  { title: "Replacement", blurb: "Right-sized systems and clean changeouts.", icon: "fa-fan" },
  { title: "Maintenance", blurb: "Scheduled care, fewer surprises.", icon: "fa-clipboard-check" },
  { title: "Tune-ups", blurb: "Season-ready performance checks.", icon: "fa-gauge-high" },
  { title: "Duct cleaning", blurb: "Better airflow and indoor air.", icon: "fa-wind" },
  { title: "New construction", blurb: "HVAC coordinated with your build.", icon: "fa-helmet-safety" },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[min(100dvh,52rem)] overflow-hidden grain">
        <HeroMedia slides={HERO_SLIDES} />

        <div className="relative z-10 mx-auto flex min-h-[min(100dvh,52rem)] max-w-[1400px] flex-col px-5 pb-28 pt-20 md:px-8 md:pb-24 md:pt-24 lg:flex-row lg:items-stretch lg:gap-12 lg:px-10 lg:pb-20 lg:pt-28">
          <div className="flex max-w-2xl flex-1 flex-col lg:max-w-none lg:w-[52%]">
            <div className="animate-rise-soft delay-1 w-full max-w-2xl rounded-2xl border border-white/25 bg-white/[0.94] px-7 py-6 shadow-2xl shadow-black/25 backdrop-blur-md md:px-10 md:py-8">
              <TripleHLogo variant="full" className="h-auto w-full" />
            </div>
            <p className="animate-rise-soft delay-2 mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-brand-red drop-shadow-md">
              Tampa Bay · Since 2004
            </p>
            <h1 className="animate-rise-soft delay-3 font-display mt-4 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-surface drop-shadow-md md:text-5xl lg:text-[2.85rem]">
              Comfort you can feel. Pricing you can trust.
            </h1>
            <p className="animate-rise-soft delay-3 mt-5 max-w-lg text-lg text-surface/90 drop-shadow">
              Install, repair, and maintain—flat-rate quotes before we pick up a tool.
            </p>
            <div className="animate-rise-soft delay-4 mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/25 transition hover:scale-[1.02] hover:bg-brand-red-hover active:scale-[0.98]"
              >
                Free estimate
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
              </Link>
              <a
                href="tel:+18136554501"
                className="inline-flex items-center gap-2 rounded-full border border-surface/30 bg-surface/15 px-7 py-3.5 text-sm font-semibold text-surface backdrop-blur-sm transition hover:scale-[1.02] hover:bg-surface/25 active:scale-[0.98]"
              >
                <i className="fa-solid fa-phone text-xs" aria-hidden />
                (813) 655-4501
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-1 flex-col justify-end lg:mt-0 lg:justify-center">
            <div className="rounded-2xl border border-white/25 bg-navy-deep/95 p-7 shadow-xl lg:max-w-md lg:ml-auto">
              <p className="font-display text-xl font-medium leading-snug text-surface md:text-2xl">
                &ldquo;They stuck to the quote and did solid work across three commercial
                buildings.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-red">Ada</p>
              <Link
                href="/reviews"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-surface/85 transition hover:gap-3 hover:text-surface"
              >
                Read reviews
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-navy/10 bg-surface py-3.5 overflow-hidden">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.28em] text-navy-muted">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>Flat-rate pricing</span>
              <span className="text-brand-red">·</span>
              <span>All major brands</span>
              <span className="text-brand-red">·</span>
              <span>Tampa Bay</span>
              <span className="text-brand-red">·</span>
              <span>Residential &amp; commercial</span>
              <span className="text-brand-red">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="bg-page px-5 py-16 md:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              Why homeowners call us
            </h2>
            <p className="mt-3 text-muted">Short visits, long-term thinking—no filler, no hourly games.</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Quote first", d: "You approve the number before we start." },
              { t: "Stocked trucks", d: "More first-visit fixes, fewer return trips." },
              { t: "Bay-wide", d: "Hillsborough to Manatee—see Areas for cities." },
            ].map((x) => (
              <li
                key={x.t}
                className="rounded-2xl border border-navy/10 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="font-display text-lg font-semibold text-navy">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-surface py-8 md:py-11">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">What we do</p>
              <h2 className="font-display mt-0.5 text-xl font-semibold tracking-tight text-navy md:text-2xl">
                HVAC services
              </h2>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-brand-red px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-hover"
            >
              Schedule
            </Link>
          </div>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {services.map((s) => (
              <li key={s.title} className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-brand-red" aria-hidden>
                  <i className={`fa-solid ${s.icon} text-2xl sm:text-[1.75rem]`} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold leading-tight text-navy sm:text-base">
                    {s.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.blurb}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-3 text-center text-[11px] text-muted">
            <Link href="/services" className="font-semibold text-brand-red hover:underline">
              All services
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-page px-5 py-14 md:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
          <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">FAQ</p>
            <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-navy md:text-[1.75rem]">
              Quick answers
            </h3>
            <HomeFaq />
          </div>

          <div className="rounded-3xl border border-navy/10 bg-surface p-6 shadow-sm md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">Mock form</p>
            <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Request a free estimate
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Share a few quick details and we&apos;ll follow up with options and next steps.
            </p>

            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy">
                Name
                <input
                  type="text"
                  placeholder="Your full name"
                  className="h-11 rounded-xl border border-navy/15 bg-white px-3 text-sm text-navy outline-none transition placeholder:text-muted/70 focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/20"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy">
                Phone
                <input
                  type="tel"
                  placeholder="(813) 555-0123"
                  className="h-11 rounded-xl border border-navy/15 bg-white px-3 text-sm text-navy outline-none transition placeholder:text-muted/70 focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/20"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy sm:col-span-2">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 rounded-xl border border-navy/15 bg-white px-3 text-sm text-navy outline-none transition placeholder:text-muted/70 focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/20"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy sm:col-span-2">
                How can we help?
                <textarea
                  rows={4}
                  placeholder="Tell us about your system, issue, or project."
                  className="rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy outline-none transition placeholder:text-muted/70 focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/20"
                />
              </label>
              <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-hover"
                >
                  Send request
                  <i className="fa-solid fa-paper-plane text-[10px]" aria-hidden />
                </button>
                <p className="text-xs text-muted">Demo form only - no live submission yet.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 text-surface md:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px] md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Ready for reliable comfort?</h2>
            <p className="mt-3 text-surface/75">
              Call now or send a message—we&apos;ll follow up with next steps.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0 md:justify-end">
            <a
              href="tel:+18136554501"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:scale-[1.03] hover:bg-brand-red-hover active:scale-[0.98]"
            >
              <i className="fa-solid fa-phone" aria-hidden />
              Call (813) 655-4501
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-surface/30 px-7 py-3.5 text-sm font-semibold text-surface transition hover:bg-surface/10"
            >
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
