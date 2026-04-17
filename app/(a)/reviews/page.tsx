import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews for Triple H Air Conditioning—Tampa Bay HVAC.",
};

export default function ReviewsPage() {
  return (
    <main className="bg-page">
      <section className="border-b border-navy/10 bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Reviews</p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            What customers say
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            We&apos;re building this page as more reviews come in—here&apos;s feedback we&apos;re
            proud to stand behind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-10 lg:py-20">
        <article className="mx-auto max-w-2xl rounded-2xl border border-navy/10 bg-surface p-8 shadow-sm md:p-10">
          <div className="flex gap-1 text-brand-red" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="fa-solid fa-star" aria-hidden />
            ))}
          </div>
          <blockquote className="mt-6">
            <p className="font-display text-xl font-medium leading-snug text-navy md:text-2xl">
              &ldquo;Used for 3 of my commercial buildings. They were constant with the price from
              what was quoted and did a good job at each building. I would recommend.&rdquo;
            </p>
            <footer className="mt-8 flex flex-wrap items-center gap-4 border-t border-navy/10 pt-6">
              <cite className="not-italic">
                <span className="font-semibold text-navy">Ada</span>
                <span className="mt-0.5 block text-sm text-muted">Commercial customer</span>
              </cite>
            </footer>
          </blockquote>
        </article>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-navy-deep px-8 py-10 text-center text-surface">
          <p className="text-surface/85">
            Had a great experience? Ask us where to leave a public review—we appreciate every star.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-hover"
            >
              Tell us how we did
            </Link>
            <a
              href="tel:+18136554501"
              className="inline-flex items-center gap-2 rounded-full border border-surface/25 px-6 py-3 text-sm font-semibold text-surface transition hover:bg-surface/10"
            >
              Call (813) 655-4501
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
