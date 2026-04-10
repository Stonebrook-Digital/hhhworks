import Image from "next/image";
import Link from "next/link";

/** Bright modern interior — not the condenser hero */
const heroImg =
  "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&q=85&w=2400";
const splitImg =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=1800";
const cardA =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";
const cardB =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200";

export default function HomePage() {
  return (
    <main>
      {/* Hero — photo stays visible; readability from a side scrim only (no full white wash) */}
      <section className="relative min-h-[calc(100vh-4.25rem)] overflow-hidden grain">
        <Image
          src={heroImg}
          alt="Bright, modern living space"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Desktop: soft scrim on the left where type sits */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[min(100%,42rem)] bg-gradient-to-r from-white/92 via-white/55 to-transparent md:block"
          aria-hidden
        />
        {/* Mobile: light fade from bottom so headline stays readable */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent md:hidden"
          aria-hidden
        />
        <div className="relative z-[3] mx-auto flex min-h-[calc(100vh-4.25rem)] max-w-[1400px] flex-col justify-end px-5 pb-20 pt-16 md:px-8 lg:px-10 lg:pb-28">
          <p className="animate-rise delay-1 font-display text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
            Tampa Bay · Since 2004
          </p>
          <h1 className="animate-rise delay-2 font-display mt-4 max-w-[14ch] text-5xl font-semibold leading-[0.95] tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
            Cold air.
            <br />
            <span className="bg-gradient-to-r from-amber-700 via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Warm service.
            </span>
          </h1>
          <p className="animate-rise delay-3 mt-8 max-w-xl text-lg leading-relaxed text-neutral-700 md:text-xl md:drop-shadow-sm">
            Installations, repairs, and flat-rate pricing—so you always know the number before we
            touch a tool.
          </p>
          <div className="animate-rise delay-4 mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-amber-500/30 transition hover:brightness-105"
            >
              Get a quote
              <i className="fa-solid fa-arrow-right -mr-1 text-xs" aria-hidden />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/95 px-8 py-4 text-sm font-semibold text-neutral-800 shadow-md backdrop-blur-sm transition hover:bg-white"
            >
              View gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-neutral-200 bg-white py-4 overflow-hidden">
        <div className="marquee-track flex w-max gap-16 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-16">
              <span>Flat-rate pricing</span>
              <span className="text-amber-500">·</span>
              <span>24/7 emergency</span>
              <span className="text-amber-500">·</span>
              <span>All major brands</span>
              <span className="text-amber-500">·</span>
              <span>Tampa Bay owned</span>
              <span className="text-amber-500">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Split — full-bleed photo; quote sits in its own card below (nothing layered on the image) */}
      <section className="relative bg-neutral-50">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-6">
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-neutral-200/80 lg:min-h-[420px]">
              <Image
                src={splitImg}
                alt="Comfortable sunlit interior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <blockquote className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-display text-xl font-medium leading-snug text-neutral-800 md:text-2xl">
                &ldquo;We show up stocked, explain the fix, and stand behind every install.&rdquo;
              </p>
            </blockquote>
          </div>
          <div className="mt-14 flex flex-col justify-center lg:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Why Triple H
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Built for Florida heat—not generic templates.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              From Pasco to Manatee, homeowners call us when they want clear pricing, technicians who
              respect the home, and systems tuned to factory specs.
            </p>
            <ul className="mt-10 space-y-4 text-neutral-700">
              {[
                "Flat-rate system—price before the wrench turns",
                "Fully stocked trucks for faster fixes",
                "Reliance Membership for tune-ups & priority scheduling",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <i className="fa-solid fa-check text-[10px]" aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-800"
            >
              Our story
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Image cards */}
      <section className="border-t border-neutral-200 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                Comfort, elevated.
              </h2>
              <p className="mt-4 max-w-lg text-neutral-600">
                A glimpse at the kind of spaces we keep cool—clean installs, modern systems, and
                attention to detail.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/gallery"
                className="shrink-0 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50"
              >
                Full gallery
              </Link>
              <Link
                href="/services"
                className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-100"
              >
                Services
              </Link>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="group relative aspect-[16/11] overflow-hidden rounded-3xl shadow-lg ring-1 ring-neutral-200/80">
              <Image
                src={cardA}
                alt="Modern home exterior"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/75 via-neutral-900/10 to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-xl font-medium text-white">
                Residential
              </span>
            </div>
            <div className="group relative aspect-[16/11] overflow-hidden rounded-3xl shadow-lg ring-1 ring-neutral-200/80 md:mt-12">
              <Image
                src={cardB}
                alt="Bright open interior with natural light"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/75 via-neutral-900/10 to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-xl font-medium text-white">
                Light &amp; air
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band — no photo multiply layer */}
      <section className="relative overflow-hidden py-24 md:py-32 grain">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-amber-50" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-200/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" aria-hidden />
        <div className="relative z-[1] mx-auto max-w-[1400px] px-5 text-center md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
            Ready when you are
          </p>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight text-neutral-900 md:text-6xl">
            Let&rsquo;s make your space feel right.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+18136554501"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-neutral-800"
            >
              <i className="fa-solid fa-phone" aria-hidden />
              Call now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-4 text-sm font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50"
            >
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
