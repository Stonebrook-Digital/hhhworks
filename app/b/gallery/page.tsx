import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery · Nocturne",
};

const shots = [
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80",
];

export default function BGallery() {
  return (
    <main className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="font-[family-name:var(--font-b-sans)] text-4xl text-white md:text-5xl">Field frames</h1>
        <p className="mt-4 font-[family-name:var(--font-b-mono)] text-xs text-zinc-500">
          Swap for your install photos—this grid is the rhythm.
        </p>
        <div className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {shots.map((src) => (
            <div key={src} className="mb-3 break-inside-avoid overflow-hidden rounded-xl ring-1 ring-white/10">
              <div className="relative aspect-[4/3]">
                <Image src={src} alt="" fill className="object-cover" sizes="(min-width:1024px) 33vw,50vw" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
