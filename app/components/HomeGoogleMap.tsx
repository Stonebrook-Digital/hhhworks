/**
 * Google Maps via official embed iframe (no Maps JavaScript API on your site).
 *
 * For the most reliable embed, open Google Maps → Share → Embed a map → copy the
 * entire `src="..."` URL and set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL in `.env.local`.
 *
 * Fallback uses a simple regional embed pattern (no API key).
 */

const DEFAULT_EMBED =
  "https://www.google.com/maps?q=Tampa+Bay+Florida+USA&z=9&hl=en&output=embed";

export function HomeGoogleMap() {
  const src = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim() || DEFAULT_EMBED;

  return (
    <div className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl border border-navy/10 bg-navy/5 shadow-lg md:aspect-video md:max-w-none">
      <iframe
        title="Tampa Bay service area on Google Maps"
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
