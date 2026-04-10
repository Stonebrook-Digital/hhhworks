import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio · Clima",
};

export default function CAbout() {
  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[640px]">
        <h1 className="font-[family-name:var(--font-c-display)] text-5xl text-[#1a2e26] md:text-6xl">Studio</h1>
        <p className="mt-8 text-lg leading-[1.85] text-[#4a6358]">
          Triple H started as a reaction to noisy installs and vague invoices. We wanted a practice where
          homeowners could follow the logic—why this size, why this path for the lines, what happens at each
          season.
        </p>
        <p className="mt-6 text-lg leading-[1.85] text-[#4a6358]">
          Two decades in Tampa Bay refined that into a small-team mindset: same standards whether we&apos;re on a
          ranch in Pasco or a townhouse in St. Pete.
        </p>
        <blockquote className="mt-14 border-l-4 border-[#3f6b4f] pl-8">
          <p className="font-[family-name:var(--font-c-display)] text-2xl italic leading-snug text-[#1a2e26]">
            We sell comfort and clarity—not fear of a broken compressor.
          </p>
        </blockquote>
      </div>
    </main>
  );
}
