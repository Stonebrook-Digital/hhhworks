import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us · Comfort Pro",
};

export default function BAbout() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="text-4xl font-extrabold text-[#0f2744] md:text-5xl">About Triple H Air</h1>
        <p className="mt-4 text-lg text-slate-600">Local roots. National-level standards.</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 text-slate-700">
            <p className="leading-relaxed">
              Since <strong className="text-[#0f2744]">2004</strong>, Triple H has grown by doing what homeowners
              ask for most: show up on time, explain the work in plain English, and charge a fair price you approve
              before we start.
            </p>
            <p className="leading-relaxed">
              Our technicians train continuously on new equipment and diagnostics—we service{" "}
              <strong>all major brands</strong> and stand behind installs with solid warranties.
            </p>
            <p className="leading-relaxed">
              From Tampa to Pasco to Manatee, we’re proud to be the team neighbors recommend when comfort can’t
              wait.
            </p>
            <Link href="/b/gallery" className="inline-flex font-bold text-[#ea580c] hover:underline">
              See our work →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg ring-1 ring-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { n: "20+", l: "Years in Tampa Bay" },
            { n: "5★", l: "Google-rated service" },
            { n: "24/7", l: "Emergency response" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-[#ea580c]">{s.n}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
