import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";
import { GoogleMapsEmbed } from "@/app/components/GoogleMapsEmbed";
import { HeroMedia, type HeroSlide } from "@/app/components/HeroMedia";
import { ParallaxBand } from "@/app/components/ParallaxBand";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ServiceGrid } from "@/app/components/ServiceGrid";
import { formatServiceAreaNames, SERVICE_AREAS } from "@/lib/service-areas";
import { ASSETS, PHONE, PHONE_HREF } from "@/lib/site";

const HERO_SLIDES: HeroSlide[] = [
  { src: ASSETS.hero[0], alt: "HVAC technician servicing air conditioning equipment" },
  { src: ASSETS.hero[1], alt: "Residential HVAC maintenance" },
  { src: ASSETS.hero[2], alt: "Comfortable home interior with reliable climate control" },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-dvh overflow-hidden">
        <HeroMedia slides={HERO_SLIDES} />

        <div className="pointer-events-none relative z-10 container-site flex min-h-dvh flex-col justify-end pb-16 pt-24 md:justify-center md:pb-20 md:pt-28">
          <div className="pointer-events-auto max-w-xl md:max-w-2xl">
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
              <Link href="/services" className="btn-primary">
                Learn more
                <i className="fa-solid fa-arrow-right text-[10px] opacity-80" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary border-surface/25 bg-surface/10 text-surface backdrop-blur-sm hover:bg-surface/15"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/6 bg-surface py-12 md:py-16">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-brand uppercase md:text-[1.75rem]">
              Welcome to Triple H Air Conditioning Inc.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              We&apos;re a full-service HVAC contractor for repair, maintenance, and installation
              throughout Tampa Bay—including {formatServiceAreaNames()}. Our goal is straightforward:
              keep your
              system efficient, your home comfortable, and your energy costs under control.
            </p>
            <h3 className="font-display mt-6 text-lg font-semibold tracking-tight text-navy uppercase">
              Expert repairs and maintenance
            </h3>
            <p className="mt-2 text-base leading-relaxed text-navy-muted">
              We work on all major brands and diagnose problems quickly so repairs get done right the
              first time. Regular tune-ups and scheduled service help prevent breakdowns and extend the
              life of your equipment.
            </p>
            <Link href="/about" className="btn-primary mt-6">
              Read more
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-page py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Everything your system needs"
              description="From emergency repairs to planned maintenance and full replacements—we handle it in-house."
              align="center"
            />
          </Reveal>
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-surface py-10 md:py-12">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <Reveal>
              <p className="eyebrow">Coverage</p>
              <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-navy md:text-2xl">
                Areas we serve
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted md:text-base">
                We provide HVAC repair, maintenance, installation, and replacement throughout Tampa
                Bay—including {formatServiceAreaNames()}, and surrounding communities.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.id}>
                    <span className="block rounded-full border border-navy/8 bg-page px-3 py-1.5 text-xs font-medium text-navy md:text-sm">
                      {area.name}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/areas" className="btn-secondary mt-5">
                View areas &amp; reviews
                <i className="fa-solid fa-arrow-right text-[10px] opacity-70" aria-hidden />
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <div className="card overflow-hidden p-1.5">
                <GoogleMapsEmbed variant="hero" className="max-w-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ParallaxBand imageSrc={ASSETS.reviewBg} contentClassName="container-site w-full">
        <Reveal variant="fade" className="mx-auto w-full max-w-2xl text-center">
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
        </Reveal>
      </ParallaxBand>

      <section className="border-t border-navy/6 py-8 md:py-10">
        <div className="container-site max-w-2xl">
          <Reveal>
            <h2 className="font-display text-lg font-semibold text-navy">Request a quote</h2>
            <div className="mt-4">
              <ContactForm variant="compact" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-navy-deep py-16 text-surface md:py-20">
        <div className="container-site">
          <Reveal variant="fade">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
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
          </Reveal>
        </div>
      </section>
    </main>
  );
}
