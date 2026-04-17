/**
 * Static content only — no Google APIs. Replace `googleReviewUrl` with real
 * links to individual Google reviews or your Business Profile when available.
 */

export type WorkLocation = {
  id: string;
  /** Short label for chips and map marker title */
  name: string;
  /** Position in the illustrative SVG map (viewBox 0 0 500 320) */
  map: { cx: number; cy: number };
  /** Company note on work completed at this area */
  workSummary: string;
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
    map: { cx: 332, cy: 168 },
    workSummary:
      "Full system changeout and duct balancing—flat-rate quote held through completion.",
    reviewQuote:
      "They were constant with the price from what was quoted and did a good job. I would recommend.",
    reviewAuthor: "Ada",
    reviewRole: "Commercial customer",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+Brandon+FL+reviews",
  },
  {
    id: "tampa",
    name: "Tampa, FL",
    map: { cx: 268, cy: 152 },
    workSummary:
      "Historic home retrofit: right-sized condenser, line set flush, and summer tune-up.",
    reviewQuote:
      "Clear options, no surprise add-ons. House has never cooled this evenly.",
    reviewAuthor: "Jordan M.",
    reviewRole: "Homeowner",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+Tampa+FL+reviews",
  },
  {
    id: "st-pete",
    name: "St. Petersburg, FL",
    map: { cx: 198, cy: 208 },
    workSummary: "Coastal humidity package—UV treatment add-on after salt-air coil service.",
    reviewQuote: "Professional crew, respected our schedule, and left the workspace spotless.",
    reviewAuthor: "Chris P.",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+St+Petersburg+FL+reviews",
  },
  {
    id: "shore-acres",
    name: "Shore Acres, FL",
    map: { cx: 218, cy: 188 },
    workSummary: "Emergency after-hours repair—capacitor and contactor same visit.",
    reviewQuote: "Showed up fast, explained everything, fair price for the late call.",
    reviewAuthor: "Sam R.",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+St+Petersburg+FL+reviews",
  },
  {
    id: "clearwater",
    name: "Clearwater, FL",
    map: { cx: 158, cy: 172 },
    workSummary: "Maintenance agreement visit: airflow test, refrigerant check, filter plan.",
    reviewQuote: "We have them on a maintenance plan now—reminders are helpful and techs are polite.",
    reviewAuthor: "Pat L.",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+Clearwater+FL+reviews",
  },
  {
    id: "wesley-chapel",
    name: "Wesley Chapel, FL",
    map: { cx: 312, cy: 118 },
    workSummary: "New construction rough-in coordination with builder timeline.",
    reviewQuote: "Coordinated with our builder without us playing middleman—huge relief.",
    reviewAuthor: "Taylor K.",
    googleReviewUrl: "https://www.google.com/search?q=Triple+H+Air+Conditioning+Wesley+Chapel+FL+reviews",
  },
];
