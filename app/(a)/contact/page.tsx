import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/app/components/ContactForm";
import { PageHero } from "@/app/components/PageHero";
import { Reveal } from "@/app/components/Reveal";
import {
  ADDRESS,
  COMPANY,
  EMAIL,
  EMAIL_HREF,
  HOURS_SUNDAY,
  HOURS_WEEKDAY,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Triple H Air Conditioning for HVAC service in Tampa Bay.",
};

const sections = [
  {
    title: "How to contact us",
    body: (
      <>
        We make it easy to reach us. For immediate assistance or to schedule service, call{" "}
        <a href={PHONE_HREF} className="font-medium text-brand hover:text-brand-hover">
          {PHONE}
        </a>
        . Our team is ready to help keep your home or business comfortable year-round. You can also email us at{" "}
        <a href={EMAIL_HREF} className="font-medium text-brand hover:text-brand-hover">
          {EMAIL}
        </a>
        .
      </>
    ),
  },
  {
    title: "Connect with us",
    body: "Staying connected with our clients matters to us. We welcome your questions, feedback, and any chance to discuss how we can serve you better. Your comfort and satisfaction are our priority.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact us"
        description="Reach out for premier HVAC services"
        bannerSrc="/contact-us-banner.jpg"
      />

      <section className="py-12 md:py-16">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_rgb(0_0_0_/0.08)]">
                <Image
                  src="/residential-hvac-repair-services.jpg"
                  alt="Comfortable home interior with clean indoor air"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  style={{ height: "auto" }}
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-xl font-semibold leading-snug text-navy md:text-2xl">
                Reach out for premier HVAC services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-muted md:text-lg">
                If you need professional HVAC services, our team at {COMPANY} is here to help. With a
                commitment to quality, efficiency, and customer satisfaction, we&apos;re prepared to address
                your heating, ventilation, and air conditioning needs—whether installation, maintenance,
                repair, or a custom solution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-page py-12 md:py-16">
        <div className="container-site max-w-3xl space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 60}>
              <article>
                <h3 className="text-lg font-semibold text-navy md:text-xl">{section.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-muted">{section.body}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-navy-muted">
              Thank you for considering {COMPANY} for your HVAC needs. We look forward to hearing from you
              and developing a solution that meets your requirements. Contact us today to experience the
              quality service that sets us apart.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy/6 py-12 md:py-16">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <p className="eyebrow">Reach us</p>
                  <h2 className="mt-2 text-xl font-semibold text-navy">{COMPANY}</h2>
                </div>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Brandon%2C+FL+83509"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-3 text-navy-muted transition hover:text-navy"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy-muted">
                        <i className="fa-solid fa-location-dot text-sm" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-wider text-navy-muted uppercase">
                          Our location
                        </span>
                        <span className="mt-1 block font-medium text-navy">{ADDRESS}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={PHONE_HREF}
                      className="flex items-start gap-3 transition hover:text-brand"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/8 text-brand">
                        <i className="fa-solid fa-phone text-sm" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-wider text-navy-muted uppercase">
                          Phone number
                        </span>
                        <span className="mt-1 block font-medium text-navy">{PHONE}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={EMAIL_HREF}
                      className="flex items-start gap-3 text-navy-muted transition hover:text-navy"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy-muted">
                        <i className="fa-solid fa-envelope text-sm" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-wider text-navy-muted uppercase">
                          Email
                        </span>
                        <span className="mt-1 block font-medium text-navy">{EMAIL}</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-navy-muted uppercase">
                    Hours of operation
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li className="border-b border-navy/6 pb-2">{HOURS_WEEKDAY}</li>
                    <li className="border-b border-navy/6 pb-2">{HOURS_SUNDAY}</li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-semibold text-navy">Contact us</h2>
                <p className="mt-2 text-sm text-muted">We typically respond within one business day.</p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
