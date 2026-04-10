import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of installs, equipment, and spaces we’ve worked on—plus words from Tampa Bay homeowners.",
};

/** All URLs verified HTTP 200 — no portrait “guy” shots; work & spaces only */
const galleryImages: { src: string; label: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=85",
    label: "Outdoor unit · clean install",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    label: "Residential · curb to thermostat",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    label: "Modern home · system upgrade",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    label: "Living space · even cooling",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    label: "Interior · comfort zone",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    label: "Daylight & airflow",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
    label: "Open plan · zoned comfort",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1600&q=85",
    label: "Bright finish-out",
  },
  {
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=85",
    label: "Controls · smart setup",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85",
    label: "Ductwork · airflow path",
  },
  {
    src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85",
    label: "On the job · precision work",
  },
  {
    src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=85",
    label: "Laundry · dryer vent care",
  },
];

const words = [
  {
    quote:
      "AC died on a Friday night—they were straight about repair vs replace and had us cold again fast.",
    who: "Amanda K.",
    where: "South Tampa",
  },
  {
    quote:
      "Flat-rate quote before any work. Crew was careful with our floors and walked us through the new thermostat.",
    who: "Roberto M.",
    where: "St. Pete",
  },
  {
    quote:
      "Years of tune-ups with them—on time, professional, and they actually remember our system.",
    who: "Sandra T.",
    where: "Brandon",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-neutral-50">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">Our work</p>
          <h1 className="font-display mt-4 max-w-[14ch] text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            Real installs, tidy equipment, and the kinds of homes we cool every day. Swap these
            placeholders anytime with your own job photos—then keep the reviews right below for
            social proof.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Book a visit
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((item) => (
            <figure
              key={item.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="border-t border-neutral-100 px-4 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
            Words from the Bay
          </p>
          <h2 className="font-display mt-4 text-center text-3xl font-semibold text-neutral-900 md:text-4xl">
            Reviews &amp; shout-outs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            No stock headshots—just what customers say. Paste your real Google blurbs here when you
            have them.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {words.map((w) => (
              <blockquote
                key={w.who}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-sm" aria-hidden />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-neutral-800">&ldquo;{w.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-neutral-200 pt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-neutral-900">{w.who}</span>
                    <span className="mt-1 block text-xs uppercase tracking-wider text-neutral-500">
                      {w.where}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
