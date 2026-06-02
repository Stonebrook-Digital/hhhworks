import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { GoogleMapsEmbed } from "@/app/components/GoogleMapsEmbed";
import { GoogleReviewBadge } from "@/app/components/GoogleReviewBadge";
import { PageHero } from "@/app/components/PageHero";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ASSETS, COUNTIES, COMPANY } from "@/lib/site";
import { WORK_LOCATIONS } from "@/lib/service-locations";

export const metadata: Metadata = {
  title: "Areas & reviews",
  description: "Triple H Air Conditioning serves Tampa Bay and surrounding counties.",
};

export default function AreasPage() {
  return (
    <main>
      <PageHero
        title="Areas we serve"
        description={`${COMPANY} works throughout Tampa and surrounding counties—see where we're active and what customers are saying.`}
      />

      <section className="py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Coverage"
            title="Tampa Bay & beyond"
            description="We regularly serve customers in these counties. Not listed? Contact us—we may still be able to help."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {COUNTIES.map((county) => (
              <li
                key={county}
                className="rounded-full border border-navy/8 bg-surface px-4 py-2 text-sm font-medium text-navy"
              >
                {county}
              </li>
            ))}
          </ul>
          <div className="card mt-10 overflow-hidden p-2" id="work-map">
            <GoogleMapsEmbed variant="hero" />
          </div>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-page py-16 md:py-20" id="customer-reviews">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reviews"
            title="What customers say"
            description="Real feedback from homeowners and businesses across our service area."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {WORK_LOCATIONS.map((loc) => (
              <li key={loc.id} className="card p-6">
                <GoogleReviewBadge />
                <p className="mt-4 text-sm leading-relaxed text-navy-muted">&ldquo;{loc.reviewQuote}&rdquo;</p>
                <p className="mt-3 text-sm font-medium text-navy">
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0">
          <Image src={ASSETS.reviewBg} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="container-site relative text-center">
          <h2 className="font-display text-2xl font-semibold text-surface md:text-3xl">
            Need service in your area?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-surface/70">
            Tell us where you are and what&apos;s going on—we&apos;ll confirm availability and quote options.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Request a free estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
