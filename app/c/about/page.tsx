import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Atelier",
};

export default function CAbout() {
  return (
    <main className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1100px] gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="font-[family-name:var(--font-c-serif)] text-5xl text-stone-900 md:text-6xl">Our practice</h1>
          <p className="mt-8 font-[family-name:var(--font-c-sans)] leading-[1.85] text-stone-600">
            Triple H began with a simple bias: treat every house like a commission—measure twice,
            explain once, leave no trace except even temperatures. Two decades in Tampa Bay refined
            that into a flat-rate ethic neighbors recommend without prompting.
          </p>
          <p className="mt-6 font-[family-name:var(--font-c-sans)] leading-[1.85] text-stone-600">
            Today we cross five counties with the same small-company manners and large-company
            logistics—stocked vans, factory training, memberships that reward loyalty.
          </p>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl ring-1 ring-stone-200">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </main>
  );
}
