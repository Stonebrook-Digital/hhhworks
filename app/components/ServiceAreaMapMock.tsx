"use client";

import { useMemo, useState } from "react";
import { SERVICE_AREAS, type ServiceArea } from "@/lib/service-areas";

export function ServiceAreaMapMock() {
  const [selected, setSelected] = useState<ServiceArea | null>(SERVICE_AREAS[0] ?? null);

  const markers = useMemo(() => SERVICE_AREAS, []);

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {markers.map((area) => (
          <li key={area.id}>
            <button
              type="button"
              onClick={() => setSelected(area)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selected?.id === area.id
                  ? "border-brand/30 bg-brand/8 text-brand"
                  : "border-navy/8 bg-surface text-navy hover:border-navy/12"
              }`}
            >
              {area.name}
            </button>
          </li>
        ))}
      </ul>
      {selected ? (
        <p className="mt-4 text-sm leading-relaxed text-navy-muted">{selected.description}</p>
      ) : null}
    </div>
  );
}
