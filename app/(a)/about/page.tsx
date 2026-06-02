import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Triple H Air Conditioning Inc.—Tampa Bay HVAC since 2004. Customer-focused service, quality products, and flat-rate pricing.",
};

const sections = [
  {
    title: "Our legacy in Tampa Bay",
    body: "Since 2004, we've built our reputation on the kind of service we'd want in our own homes—honest recommendations, skilled technicians, and work that holds up season after season.",
  },
  {
    title: "Customer-first, always",
    body: "We take time to understand your situation before recommending a fix or a full replacement. No pressure, no jargon—just clear options and fair pricing.",
  },
  {
    title: "Quality equipment & workmanship",
    body: "We partner with trusted manufacturers and stand behind our installs and repairs. The goal is efficiency, reliability, and comfort you can feel.",
  },
  {
    title: "Flat-rate transparency",
    body: "Whenever possible, you'll know the price before we start. That means fewer surprises and more trust—something our customers across the Bay area count on.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About us"
        description={`${COMPANY} has served Tampa Bay homeowners and businesses with full-service heating and air since 2004.`}
      />
      <section className="py-16 md:py-20">
        <div className="container-site max-w-3xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{section.body}</p>
              </article>
            ))}
          </div>
          <div className="card mt-14 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <p className="font-display text-lg font-semibold text-navy">Let&apos;s talk about your system</p>
              <p className="mt-1 text-sm text-muted">Free estimates · Brandon-based team</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
