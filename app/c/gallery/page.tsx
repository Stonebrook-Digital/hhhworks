import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery · Atelier",
};

const imgs = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
];

export default function CGallery() {
  return (
    <main className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="font-[family-name:var(--font-c-serif)] text-5xl text-stone-900">Selected work</h1>
        <p className="mt-4 max-w-lg font-[family-name:var(--font-c-sans)] text-stone-600">
          Placeholder frames—drop in your own finishes, equipment, and curb appeal.
        </p>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imgs.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md ring-1 ring-stone-200"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="(min-width:1024px) 33vw,50vw" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
