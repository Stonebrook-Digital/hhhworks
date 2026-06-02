import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm";
import { PageHero } from "@/app/components/PageHero";
import {
  ADDRESS,
  COMPANY,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Triple H Air Conditioning for HVAC service in Tampa Bay.",
};

const hours = [
  { days: "Mon – Sat", time: "7:00 AM – 7:00 PM" },
  { days: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact us"
        description="Call, email, or send a request—we'll respond with clear next steps and a flat-rate quote when applicable."
      />
      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
            <div className="space-y-8">
              <div>
                <p className="eyebrow">Reach us</p>
                <h2 className="font-display mt-2 text-xl font-semibold text-navy">{COMPANY}</h2>
                <p className="mt-2 text-sm text-muted">{ADDRESS}</p>
              </div>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3 font-medium text-navy transition hover:text-brand"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/8 text-brand">
                      <i className="fa-solid fa-phone text-sm" aria-hidden />
                    </span>
                    {PHONE}
                  </a>
                </li>
                <li>
                  <a
                    href={EMAIL_HREF}
                    className="flex items-center gap-3 text-navy-muted transition hover:text-navy"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy-muted">
                      <i className="fa-solid fa-envelope text-sm" aria-hidden />
                    </span>
                    {EMAIL}
                  </a>
                </li>
              </ul>
              <div>
                <p className="text-xs font-semibold tracking-wider text-navy-muted uppercase">Hours</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {hours.map((row) => (
                    <li key={row.days} className="flex justify-between gap-4 border-b border-navy/6 pb-2">
                      <span>{row.days}</span>
                      <span className="text-navy">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold text-navy">Send a request</h2>
              <p className="mt-2 text-sm text-muted">We typically respond within one business day.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
