import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { ServiceGrid } from "@/app/components/ServiceGrid";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HVAC repairs, replacement, maintenance, tune-ups, duct cleaning, and construction installations for Tampa Bay.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="HVAC services"
        description="Installations, repairs, maintenance, and air quality—handled by one team you can call year-round."
      />
      <section className="py-16 md:py-20">
        <div className="container-site">
          <ServiceGrid />
        </div>
      </section>
      <section className="border-t border-navy/6 bg-page py-16 md:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Service details</h2>
          <div className="mt-10 space-y-12">
            {SERVICES.map((service) => (
              <article key={service.title} id={service.title.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <i className={`fa-solid ${service.icon}`} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="card mt-14 p-6 text-center md:p-8">
            <p className="font-display text-lg font-semibold text-navy">Not sure what you need?</p>
            <p className="mt-2 text-sm text-muted">We&apos;ll assess your system and recommend the right path.</p>
            <Link href="/contact" className="btn-primary mt-6">
              Request a free estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
