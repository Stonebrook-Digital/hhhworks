import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Comfort Pro",
};

export default function BContact() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-[#0f2744] md:text-5xl">Contact us</h1>
          <p className="mt-4 text-lg text-slate-600">
            Schedule service, ask about financing, or request a free estimate—our team routes messages fast.
          </p>
          <div className="mt-8 space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</p>
              <a href="tel:+18136554501" className="mt-1 block text-2xl font-extrabold text-[#0f2744] hover:text-[#ea580c]">
                (813) 655-4501
              </a>
              <p className="mt-2 text-sm text-slate-600">Open 24 hours for emergencies</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</p>
              <a href="mailto:info@hhhworks.com" className="mt-1 font-medium text-[#ea580c] hover:underline">
                info@hhhworks.com
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Office hours</p>
              <p className="mt-1 text-sm text-slate-700">Mon–Sat 7am–7pm · Emergency line always on</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3">
          <h2 className="text-xl font-bold text-[#0f2744]">Request an appointment</h2>
          <p className="mt-2 text-sm text-slate-600">Fields marked are required.</p>
          <div className="mt-6">
            <ContactForm variant="dealer" />
          </div>
        </div>
      </div>
    </main>
  );
}
