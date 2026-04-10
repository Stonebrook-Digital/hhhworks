import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services · Comfort Pro",
};

const services = [
  {
    title: "Air conditioning",
    items: ["Repair & diagnostics", "New system installation", "Refrigerant & coil service", "Smart thermostat setup"],
  },
  {
    title: "Heating & heat pumps",
    items: ["Furnace repair", "Heat pump tune-ups", "Electric & gas systems", "Emergency heat restore"],
  },
  {
    title: "Indoor air & ducts",
    items: ["Duct cleaning", "Dryer vent cleaning", "Filter upgrades", "Airflow balancing"],
  },
  {
    title: "Protection plans",
    items: ["Seasonal maintenance", "Priority scheduling", "Discounts on repairs", "Equipment purchase perks"],
  },
];

export default function BServices() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <nav className="text-sm text-slate-500">
          <Link href="/b" className="hover:text-[#ea580c]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-slate-800">Services</span>
        </nav>
        <h1 className="mt-4 text-4xl font-extrabold text-[#0f2744] md:text-5xl">HVAC services</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Everything under one roof—residential focus with clear scopes and flat-rate options. Not sure what you
          need? Call and we’ll guide you.
        </p>

        <div className="mt-12 space-y-10">
          {services.map((block) => (
            <div key={block.title} className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="border-b border-slate-100 pb-3 text-2xl font-bold text-[#0f2744]">{block.title}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <i className="fa-solid fa-angle-right mt-1 text-[#ea580c]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-[#fff7ed] p-8 ring-1 ring-orange-100">
          <p className="text-lg font-bold text-[#9a3412]">Need help today?</p>
          <p className="mt-2 text-slate-700">
            Emergency service is available 24/7 for no-cool and no-heat situations across our service area.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+18136554501"
              className="inline-flex rounded-md bg-[#b91c1c] px-6 py-3 font-bold text-white hover:bg-[#991b1b]"
            >
              Emergency: (813) 655-4501
            </a>
            <Link href="/b/contact" className="inline-flex rounded-md border-2 border-[#0f2744] px-6 py-3 font-bold text-[#0f2744] hover:bg-white">
              Non-emergency request
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
