import type { Metadata } from "next";
import { DM_Sans, Fraunces, Manrope, Plus_Jakarta_Sans, Syne } from "next/font/google";
import { DesignSwitcher } from "./components/DesignSwitcher";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Design B — dealer / franchise-style HVAC sites */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-b-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/** Design C — eco / European heat-pump minimal */
const fraunces = Fraunces({
  variable: "--font-c-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-c-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Triple H Air Conditioning | Tampa Bay HVAC",
    template: "%s | Triple H Air Conditioning",
  },
  description:
    "Premium HVAC for Tampa Bay—installs, repairs, tune-ups, duct cleaning, and 24/7 emergency service. Flat-rate pricing since 2004.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${plusJakarta.variable} ${fraunces.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full bg-neutral-50 font-[family-name:var(--font-dm)] text-neutral-900 antialiased">
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
