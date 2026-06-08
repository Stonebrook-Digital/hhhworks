import type { Metadata } from "next";
import Link from "next/link";
import { FieldNotes } from "@/app/components/FieldNotes";
import { GoogleMapsEmbed } from "@/app/components/GoogleMapsEmbed";
import { GoogleReviewBadge } from "@/app/components/GoogleReviewBadge";
import { PageHero } from "@/app/components/PageHero";
import { ParallaxBand } from "@/app/components/ParallaxBand";
import { Reveal } from "@/app/components/Reveal";
import { ASSETS } from "@/lib/site";
import {
  SERVICE_AREAS,
  SERVICE_AREAS_CLOSING,
  SERVICE_AREAS_INTRO,
} from "@/lib/service-areas";
import { SERVICE_AREA_REVIEWS } from "@/lib/service-locations";

export const metadata: Metadata = {
  title: "Areas & reviews",
  description:
    "Triple H Air Conditioning serves Brandon, Tampa, Saint Petersburg, Shore Acres, and surrounding Tampa Bay communities.",
};

export default function AreasPage() {
  return (
    <main>
      <PageHero
        title="Areas we serve"
        description="Top-quality HVAC services across Tampa Bay"
        bannerSrc="/reviews-banner.jpg"
        compact
      />

      <section className="py-8 md:py-10">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,1fr)_28rem]">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <p className="text-base leading-relaxed text-navy-muted">{SERVICE_AREAS_INTRO}</p>
              </Reveal>
              {SERVICE_AREAS.map((area, index) => (
                <Reveal key={area.id} delay={index * 40}>
                  <article>
                    <h2 className="text-base font-semibold text-navy md:text-lg">{area.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-navy-muted md:text-base">
                      {area.description}
                    </p>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={SERVICE_AREAS.length * 40}>
                <p className="text-sm leading-relaxed text-navy-muted md:text-base">
                  {SERVICE_AREAS_CLOSING}
                </p>
              </Reveal>
            </div>

            <Reveal delay={80} className="lg:sticky lg:top-24">
              <div className="card overflow-hidden p-1.5" id="work-map">
                <GoogleMapsEmbed variant="hero" className="max-w-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {SERVICE_AREA_REVIEWS.length > 0 ? (
        <section className="border-t border-navy/6 bg-page py-8 md:py-10" id="customer-reviews">
          <div className="container-site">
            <Reveal>
              <h2 className="text-lg font-semibold text-navy md:text-xl">What customers say</h2>
              <p className="mt-2 max-w-2xl text-sm text-navy-muted">
                A few words from homeowners and businesses we&apos;ve served.
              </p>
            </Reveal>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {SERVICE_AREA_REVIEWS.map((loc, index) => (
                <li key={loc.id}>
                  <Reveal delay={index * 60}>
                    <div className="card p-5">
                      <GoogleReviewBadge />
                      <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                        &ldquo;{loc.reviewQuote}&rdquo;
                      </p>
                      <p className="mt-2 text-sm font-medium text-navy">
                        {loc.reviewAuthor}
                        {loc.reviewRole ? (
                          <span className="font-normal text-muted"> · {loc.reviewRole}</span>
                        ) : null}
                      </p>
                      <p className="mt-1 text-xs text-muted">{loc.name}</p>
                      <a
                        href={loc.googleReviewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-xs font-medium text-brand hover:text-brand-hover"
                      >
                        View on Google
                      </a>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FieldNotes />

      <ParallaxBand
        imageSrc={ASSETS.reviewBg}
        overlay="bg-navy-deep/80"
        className="min-h-[min(42vh,20rem)]"
        contentClassName="container-site w-full py-10 text-center md:py-12"
      >
        <Reveal variant="fade" className="w-full">
          <h2 className="font-display text-xl font-semibold text-surface md:text-2xl">
            Need service in your area?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-surface/70">
            Tell us where you are and what&apos;s going on—we&apos;ll confirm availability and next
            steps.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Contact us
          </Link>
        </Reveal>
      </ParallaxBand>
    </main>
  );
}
