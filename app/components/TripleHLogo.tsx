import { useId } from "react";

const TRAIL_INDICES = [0, 1, 2, 3, 4, 5] as const;

type TripleHLogoProps = {
  variant?: "full" | "mark";
  className?: string;
  /** Accessible name; defaults to company name */
  "aria-label"?: string;
};

function sanitizeIdPrefix(id: string) {
  return id.replace(/[^a-zA-Z0-9_-]/g, "");
}

export function TripleHLogo({
  variant = "full",
  className,
  "aria-label": ariaLabel = "Triple H Air Conditioning, Inc.",
}: TripleHLogoProps) {
  const prefix = sanitizeIdPrefix(useId());
  const navyGradient = `${prefix}-navyGradient`;
  const redGradient = `${prefix}-redGradient`;
  const dropShadow = `${prefix}-dropShadow`;
  const glow = `${prefix}-glow`;

  const viewBox = variant === "full" ? "0 0 600 300" : "88 78 424 192";
  const logoMark = (
    <g transform="translate(300, 180)">
      <ellipse
        cx="0"
        cy="-5"
        rx="185"
        ry="75"
        fill="none"
        stroke="#d91f2d"
        strokeWidth="1"
        strokeDasharray="8 8"
        opacity="0.15"
      />

      <g>
        {TRAIL_INDICES.map((i) => (
          <circle
            key={`trail-back-${i}`}
            r={12 - i * 1.5}
            fill={`url(#${redGradient})`}
            opacity={0.7 - i * 0.1}
            filter={`url(#${glow})`}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M 185,-5 A 185,75 0 0,0 -185,-5 A 185,75 0 0,0 185,-5"
              begin={`${-i * 0.15}s`}
            />
          </circle>
        ))}
      </g>

      <g transform="translate(-102.5, 0) scale(0.75)" filter={`url(#${dropShadow})`}>
        <rect x="-18" y="-48" width="20" height="96" rx="10" fill="#1a2540" />
        <rect x="18" y="-48" width="20" height="96" rx="10" fill="#1a2540" />
        <rect x="-18" y="-10" width="56" height="20" rx="10" fill="#1a2540" />
      </g>

      <g filter={`url(#${dropShadow})`}>
        <rect x="-38" y="-58" width="24" height="116" rx="12" fill="#1a2540" />
        <rect x="14" y="-58" width="24" height="116" rx="12" fill="#1a2540" />
        <rect x="-38" y="-12" width="76" height="24" rx="12" fill="#1a2540" />
      </g>

      <g transform="translate(87.5, 0) scale(0.75)" filter={`url(#${dropShadow})`}>
        <rect x="-18" y="-48" width="20" height="96" rx="10" fill="#1a2540" />
        <rect x="18" y="-48" width="20" height="96" rx="10" fill="#1a2540" />
        <rect x="-18" y="-10" width="56" height="20" rx="10" fill="#1a2540" />
      </g>

      <g>
        {TRAIL_INDICES.map((i) => (
          <circle
            key={`trail-front-${i}`}
            r={12 - i * 1.5}
            fill={`url(#${redGradient})`}
            opacity={0.7 - i * 0.1}
            filter={`url(#${glow})`}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M 185,-5 A 185,75 0 0,0 -185,-5 A 185,75 0 0,0 185,-5"
              begin={`${-i * 0.15}s`}
            />
          </circle>
        ))}
      </g>
    </g>
  );

  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={navyGradient} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a3a5f" />
          <stop offset="50%" stopColor="#1a2540" />
          <stop offset="100%" stopColor="#121a2e" />
        </linearGradient>

        <linearGradient id={redGradient} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff3344" />
          <stop offset="50%" stopColor="#d91f2d" />
          <stop offset="100%" stopColor="#b81825" />
        </linearGradient>

        <filter id={dropShadow}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id={glow}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {variant === "full" ? (
        <>
          <text
            x="300"
            y="50"
            fill={`url(#${navyGradient})`}
            fontSize="32"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            letterSpacing="0.5"
          >
            Triple H Air Conditioning, Inc.
          </text>
          {logoMark}
          <g filter={`url(#${glow})`} opacity="0.7">
            <circle cx="480" cy="160" r="3" fill="#d91f2d" />
            <circle cx="500" cy="175" r="2" fill="#1a2540" />
            <circle cx="120" cy="160" r="3" fill="#d91f2d" />
            <circle cx="100" cy="175" r="2" fill="#1a2540" />
          </g>
        </>
      ) : (
        logoMark
      )}
    </svg>
  );
}
