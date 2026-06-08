import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { Reveal } from "@/app/components/Reveal";
import { ServiceGrid } from "@/app/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HVAC repairs, replacement, maintenance, tune-ups, duct cleaning, and construction installations for Tampa Bay.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we offer"
        title="Explore our HVAC solutions"
        description="From installations and repairs to maintenance and air quality improvements, we provide a full range of HVAC services."
      />
      <section className="py-16 md:py-20">
        <div className="container-site">
          <ServiceGrid />
        </div>
      </section>
      <section className="border-t border-navy/6 bg-page py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <div className="card mx-auto max-w-xl p-6 text-center md:p-8">
              <p className="font-display text-lg font-semibold text-navy">Not sure what you need?</p>
              <p className="mt-2 text-sm text-muted">We&apos;ll assess your system and recommend the right path.</p>
              <Link href="/contact" className="btn-primary mt-6">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
