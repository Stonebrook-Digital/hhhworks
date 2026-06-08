/**
 * Customer reviews tied to service areas. Replace `googleReviewUrl` with real
 * links to individual Google reviews when available.
 */

import { SERVICE_AREAS } from "@/lib/service-areas";

export type WorkLocation = {
  id: string;
  /** Short label — matches {@link SERVICE_AREAS} */
  name: string;
  /** Review text shown on-site (copied manually from Google) */
  reviewQuote: string;
  reviewAuthor: string;
  reviewRole?: string;
  /** Link out to Google (or your preferred public review URL) */
  googleReviewUrl: string;
};

export const WORK_LOCATIONS: WorkLocation[] = [
  {
    id: "brandon",
    name: "Brandon, FL",
    reviewQuote:
      "They were constant with the price from what was quoted and did a good job. I would recommend.",
    reviewAuthor: "Ada",
    reviewRole: "Commercial customer",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+Brandon+FL+reviews",
  },
  {
    id: "tampa",
    name: "Tampa, FL",
    reviewQuote:
      "Clear options, no surprise add-ons. House has never cooled this evenly.",
    reviewAuthor: "Jordan M.",
    reviewRole: "Homeowner",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+Tampa+FL+reviews",
  },
];

/** Reviews for areas we actively list on the areas page */
export const SERVICE_AREA_REVIEWS = WORK_LOCATIONS.filter((loc) =>
  SERVICE_AREAS.some((area) => area.id === loc.id),
);
