import Link from "next/link";
import type { Metadata } from "next";
import { GoogleReviewBadge } from "@/app/components/GoogleReviewBadge";
import { ServiceAreaMapMock } from "@/app/components/ServiceAreaMapMock";
import { WORK_LOCATIONS } from "@/lib/service-locations";

export const metadata: Metadata = {
  title: "Areas & reviews",
  description:
    "Where Triple H Air Conditioning works across Tampa Bay—job map, counties we serve, and customer reviews with links to Google.",
};

const counties = "Hillsborough · Pinellas · Polk · Pasco · Northern Manatee";

const linkBtn =
  "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-red-hover";
const ghostBtn =
  "inline-flex items-center gap-2 rounded-full border border-navy/10 bg-page px-6 py-2.5 text-sm font-medium text-navy transition hover:border-navy/18";

export default function AreasPage() {
  const spotlight = WORK_LOCATIONS[0];

  return (
    <main className="bg-page">
      <section className="border-b border-navy/6 bg-surface">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">
            Service area
          </p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Areas & reviews
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
            See where we&apos;ve worked, read notes from the crew, and follow through to public
            reviews on Google—no feeds or keys, just content you control.
          </p>
        </div>
      </section>

      <section
        id="work-map"
        className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
        aria-labelledby="work-map-heading"
      >
        <h2 id="work-map-heading" className="font-display text-2xl font-semibold text-navy md:text-3xl">
          Work map
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Google Maps (same embed as the home page) beside location chips—crew notes and review
          snippets are static until you add your own map pins via Google or a future Maps API build.
        </p>
        <div className="mt-8 rounded-2xl border border-navy/6 bg-surface p-5 shadow-[0_1px_2px_rgb(0_0_0_/0.04)] md:p-8">
          <ServiceAreaMapMock />
        </div>
      </section>

      <section className="border-y border-navy/6 bg-surface">
        <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">Counties</p>
          <p className="mt-2 font-display text-lg font-medium text-navy md:text-xl">{counties}</p>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Don&apos;t see your city on the map chips? If you&apos;re in these counties, call us—we
            can usually help.
          </p>
          <Link href="/contact" className={`${linkBtn} mt-6`}>
            Get in touch
          </Link>
        </div>
      </section>

      <section
        id="customer-reviews"
        className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
        aria-labelledby="reviews-heading"
      >
        <h2 id="reviews-heading" className="font-display text-2xl font-semibold text-navy md:text-3xl">
          Customer reviews
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Highlights we&apos;re proud to display here; each card links out to Google so visitors can
          read the full context.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
          <article className="rounded-xl border border-navy/6 bg-surface p-7 shadow-[0_1px_2px_rgb(0_0_0_/0.04)] md:p-9">
            <GoogleReviewBadge starClassName="h-5 w-5" />
            <blockquote className="mt-6">
              <p className="font-display text-xl font-medium leading-snug text-navy md:text-2xl">
                &ldquo;{spotlight.reviewQuote}&rdquo;
              </p>
              <footer className="mt-8 flex flex-wrap items-center gap-4 border-t border-navy/6 pt-6">
                <cite className="not-italic">
                  <span className="font-semibold text-navy">{spotlight.reviewAuthor}</span>
                  {spotlight.reviewRole ? (
                    <span className="mt-0.5 block text-sm text-muted">{spotlight.reviewRole}</span>
                  ) : null}
                </cite>
                <a
                  href={spotlight.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy underline decoration-navy/15 underline-offset-4 hover:decoration-navy/35"
                >
                  Read on Google
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden />
                </a>
              </footer>
            </blockquote>
          </article>

          <article className="rounded-xl border border-navy/6 bg-surface p-7 shadow-[0_1px_2px_rgb(0_0_0_/0.04)] md:p-9">
            <GoogleReviewBadge starClassName="h-5 w-5" />
            <blockquote className="mt-6">
              <p className="font-display text-xl font-medium leading-snug text-navy md:text-2xl">
                &ldquo;Clear options, no surprise add-ons. House has never cooled this evenly.&rdquo;
              </p>
              <footer className="mt-8 flex flex-wrap items-center gap-4 border-t border-navy/6 pt-6">
                <cite className="not-italic">
                  <span className="font-semibold text-navy">Jordan M.</span>
                  <span className="mt-0.5 block text-sm text-muted">Homeowner · Tampa</span>
                </cite>
                <a
                  href="https://www.google.com/search?q=Triple+H+Air+Conditioning+Tampa+FL+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy underline decoration-navy/15 underline-offset-4 hover:decoration-navy/35"
                >
                  Read on Google
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden />
                </a>
              </footer>
            </blockquote>
          </article>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-white/8 bg-navy-deep px-7 py-9 text-center text-surface md:px-10">
          <p className="text-sm text-surface/78 md:text-[15px]">
            Had a great experience? Ask us where to leave a public review—we appreciate every star.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <Link href="/contact" className={linkBtn}>
              Tell us how we did
            </Link>
            <a href="tel:+18136554501" className={`${ghostBtn} border-surface/18 bg-transparent text-surface hover:bg-surface/8`}>
              Call (813) 655-4501
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
