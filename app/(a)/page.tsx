import Link from "next/link";
import { GoogleMapsEmbed } from "@/app/components/GoogleMapsEmbed";
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
      <section className="relative min-h-[min(100dvh,48rem)] overflow-hidden">
        <HeroMedia slides={HERO_SLIDES} />

        <div className="relative z-10 mx-auto flex min-h-[min(100dvh,48rem)] max-w-[1320px] flex-col px-4 pb-24 pt-16 sm:px-6 md:pb-20 md:pt-20 lg:flex-row lg:items-stretch lg:gap-10 lg:px-8 lg:pb-16 lg:pt-24">
          <div className="flex max-w-2xl flex-1 flex-col lg:max-w-none lg:w-[54%]">
            <div className="animate-rise-soft delay-1 w-full max-w-md rounded-2xl border border-white/20 bg-white/88 p-6 shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.18)] backdrop-blur-md sm:p-7 md:max-w-lg">
              <TripleHLogo variant="full" className="h-auto w-full" />
            </div>
            <p className="animate-rise-soft delay-2 mt-7 text-[13px] font-medium tracking-[0.12em] text-surface/85">
              Tampa Bay · Since 2004
            </p>
            <h1 className="animate-rise-soft delay-3 font-display mt-3 max-w-xl text-[2.125rem] font-semibold leading-[1.12] tracking-[-0.02em] text-surface md:text-4xl lg:text-[2.625rem]">
              Comfort you can feel. Pricing you can trust.
            </h1>
            <p className="animate-rise-soft delay-3 mt-4 max-w-lg text-base leading-relaxed text-surface/82 md:text-[1.0625rem]">
              Install, repair, and maintain—flat-rate quotes before we pick up a tool.
            </p>
            <div className="animate-rise-soft delay-4 mt-9 flex flex-wrap gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-2.5 text-sm font-medium text-navy shadow-sm transition hover:bg-surface/95"
              >
                Free estimate
                <i className="fa-solid fa-arrow-right text-[10px] opacity-70" aria-hidden />
              </Link>
              <a
                href="tel:+18136554501"
                className="inline-flex items-center gap-2 rounded-full border border-surface/35 bg-surface/10 px-6 py-2.5 text-sm font-medium text-surface backdrop-blur-sm transition hover:border-surface/50 hover:bg-surface/16"
              >
                <i className="fa-solid fa-phone text-[10px]" aria-hidden />
                (813) 655-4501
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-1 flex-col justify-end lg:mt-0 lg:justify-center">
            <div className="rounded-2xl border border-white/12 bg-navy-deep/55 p-6 backdrop-blur-md sm:p-7 lg:max-w-md lg:ml-auto">
              <p className="font-display text-lg font-medium leading-snug text-surface/95 md:text-xl">
                &ldquo;They stuck to the quote and did solid work across three commercial
                buildings.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-surface/70">Ada</p>
              <Link
                href="/areas#customer-reviews"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-surface/80 transition hover:gap-2.5 hover:text-surface"
              >
                Read reviews
                <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-navy/6 bg-surface py-3 overflow-hidden">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-[11px] font-medium tracking-[0.16em] text-navy-muted">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Flat-rate pricing</span>
              <span className="text-navy/25">·</span>
              <span>All major brands</span>
              <span className="text-navy/25">·</span>
              <span>Tampa Bay</span>
              <span className="text-navy/25">·</span>
              <span>Residential &amp; commercial</span>
              <span className="text-navy/25">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="border-y border-navy/6 bg-surface py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="max-w-sm shrink-0 lg:pt-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">
                Coverage
              </p>
              <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                Where we work
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Real Google Maps—pan and zoom like anywhere else. For city chips, crew notes, and
                review snippets, open{" "}
                <Link href="/areas#work-map" className="font-medium text-navy underline decoration-navy/20 underline-offset-4 hover:decoration-navy/40">
                  Areas &amp; reviews
                </Link>
                .
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <GoogleMapsEmbed variant="hero" />
              <p className="mt-2.5 text-[11px] leading-snug text-muted">
                Tip: In Google Maps, search your shop or &ldquo;Tampa Bay,&rdquo; click{" "}
                <strong className="font-medium text-navy">Share → Embed a map</strong>, copy the{" "}
                <code className="rounded-md bg-navy/[0.05] px-1 py-px text-[10px]">src</code> URL into{" "}
                <code className="rounded-md bg-navy/[0.05] px-1 py-px text-[10px]">
                  NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL
                </code>{" "}
                in <code className="rounded-md bg-navy/[0.05] px-1 py-px text-[10px]">.env.local</code> for
                a tighter view with fewer unrelated pins. Embed maps can&apos;t hide Google&apos;s
                default business labels without the paid Maps JavaScript API.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-page px-4 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Why homeowners call us
            </h2>
            <p className="mt-2.5 text-sm text-muted md:text-base">
              Short visits, long-term thinking—no filler, no hourly games.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              { t: "Quote first", d: "You approve the number before we start." },
              { t: "Stocked trucks", d: "More first-visit fixes, fewer return trips." },
              { t: "Bay-wide", d: "Hillsborough to Manatee—see Areas for cities." },
            ].map((x) => (
              <li
                key={x.t}
                className="rounded-xl border border-navy/6 bg-surface p-5 shadow-[0_1px_2px_rgb(0_0_0_/0.04)] transition hover:border-navy/10"
              >
                <p className="font-display text-lg font-semibold text-navy">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-surface py-10 md:py-12">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">
                What we do
              </p>
              <h2 className="font-display mt-1 text-xl font-semibold tracking-tight text-navy md:text-2xl">
                HVAC services
              </h2>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full border border-navy/10 bg-page px-5 py-2 text-sm font-medium text-navy transition hover:border-navy/18 hover:bg-navy/[0.03]"
            >
              Schedule
            </Link>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
            {services.map((s) => (
              <li key={s.title} className="flex gap-3 sm:gap-3.5">
                <span className="mt-0.5 shrink-0 text-brand-red/85" aria-hidden>
                  <i className={`fa-solid ${s.icon} text-xl sm:text-[1.35rem]`} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[15px] font-semibold leading-tight text-navy sm:text-base">
                    {s.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{s.blurb}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-center text-xs text-muted">
            <Link href="/services" className="font-medium text-navy underline decoration-navy/15 underline-offset-4 hover:decoration-navy/35">
              All services
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-page px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 md:gap-8">
          <div className="rounded-2xl border border-navy/6 bg-surface p-6 shadow-[0_1px_2px_rgb(0_0_0_/0.04)] md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">FAQ</p>
            <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-navy md:text-2xl">
              Quick answers
            </h3>
            <HomeFaq />
          </div>

          <div className="rounded-2xl border border-navy/6 bg-surface p-6 shadow-[0_1px_2px_rgb(0_0_0_/0.04)] md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">Mock form</p>
            <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-navy md:text-2xl lg:text-3xl">
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
                  className="h-11 rounded-lg border border-navy/10 bg-page px-3 text-sm text-navy outline-none transition placeholder:text-muted/60 focus:border-navy/22 focus:ring-2 focus:ring-navy/[0.06]"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy">
                Phone
                <input
                  type="tel"
                  placeholder="(813) 555-0123"
                  className="h-11 rounded-lg border border-navy/10 bg-page px-3 text-sm text-navy outline-none transition placeholder:text-muted/60 focus:border-navy/22 focus:ring-2 focus:ring-navy/[0.06]"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy sm:col-span-2">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 rounded-lg border border-navy/10 bg-page px-3 text-sm text-navy outline-none transition placeholder:text-muted/60 focus:border-navy/22 focus:ring-2 focus:ring-navy/[0.06]"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy sm:col-span-2">
                How can we help?
                <textarea
                  rows={4}
                  placeholder="Tell us about your system, issue, or project."
                  className="rounded-lg border border-navy/10 bg-page px-3 py-2.5 text-sm text-navy outline-none transition placeholder:text-muted/60 focus:border-navy/22 focus:ring-2 focus:ring-navy/[0.06]"
                />
              </label>
              <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-red-hover"
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

      <section className="bg-navy px-4 py-14 text-surface sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px] md:flex md:items-center md:justify-between md:gap-10">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Ready for reliable comfort?</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface/72 md:text-base">
              Call now or send a message—we&apos;ll follow up with next steps.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5 md:mt-0 md:justify-end">
            <a
              href="tel:+18136554501"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-2.5 text-sm font-medium text-navy transition hover:bg-surface/95"
            >
              <i className="fa-solid fa-phone text-[11px]" aria-hidden />
              Call (813) 655-4501
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-surface/22 px-6 py-2.5 text-sm font-medium text-surface transition hover:bg-surface/8"
            >
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
