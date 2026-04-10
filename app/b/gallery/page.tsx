import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work · Comfort Pro",
};

const jobs = [
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80", cap: "Condenser install · clean pad & line hide" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80", cap: "Whole-home comfort · new construction" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80", cap: "Living space · zoning & airflow" },
  { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80", cap: "Smart thermostat · Wi-Fi setup" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80", cap: "Duct cleaning · before/after" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80", cap: "Curb appeal · quiet outdoor unit" },
];

export default function BGallery() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="text-4xl font-extrabold text-[#0f2744] md:text-5xl">Our work</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Sample project photography—replace with your real installs, duct jobs, and happy curb shots. This layout
          mirrors how top contractor sites showcase proof.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j) => (
            <figure
              key={j.src}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image src={j.src} alt="" fill className="object-cover" sizes="(min-width:1024px) 33vw,50vw" />
              </div>
              <figcaption className="border-t border-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                {j.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
