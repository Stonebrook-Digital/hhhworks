import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Atelier",
};

export default function CContact() {
  return (
    <main className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[560px]">
        <h1 className="font-[family-name:var(--font-c-serif)] text-5xl text-stone-900">Write to us</h1>
        <p className="mt-6 font-[family-name:var(--font-c-sans)] text-stone-600">
          Or call <a className="text-[#c45c3a] underline-offset-2 hover:underline" href="tel:+18136554501">(813) 655-4501</a>
          —we answer when it counts.
        </p>
        <div className="mt-12 rounded-sm border border-stone-200 bg-white p-8 shadow-sm">
          <ContactForm variant="terra" />
        </div>
      </div>
    </main>
  );
}
