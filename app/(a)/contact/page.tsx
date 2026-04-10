import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call Triple H Air Conditioning or send a message—Tampa Bay HVAC service.",
};

/** Modern home exterior — different from condenser / old hero */
const contactSideImg =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=2000";

export default function ContactPage() {
  return (
    <main className="bg-neutral-50">
      <section className="mx-auto grid min-h-[calc(100vh-4.25rem)] max-w-[1600px] lg:grid-cols-2">
        <div className="relative h-56 lg:hidden">
          <Image
            src={contactSideImg}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent" />
        </div>
        <div className="relative hidden min-h-[420px] lg:block">
          <Image
            src={contactSideImg}
            alt="Modern home exterior"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          {/* Thin edge fade only — photo stays visible */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="absolute bottom-12 left-12 right-16 max-w-lg rounded-2xl border border-white/60 bg-white/90 p-8 shadow-lg backdrop-blur-sm">
            <p className="font-display text-2xl font-medium leading-snug text-neutral-900 md:text-3xl">
              Talk to a human—
              <span className="text-amber-700"> not a phone tree.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white px-5 py-16 shadow-sm md:px-12 lg:py-24 lg:pl-16 lg:pr-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">Contact</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Let&rsquo;s get you on the schedule.
          </h1>
          <p className="mt-6 max-w-md text-neutral-600">
            For fastest help, call. For non-urgent requests, drop a note—we respond as soon as we
            can.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="tel:+18136554501"
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition hover:border-amber-300/60 hover:bg-amber-50/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <i className="fa-solid fa-phone" aria-hidden />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-wider text-neutral-500">Phone</span>
                <span className="font-semibold text-neutral-900">(813) 655-4501</span>
              </span>
            </a>
            <a
              href="mailto:info@hhhworks.com"
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition hover:border-sky-300/60 hover:bg-sky-50/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <i className="fa-solid fa-envelope" aria-hidden />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-wider text-neutral-500">Email</span>
                <span className="font-semibold text-neutral-900">info@hhhworks.com</span>
              </span>
            </a>
          </div>

          <div className="mt-14 border-t border-neutral-200 pt-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
