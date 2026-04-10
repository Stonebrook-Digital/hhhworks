import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Connect · Clima",
};

export default function CContact() {
  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[480px]">
        <h1 className="font-[family-name:var(--font-c-display)] text-5xl text-[#1a2e26] md:text-6xl">Connect</h1>
        <p className="mt-6 text-[#4a6358]">
          For timing-sensitive issues, call{" "}
          <a className="font-semibold text-[#2d4a3e] underline-offset-2 hover:underline" href="tel:+18136554501">
            (813) 655-4501
          </a>
          . Otherwise, leave a note—we reply within one business day.
        </p>
        <div className="mt-12 rounded-2xl border border-[#dfe8e3] bg-white p-8 shadow-sm">
          <ContactForm variant="clima" />
        </div>
      </div>
    </main>
  );
}
