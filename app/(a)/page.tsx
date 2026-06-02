import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";
import { GoogleMapsEmbed } from "@/app/components/GoogleMapsEmbed";
import { HeroMedia, type HeroSlide } from "@/app/components/HeroMedia";
import { HomeFaq } from "@/app/components/HomeFaq";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ServiceGrid } from "@/app/components/ServiceGrid";
import { ASSETS, COMPANY, COUNTIES, PHONE, PHONE_HREF, TRUST_ITEMS } from "@/lib/site";

const HERO_SLIDES: HeroSlide[] = [
  { src: ASSETS.hero[0], alt: "HVAC technician servicing air conditioning equipment" },
  { src: ASSETS.hero[1], alt: "Residential HVAC maintenance" },
  { src: ASSETS.hero[2], alt: "Comfortable home interior with reliable climate control" },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[min(92dvh,44rem)] overflow-hidden md:min-h-[min(88dvh,40rem)]">
        <HeroMedia slides={HERO_SLIDES} />

        <div className="relative z-10 container-site flex min-h-[min(92dvh,44rem)] flex-col justify-end pb-16 pt-24 md:min-h-[min(88dvh,40rem)] md:justify-center md:pb-20 md:pt-28">
          <div className="max-w-xl md:max-w-2xl">
            <p className="animate-rise-soft delay-1 text-sm font-medium text-surface/80">
              Tampa Bay · Since 2004
            </p>
            <h1 className="animate-rise-soft delay-2 font-display mt-3 text-[2rem] leading-[1.1] font-semibold tracking-tight text-surface sm:text-4xl md:text-[2.75rem]">
              Comfort you can count on. Pricing you can trust.
            </h1>
            <p className="animate-rise-soft delay-3 mt-4 max-w-lg text-base leading-relaxed text-surface/78 md:text-lg">
              Install, repair, and maintain with flat-rate quotes before we pick up a tool—serving
              homes and businesses across the Bay area.
            </p>
            <div className="animate-rise-soft delay-4 mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Free estimate
                <i className="fa-solid fa-arrow-right text-[10px] opacity-80" aria-hidden />
              </Link>
              <a href={PHONE_HREF} className="btn-secondary border-surface/25 bg-surface/10 text-surface backdrop-blur-sm hover:bg-surface/15">
                <i className="fa-solid fa-phone text-[11px]" aria-hidden />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/6 bg-surface py-8">
        <div className="container-site">
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {TRUST_ITEMS.map((item) => (
              <li key={item.label} className="text-center sm:text-left">
                <p className="font-display text-lg font-semibold text-navy">{item.label}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title={`Trusted HVAC in Tampa Bay`}
                description={`${COMPANY} is a full-service heating and air contractor—repairs, maintenance, replacement, and new installs—for homeowners and businesses across ${COUNTIES.slice(0, 3).join(", ")}, and more.`}
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Flat-rate quotes before work begins—no hourly surprises",
                  "All major brands; residential and commercial",
                  "Scheduled maintenance to prevent costly breakdowns",
                ].map((text) => (
                  <li key={text} className="flex gap-3 text-sm leading-relaxed text-navy-muted">
                    <i className="fa-solid fa-check mt-0.5 text-brand" aria-hidden />
                    {text}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-hover">
                Our story
                <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden />
              </Link>
            </div>
            <div className="card overflow-hidden p-2">
              <GoogleMapsEmbed variant="hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-page py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Services"
            title="Everything your system needs"
            description="From emergency repairs to planned maintenance and full replacements—we handle it in-house."
            align="center"
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <Image src={ASSETS.reviewBg} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="container-site relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <i key={i} className="fa-solid fa-star text-sm" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-xl leading-snug font-medium text-surface md:text-2xl">
              &ldquo;Used for 3 of my commercial buildings. They were constant with the price from what
              was quoted and did a good job at each building.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-surface/70">— Ada</p>
            <Link href="/areas" className="btn-secondary mt-8 border-surface/20 bg-surface/10 text-surface hover:bg-surface/15">
              More reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Quick answers"
                description="Common questions about pricing, service area, and what to expect."
              />
              <div className="card mt-8 p-6 md:p-8">
                <HomeFaq />
              </div>
            </div>
            <div className="card p-6 md:p-8 lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-display text-xl font-semibold text-navy">Request a free estimate</h2>
              <p className="mt-2 text-sm text-muted">
                Tell us what you need—we&apos;ll follow up with options and next steps.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-navy-deep py-16 text-surface md:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Ready for reliable comfort?</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface/70 md:text-base">
              Call now or send a message—we&apos;ll get back to you with clear next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-primary">
              <i className="fa-solid fa-phone text-[11px]" aria-hidden />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-secondary border-surface/20 bg-transparent text-surface hover:bg-surface/10">
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
