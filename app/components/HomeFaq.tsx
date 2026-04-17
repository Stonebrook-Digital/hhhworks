"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Do you provide flat-rate pricing?",
    a: "Yes. We share pricing before work starts so there are no surprises.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Tampa Bay, including Hillsborough, Pinellas, and nearby areas.",
  },
  {
    q: "Can you service all major HVAC brands?",
    a: "Yes, our technicians work across most major residential and commercial systems.",
  },
] as const;

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-5 space-y-2">
      {ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `home-faq-panel-${index}`;

        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-300 ease-out ${
              isOpen
                ? "border-brand-red/35 bg-white shadow-md shadow-black/[0.06] ring-1 ring-brand-red/10"
                : "border-navy/10 bg-surface shadow-sm hover:border-navy/20 hover:shadow-md"
            }`}
          >
            <button
              type="button"
              id={`home-faq-trigger-${index}`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
              className="group flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors md:px-5 md:py-4"
            >
              <span
                className={`text-sm font-semibold leading-snug transition-colors duration-200 md:text-[0.9375rem] ${
                  isOpen ? "text-navy" : "text-navy group-hover:text-navy-deep"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isOpen
                    ? "rotate-180 border-brand-red/25 bg-brand-red/10 text-brand-red"
                    : "border-navy/10 bg-white text-brand-red group-hover:border-brand-red/20 group-hover:bg-brand-red/[0.06]"
                }`}
                aria-hidden
              >
                <i className="fa-solid fa-chevron-down text-[11px]" />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={`home-faq-trigger-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={`px-4 pb-4 transition-[opacity,transform] duration-200 ease-out md:px-5 md:pb-5 ${
                    isOpen
                      ? "translate-y-0 opacity-100 delay-75"
                      : "-translate-y-1 opacity-0 delay-0"
                  }`}
                >
                  <p className="max-w-2xl border-t border-navy/8 pt-3 text-sm leading-relaxed text-muted md:pt-3.5">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
