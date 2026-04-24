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
            className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
              isOpen
                ? "border-navy/12 bg-page"
                : "border-navy/6 bg-surface hover:border-navy/10"
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
                className={`text-sm font-medium leading-snug transition-colors md:text-[0.9375rem] ${
                  isOpen ? "text-navy" : "text-navy group-hover:text-navy-deep"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-navy-muted transition-[transform,colors] duration-200 ${
                  isOpen
                    ? "rotate-180 border-navy/12 bg-navy/[0.04] text-navy"
                    : "border-navy/8 bg-page group-hover:border-navy/12"
                }`}
                aria-hidden
              >
                <i className="fa-solid fa-chevron-down text-[10px]" />
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
                  <p className="max-w-2xl border-t border-navy/6 pt-3 text-sm leading-relaxed text-muted md:pt-3.5">
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
