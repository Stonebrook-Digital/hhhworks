import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Nocturne",
};

export default function BContact() {
  return (
    <main className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1000px] gap-16 lg:grid-cols-2">
        <div>
          <h1 className="font-[family-name:var(--font-b-sans)] text-4xl text-white md:text-5xl">Open line</h1>
          <p className="mt-6 font-[family-name:var(--font-b-mono)] text-sm text-zinc-500">
            Voice beats forms for emergencies. For everything else—drop a packet below.
          </p>
          <a
            href="tel:+18136554501"
            className="mt-10 block font-[family-name:var(--font-b-mono)] text-2xl font-bold text-cyan-300 hover:text-cyan-200"
          >
            (813) 655-4501
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <ContactForm variant="dark" />
        </div>
      </div>
    </main>
  );
}
