/**
 * Google Maps via Share → “Embed a map” iframe (no Maps JavaScript API on this site).
 *
 * Set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL in `.env.local` to the full `src` URL from Google Maps.
 * Zoom tight on your shop or draw a service area there—fewer unrelated labels on screen.
 *
 * Note: Standard embeds still show Google’s base map labels (other businesses, etc.).
 * To hide POIs you need either a styled map (Maps JS API + billing) or a minimal custom base.
 */

const DEFAULT_EMBED =
  "https://www.google.com/maps?q=Tampa+Bay+Florida+USA&z=9&hl=en&output=embed";

export type GoogleMapsEmbedProps = {
  className?: string;
  /**
   * `hero` — aspect-ratio block for the home page.
   * `panel` — minimum-height block for the Areas grid column.
   */
  variant?: "hero" | "panel";
};

const WRAPPER: Record<NonNullable<GoogleMapsEmbedProps["variant"]>, string> = {
  hero: "relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-xl border border-navy/8 bg-navy/[0.03] shadow-[0_1px_3px_rgb(0_0_0_/0.06)] md:aspect-video md:max-w-none",
  panel:
    "relative min-h-[280px] w-full overflow-hidden rounded-xl border border-navy/8 bg-navy/[0.03] md:min-h-[320px]",
};

export function GoogleMapsEmbed({ className = "", variant = "hero" }: GoogleMapsEmbedProps) {
  const src = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim() || DEFAULT_EMBED;

  return (
    <div className={`${WRAPPER[variant]} ${className}`}>
      <iframe
        title="Service area on Google Maps"
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
