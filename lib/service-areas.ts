export type ServiceArea = {
  id: string;
  name: string;
  description: string;
};

export const SERVICE_AREAS_INTRO =
  "At Triple H Air Conditioning Inc., we're proud to provide top-quality HVAC services across a broad region. Our expertise in repairs, maintenance, installations, and replacements—along with our commitment to outstanding customer service—has made us a leading HVAC contractor in the area. Below are the specific communities we serve.";

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: "brandon",
    name: "Brandon, FL",
    description:
      "In the heart of Hillsborough County, Brandon enjoys our full suite of HVAC services. Residents and businesses rely on us for timely, efficient solutions that keep spaces comfortable year-round—from quick repairs to comprehensive system overhauls.",
  },
  {
    id: "tampa",
    name: "Tampa, FL",
    description:
      "Tampa's vibrant neighborhoods need reliable HVAC to combat Florida heat. We provide custom solutions for homes and commercial spaces across the city—from historic Ybor City to scenic waterfront areas.",
  },
  {
    id: "st-pete",
    name: "Saint Petersburg, FL",
    description:
      "Known for its culture and waterfront parks, Saint Petersburg gets efficient, reliable HVAC from Triple H. Our comprehensive services keep indoor comfort balanced through humid summers and mild winters.",
  },
  {
    id: "shore-acres",
    name: "Shore Acres, FL",
    description:
      "This picturesque residential community deserves discreet, effective HVAC service. From routine maintenance to emergency repairs, our technicians are ready to help you enjoy your home in comfort.",
  },
];

export const SERVICE_AREAS_CLOSING =
  "Triple H Air Conditioning Inc. is committed to serving these communities with dedication and expertise. If you're located in Brandon, Tampa, Saint Petersburg, or Shore Acres and need professional HVAC services, contact us—we're here to ensure your comfort regardless of the season.";

/** Comma-separated list for inline copy, e.g. "Brandon, FL, Tampa, FL, …" */
export const SERVICE_AREAS_LIST = SERVICE_AREAS.map((area) => area.name).join(", ");

/** Short city names joined for prose, e.g. "Brandon, Tampa, Saint Petersburg, and Shore Acres" */
export function formatServiceAreaNames(conjunction = "and"): string {
  const names = SERVICE_AREAS.map((area) => area.name.replace(", FL", ""));

  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return `${names[0]} ${conjunction} ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, ${conjunction} ${names[names.length - 1]}`;
}
