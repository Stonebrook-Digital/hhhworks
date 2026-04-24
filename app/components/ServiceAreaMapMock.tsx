"use client";

import { useMemo, useState } from "react";
import { GoogleMapsEmbed } from "@/app/components/GoogleMapsEmbed";
import { GoogleReviewBadge } from "@/app/components/GoogleReviewBadge";
import { WORK_LOCATIONS, type WorkLocation } from "@/lib/service-locations";

export function ServiceAreaMapMock() {
  const [selected, setSelected] = useState<WorkLocation | null>(WORK_LOCATIONS[0] ?? null);

  const markers = useMemo(() => WORK_LOCATIONS, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-stretch">
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-muted">
          Locations
        </p>
        <p className="text-sm text-muted">
          Pick a city for crew notes and a review snippet. The map matches our homepage—same Google
          embed URL from your env.
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Job locations">
          {markers.map((loc) => {
            const active = selected?.id === loc.id;
            return (
              <li key={loc.id}>
                <button
                  type="button"
                  onClick={() => setSelected(loc)}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-medium transition ${
                    active
                      ? "border-navy/18 bg-navy/[0.06] text-navy"
                      : "border-navy/8 bg-surface text-navy hover:border-navy/14"
                  }`}
                >
                  <i className="fa-solid fa-location-dot text-navy-muted" aria-hidden />
                  {loc.name}
                </button>
              </li>
            );
          })}
        </ul>

        {selected ? (
          <div className="mt-2 rounded-xl border border-navy/6 bg-page p-5">
            <h3 className="font-display text-lg font-semibold text-navy">{selected.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-navy">Our note: </span>
              {selected.workSummary}
            </p>
            <GoogleReviewBadge className="mt-4" starClassName="h-4 w-4" />
            <blockquote className="mt-3 border-l-2 border-navy/12 pl-4">
              <p className="text-sm italic leading-relaxed text-navy">&ldquo;{selected.reviewQuote}&rdquo;</p>
              <footer className="mt-2 text-xs text-muted">
                <cite className="not-italic font-semibold text-navy">{selected.reviewAuthor}</cite>
                {selected.reviewRole ? (
                  <span className="block text-muted">{selected.reviewRole}</span>
                ) : null}
              </footer>
            </blockquote>
            <a
              href={selected.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy underline decoration-navy/15 underline-offset-4 hover:decoration-navy/35"
            >
              Read on Google
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden />
            </a>
          </div>
        ) : null}
      </div>

      <GoogleMapsEmbed variant="panel" />
    </div>
  );
}
