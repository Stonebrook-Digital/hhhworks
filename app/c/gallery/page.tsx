import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects · Clima",
};

const rows = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    title: "Daylight & volume",
    sub: "Open plan · supply registers placed for stratification",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
    title: "Evening calm",
    sub: "Low-speed fan curves · minimal register noise",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    title: "Envelope-first",
    sub: "Load calc before tonnage—shade, windows, insulation in the model",
  },
];

export default function CGallery() {
  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[900px]">
        <h1 className="font-[family-name:var(--font-c-display)] text-5xl text-[#1a2e26] md:text-6xl">Projects</h1>
        <p className="mt-6 max-w-lg text-[#4a6358]">
          Editorial pacing—one story per row. Swap in your photography; captions sell the thinking behind the
          work.
        </p>
        <div className="mt-16 space-y-20">
          {rows.map((r) => (
            <article key={r.src}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image src={r.src} alt="" fill className="object-cover" sizes="900px" />
              </div>
              <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="font-[family-name:var(--font-c-display)] text-2xl text-[#1a2e26]">{r.title}</h2>
                <p className="text-sm text-[#6b8578]">{r.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
