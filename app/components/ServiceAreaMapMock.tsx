"use client";

import { useId, useMemo, useState } from "react";
import { GoogleReviewBadge } from "@/app/components/GoogleReviewBadge";
import { WORK_LOCATIONS, type WorkLocation } from "@/lib/service-locations";

function sanitizeIdPrefix(id: string) {
  return id.replace(/[^a-zA-Z0-9_-]/g, "");
}

export function ServiceAreaMapMock() {
  const rawId = useId();
  const uid = sanitizeIdPrefix(rawId);
  const bayMaskId = `${uid}-bay-mask`;
  const waterGradId = `${uid}-water-grad`;
  const [selected, setSelected] = useState<WorkLocation | null>(WORK_LOCATIONS[0] ?? null);

  const markers = useMemo(() => WORK_LOCATIONS, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-stretch">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
          Locations
        </p>
        <p className="text-sm text-muted">
          Illustrative map—not to scale. Tap a pin or a chip to see work notes and a linked review.
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Job locations">
          {markers.map((loc) => {
            const active = selected?.id === loc.id;
            return (
              <li key={loc.id}>
                <button
                  type="button"
                  onClick={() => setSelected(loc)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm font-medium transition ${
                    active
                      ? "border-brand-red bg-brand-red/10 text-navy"
                      : "border-navy/15 bg-surface text-navy hover:border-brand-red/40"
                  }`}
                >
                  <i className="fa-solid fa-location-dot text-brand-red" aria-hidden />
                  {loc.name}
                </button>
              </li>
            );
          })}
        </ul>

        {selected ? (
          <div className="mt-2 rounded-2xl border border-navy/10 bg-page p-5 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-navy">{selected.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-navy">Our note: </span>
              {selected.workSummary}
            </p>
            <GoogleReviewBadge className="mt-4" starClassName="h-4 w-4" />
            <blockquote className="mt-3 border-l-4 border-brand-red/60 pl-4">
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
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:underline"
            >
              Read on Google
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden />
            </a>
          </div>
        ) : null}
      </div>

      <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-navy/10 bg-surface shadow-inner lg:min-h-[320px]">
        <svg
          viewBox="0 0 500 320"
          className="h-full w-full touch-manipulation select-none"
          role="img"
          aria-label="Illustrative Tampa Bay service map with job pins"
        >
          <defs>
            <linearGradient id={waterGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ec5de" />
              <stop offset="100%" stopColor="#6ba3c7" />
            </linearGradient>
            <mask id={bayMaskId}>
              <rect width="500" height="320" fill="white" />
              <ellipse cx="252" cy="188" rx="108" ry="72" fill="black" />
            </mask>
          </defs>

          <rect width="500" height="320" fill={`url(#${waterGradId})`} />
          <rect width="500" height="320" fill="#c8dcc0" mask={`url(#${bayMaskId})`} />
          <text
            x="250"
            y="28"
            textAnchor="middle"
            fill="rgba(26,37,64,0.45)"
            fontSize="11"
            fontWeight="600"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.18em"
          >
            TAMPA BAY (ILLUSTRATIVE)
          </text>

          {markers.map((loc) => {
            const active = selected?.id === loc.id;
            const { cx, cy } = loc.map;
            return (
              <g key={loc.id} transform={`translate(${cx}, ${cy})`}>
                <title>{loc.name}</title>
                <circle
                  r={active ? 22 : 18}
                  fill="none"
                  stroke={active ? "#d91f2d" : "rgba(26,37,64,0.2)"}
                  strokeWidth={active ? 3 : 2}
                  className="pointer-events-none"
                />
                <circle
                  r={12}
                  fill="#d91f2d"
                  stroke="#fff"
                  strokeWidth={2}
                  className="cursor-pointer transition hover:opacity-90"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(loc)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(loc);
                    }
                  }}
                />
                <circle r={4} cy={-6} fill="#d91f2d" className="pointer-events-none" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
