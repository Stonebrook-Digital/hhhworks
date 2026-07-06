export const PHONE = "(813) 655-4501";
export const PHONE_HREF = "tel:+18136554501";
export const EMAIL = "triplehair@gmail.com";
export const EMAIL_HREF = "mailto:triplehair@gmail.com";
export const ADDRESS = "Brandon, FL 83509";
export const COMPANY = "Triple H Air Conditioning Inc.";
export const TAGLINE = "For expert HVAC services, trust Triple H Air Conditioning Inc.";
export const HOURS_WEEKDAY = "Mon - Sat: 7:00 AM - 7:00 PM";
export const HOURS_SUNDAY = "Sun: Closed";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Triple+H+Air+Conditioning+Inc.+Florida/@27.6944883,-83.0484118,141970m/data=!3m1!1e3!4m6!3m5!1s0xa3b37ff0cd0d1147:0x125e662ac29a0a7c!8m2!3d27.732536!4d-82.3051805!16s%2Fg%2F11vqp5hqv6!5m1!1e1?hl=en-PH&entry=ttu";

export const ASSETS = {
  /** Header — HHH mark (transparent export) */
  logo: "/triple-h-logo.png",
  /** Footer and welcome intro — full mark with subtext */
  logoWithSubtitle: "/triple-h-logo-with-subtitle.png",
  logoMark: "/triple-h-logo.png",
  hero: [
    "/staging/hero-1.jpg",
    "/staging/hero-2.jpg",
    "/staging/hero-3.jpg",
  ],
  reviewBg: "/staging/review-bg.jpg",
} as const;

export const SERVICES = [
  {
    id: "hvac-repairs",
    title: "HVAC repairs",
    description:
      "When your heating or cooling system breaks down, our skilled technicians provide fast, dependable repairs to restore comfort.",
    icon: "fa-screwdriver-wrench",
    iconSrc: "/hvac-repairs-512.png",
    href: "/services/hvac-repairs",
  },
  {
    id: "hvac-replacement",
    title: "HVAC replacement",
    description:
      "Our team helps you choose the best system for your needs, ensuring improved comfort and lower utility costs.",
    icon: "fa-fan",
    iconSrc: "/living-room-512.png",
    href: "/services/hvac-replacement",
  },
  {
    id: "hvac-maintenance",
    title: "HVAC maintenance",
    description:
      "Our comprehensive maintenance plans keep your system running smoothly and efficiently year-round.",
    icon: "fa-clipboard-check",
    iconSrc: "/maintenance-512.png",
    href: "/services/hvac-maintenance",
  },
  {
    id: "hvac-tune-ups",
    title: "HVAC tune ups",
    description:
      "We inspect, clean, and adjust your system to keep it running reliably through every season.",
    icon: "fa-gauge-high",
    iconSrc: "/gauge-512.png",
    href: "/services/hvac-tune-ups",
  },
  {
    id: "duct-cleaning",
    title: "Duct cleaning",
    description:
      "Clean ducts help enhance airflow, reduce energy consumption, and promote a healthier living environment.",
    icon: "fa-wind",
    iconSrc: "/nature-512.png",
    href: "/services/duct-cleaning",
  },
  {
    id: "construction-installations",
    title: "Construction installations",
    description:
      "We provide expert HVAC installations for new construction projects, ensuring optimal climate control from the start.",
    icon: "fa-helmet-safety",
    iconSrc: "/cassette-512.png",
    href: "/services/construction-installations",
  },
] as const satisfies readonly {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconSrc?: string;
  href: string;
}[];

export type Service = (typeof SERVICES)[number];
