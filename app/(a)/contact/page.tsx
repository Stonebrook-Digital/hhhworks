import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call Triple H Air Conditioning or request service—Brandon & Tampa Bay HVAC.",
};

const contactSideImg =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=2000";

export default function ContactPage() {
  return (
    <main className="bg-page">
      <section className="mx-auto grid min-h-[calc(100dvh-3.5rem)] max-w-[1600px] lg:grid-cols-2">
        <div className="relative h-48 lg:hidden">
          <Image
            src={contactSideImg}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-page to-transparent" />
        </div>
        <div className="relative hidden min-h-[420px] lg:block">
          <Image
            src={contactSideImg}
            alt="Home exterior"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent" />
          <div className="absolute bottom-10 left-10 max-w-sm rounded-xl border border-navy/8 bg-surface/92 p-5 shadow-[0_8px_24px_-4px_rgb(0_0_0_/0.08)] backdrop-blur-sm">
            <p className="font-display text-lg font-semibold leading-snug text-navy">
              Mon–Sat <span className="text-navy-muted">7am–7pm</span>
              <span className="mt-1 block text-sm font-normal text-muted">Sunday closed</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-surface px-4 py-12 sm:px-8 md:px-12 lg:py-20 lg:pl-14 lg:pr-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">Contact</p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-4 max-w-md text-muted">
            Fastest response: phone. For non-urgent requests, use the form—we reply as soon as we can.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="tel:+18136554501"
              className="flex min-w-[10rem] flex-1 items-center gap-3 rounded-xl border border-navy/8 bg-page px-4 py-4 transition hover:border-navy/14"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-surface">
                <i className="fa-solid fa-phone text-sm" aria-hidden />
              </span>
              <span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
                  Phone
                </span>
                <span className="font-semibold text-navy">(813) 655-4501</span>
              </span>
            </a>
            <a
              href="mailto:triplehair@gmail.com"
              className="flex min-w-[10rem] flex-1 items-center gap-3 rounded-xl border border-navy/8 bg-page px-4 py-4 transition hover:border-navy/14"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy/10 bg-surface text-navy">
                <i className="fa-solid fa-envelope text-sm" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
                  Email
                </span>
                <span className="break-all font-semibold text-navy">triplehair@gmail.com</span>
              </span>
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            <span className="font-semibold text-navy">Based in Brandon, FL</span>
            —serving Tampa Bay counties.{" "}
            <Link href="/areas" className="font-medium text-navy underline decoration-navy/15 underline-offset-4 hover:decoration-navy/35">
              See cities
            </Link>
          </p>

          <div className="mt-10 border-t border-navy/6 pt-10">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">Request service</h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
