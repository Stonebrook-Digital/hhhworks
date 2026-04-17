import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Triple H Air Conditioning Inc.—Tampa Bay HVAC since 2004. Legacy, customer focus, quality products, warranties, and gratitude to our customers.",
};

/** Verbatim section titles and copy from the client’s About page. */
const sections = [
  {
    id: "legacy",
    kicker: "Our legacy",
    title: "Our Legacy in Tampa Bay, FL",
    body: [
      "Since 2004, Triple H Air Conditioning Inc. has been a cornerstone in the Tampa Bay community, becoming one of the most respected names in the HVAC industry. Our journey began with a mission to provide unparalleled service that we would expect in our homes. This dedication has not only cultivated trust within our community but has also allowed us to offer high-quality products at affordable prices. Our legacy is built on a foundation of world-class service and backed by exceptional warranties, ensuring peace of mind for all our customers.",
    ],
  },
  {
    id: "customer",
    kicker: "Who we are",
    title: "A Customer-Focused Company",
    body: [
      "At the heart of Triple H Air Conditioning Inc. is our relentless drive to be a customer-focused company. Since our inception in 2004, the ethos of providing the type of service we would want for ourselves guides every decision we make. This philosophy has enabled us to truly understand our customers' needs and tailor our services accordingly. Our commitment to exceeding expectations at every turn is why we have garnered hundreds of satisfied customers over the years, whose trust and support have been paramount to our success.",
    ],
  },
  {
    id: "quality",
    kicker: "What we deliver",
    title: "World-Class Service and High-Quality Products",
    body: [
      "Our reputation as a leading provider of HVAC services in the Tampa Bay area is anchored in our commitment to world-class service and high-quality products. We recognize that the backbone of our success is not just the services we offer but also the products we choose. This is why we partner with reputable manufacturers known for their durability and efficiency. By combining superior service with premium products, we ensure that our customers receive the best possible solutions for their heating and air conditioning needs.",
    ],
  },
  {
    id: "value",
    kicker: "Value",
    title: "Affordable Prices with Exceptional Warranties",
    body: [
      "Understanding the importance of affordability without compromising on quality, Triple H Air Conditioning strives to offer our services and products at competitive prices. Alongside our affordability, we stand behind our work with exceptional warranties, offering you not just savings but also assurance. Our commitment to providing value is evident in every project we undertake, ensuring that our customers benefit from both economic pricing and the longevity of their HVAC systems.",
    ],
  },
];

const thankingTitle = "Thanking Our Valued Customers";
const thankingBody = [
  "We at Triple H Air Conditioning Inc. owe our success to the hundreds of satisfied customers who have trusted us over the years. It is your belief in our ability to meet your HVAC needs that has propelled us forward, and for that, we are deeply grateful. Our team continues to work tirelessly, refining our skills and services to serve you better. We thank you for your business and look forward to continuing to serve the Tampa Bay area with the same dedication and excellence that have become synonymous with Triple H Air Conditioning.",
  "Our journey is ongoing, and our mission remains clear: to provide the highest level of service and quality in the HVAC industry while maintaining affordability and backing our work with robust warranties. Thank you for allowing us to be a part of your homes and lives. We are dedicated to continuing our legacy of excellence and customer satisfaction for many years to come.",
];

export default function AboutPage() {
  return (
    <main className="bg-page">
      <section className="relative overflow-hidden bg-navy-deep text-surface">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-red/12 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-navy/60 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">About</p>
            <span className="rounded-full border border-brand-red/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red">
              Est. 2004
            </span>
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
            About Triple H Air Conditioning Inc.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-surface/85 md:text-xl">
            Since 2004, Triple H Air Conditioning Inc. has been a cornerstone in the Tampa Bay
            community, becoming one of the most respected names in the HVAC industry.
          </p>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 lg:px-10 lg:py-16">
          <blockquote className="relative mx-auto max-w-4xl border-l-4 border-brand-red pl-6 md:pl-10">
            <p className="font-display text-xl font-medium leading-snug text-navy md:text-2xl">
              Our journey began with a mission to provide unparalleled service that we would expect
              in our homes.
            </p>
          </blockquote>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        {sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`flex flex-col gap-8 border-b border-navy/10 py-14 md:flex-row md:items-start md:gap-16 md:py-20 lg:gap-24 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`md:w-[42%] lg:w-[38%] ${i % 2 === 1 ? "md:pt-1 md:text-right" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">{s.kicker}</p>
              <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-navy sm:text-3xl md:text-[1.75rem] md:leading-snug lg:text-4xl">
                {s.title}
              </h2>
            </div>
            <div className="min-w-0 flex-1 space-y-5 text-base leading-[1.75] text-navy/90 md:text-[1.0625rem]">
              {s.body.map((p, j) => (
                <p key={`${s.id}-${j}`}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-navy text-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Gratitude</p>
          <h2 className="font-display mt-4 max-w-4xl text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            {thankingTitle}
          </h2>
          <div className="mt-8 max-w-4xl space-y-6 text-base leading-[1.75] text-surface/85 md:text-lg">
            {thankingBody.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-surface">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-5 py-12 md:flex-row md:items-center md:px-8 md:py-14 lg:px-10">
          <div>
            <p className="font-display text-xl font-semibold text-navy md:text-2xl">Ready when you are.</p>
            <p className="mt-2 max-w-md text-sm text-muted">
              Hillsborough · Pinellas · Polk · Pasco · Northern Manatee
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-hover"
            >
              Get an estimate
            </Link>
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/30 hover:bg-page"
            >
              Areas we serve
            </Link>
            <a
              href="tel:+18136554501"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/30 hover:bg-page"
            >
              <i className="fa-solid fa-phone text-xs" aria-hidden />
              (813) 655-4501
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
