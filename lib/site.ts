export const PHONE = "(813) 655-4501";
export const PHONE_HREF = "tel:+18136554501";
export const EMAIL = "triplehair@gmail.com";
export const EMAIL_HREF = "mailto:triplehair@gmail.com";
export const ADDRESS = "Brandon, FL 83509";
export const COMPANY = "Triple H Air Conditioning Inc.";
export const TAGLINE = "Tampa Bay HVAC — flat-rate quotes, trusted since 2004.";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Triple+H+Air+Conditioning+Inc.+Florida/@27.6944883,-83.0484118,141970m/data=!3m1!1e3!4m6!3m5!1s0xa3b37ff0cd0d1147:0x125e662ac29a0a7c!8m2!3d27.732536!4d-82.3051805!16s%2Fg%2F11vqp5hqv6!5m1!1e1?hl=en-PH&entry=ttu";

export const ASSETS = {
  logo: "/staging/triple-h-logo.png",
  hero: [
    "/staging/hero-1.jpg",
    "/staging/hero-2.jpg",
    "/staging/hero-3.jpg",
  ],
  reviewBg: "/staging/review-bg.jpg",
} as const;

export const COUNTIES = [
  "Hillsborough",
  "Pinellas",
  "Polk",
  "Pasco",
  "Northern Manatee",
] as const;

export const SERVICES = [
  {
    title: "Repairs",
    description:
      "Fast diagnosis and dependable fixes on all major brands—often resolved in a single visit.",
    icon: "fa-screwdriver-wrench",
    href: "/services#repairs",
  },
  {
    title: "Replacement",
    description:
      "Right-sized systems, clean changeouts, and honest guidance on efficiency and cost.",
    icon: "fa-fan",
    href: "/services#replacement",
  },
  {
    title: "Maintenance",
    description:
      "Scheduled care that keeps your system efficient and helps prevent surprise breakdowns.",
    icon: "fa-clipboard-check",
    href: "/services#maintenance",
  },
  {
    title: "Tune-ups",
    description:
      "Season-ready inspections, cleaning, and adjustments for reliable comfort year-round.",
    icon: "fa-gauge-high",
    href: "/services#tune-ups",
  },
  {
    title: "Duct cleaning",
    description:
      "Better airflow, lower energy use, and healthier indoor air for your home or business.",
    icon: "fa-wind",
    href: "/services#duct-cleaning",
  },
  {
    title: "New construction",
    description:
      "HVAC planned and installed with your build timeline—from rough-in to final startup.",
    icon: "fa-helmet-safety",
    href: "/services#new-construction",
  },
] as const;

export const TRUST_ITEMS = [
  { label: "Flat-rate quotes", detail: "Approve the price before we start" },
  { label: "All major brands", detail: "Residential & commercial" },
  { label: "Tampa Bay", detail: "5-county service area" },
] as const;
