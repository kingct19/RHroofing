import React from "react";

/**
 * Official-style BBB Accredited Business (A+ Rating) SVG Logo Badge
 */
export function BbbLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 72"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BBB Accredited Business A+ Rating"
    >
      <rect
        x="1"
        y="1"
        width="218"
        height="70"
        rx="6"
        fill="#FFFFFF"
        stroke="#cfcfcf"
        strokeWidth="2"
      />
      {/* Left BBB Torch & Letters Block */}
      <rect x="6" y="6" width="62" height="60" rx="4" fill="#005A78" />
      {/* Torch flame icon */}
      <path
        d="M37 11C34 15 32 18 35 22C36 20 38 18 38 15C40 18 41 20 39 23C42 21 43 17 37 11Z"
        fill="#FFFFFF"
      />
      <rect x="33" y="24" width="8" height="3" rx="1" fill="#FFFFFF" />
      <text
        x="37"
        y="52"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="21"
        letterSpacing="0.5"
      >
        BBB
      </text>
      <text
        x="60"
        y="34"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontSize="7"
      >
        ®
      </text>

      {/* Right Accredited Business Text + A+ Pill */}
      <text
        x="78"
        y="27"
        fill="#005A78"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="13"
        letterSpacing="0.6"
      >
        ACCREDITED
      </text>
      <text
        x="78"
        y="43"
        fill="#005A78"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="13"
        letterSpacing="0.6"
      >
        BUSINESS
      </text>
      <text
        x="78"
        y="59"
        fill="#181617"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="700"
        fontSize="11"
      >
        Rating: A+
      </text>

      {/* A+ Seal */}
      <rect x="176" y="14" width="34" height="44" rx="5" fill="#FFFFFF" stroke="#cfcfcf" strokeWidth="1.5" />
      <text
        x="193"
        y="43"
        textAnchor="middle"
        fill="#005A78"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="18"
      >
        A+
      </text>
    </svg>
  );
}

/**
 * Official-style Multi-Color Google "G" + 5-Star Rating Badge
 */
export function GoogleReviewsBadge({
  className = "h-12 w-auto",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 230 72"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="4.6 Google rating"
    >
      <rect
        x="1"
        y="1"
        width="228"
        height="70"
        rx="6"
        fill="#FFFFFF"
        stroke="#cfcfcf"
        strokeWidth="2"
      />
      {/* Official 4-Color Google G Emblem */}
      <g transform="translate(16, 16)">
        <path
          d="M38.4 20.45c0-1.42-.13-2.78-.36-4.09H20v7.74h10.32c-.45 2.4-1.8 4.43-3.83 5.79v4.81h6.2c3.63-3.34 5.71-8.26 5.71-14.25z"
          fill="#4285F4"
        />
        <path
          d="M20 39.2c5.18 0 9.52-1.72 12.69-4.65l-6.2-4.81c-1.72 1.15-3.92 1.83-6.49 1.83-4.99 0-9.22-3.37-10.73-7.9H2.86v4.97C6.01 34.9 12.5 39.2 20 39.2z"
          fill="#34A853"
        />
        <path
          d="M9.27 23.67A11.53 11.53 0 0 1 8.67 20c0-1.28.22-2.52.6-3.67v-4.97H2.86A19.18 19.18 0 0 0 .8 20c0 3.1.74 6.03 2.06 8.64l6.41-4.97z"
          fill="#FBBC05"
        />
        <path
          d="M20 8.43c2.82 0 5.34.97 7.33 2.87l5.5-5.5C29.51 2.71 25.18.8 20 .8 12.5.8 6.01 5.1 2.86 11.36l6.41 4.97c1.51-4.53 5.74-7.9 10.73-7.9z"
          fill="#EA4335"
        />
      </g>

      {/* Google Wordmark + 5 Stars */}
      <text
        x="68"
        y="26"
        fill="#181617"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="14"
      >
        Google Reviews
      </text>

      {/* 5 Gold Stars */}
      <g transform="translate(68, 32)" fill="#FBBC05">
        <polygon points="7,0 9.1,4.3 13.8,5 10.4,8.3 11.2,13 7,10.8 2.8,13 3.6,8.3 0.2,5 4.9,4.3" />
        <polygon
          transform="translate(16, 0)"
          points="7,0 9.1,4.3 13.8,5 10.4,8.3 11.2,13 7,10.8 2.8,13 3.6,8.3 0.2,5 4.9,4.3"
        />
        <polygon
          transform="translate(32, 0)"
          points="7,0 9.1,4.3 13.8,5 10.4,8.3 11.2,13 7,10.8 2.8,13 3.6,8.3 0.2,5 4.9,4.3"
        />
        <polygon
          transform="translate(48, 0)"
          points="7,0 9.1,4.3 13.8,5 10.4,8.3 11.2,13 7,10.8 2.8,13 3.6,8.3 0.2,5 4.9,4.3"
        />
        <polygon
          transform="translate(64, 0)"
          points="7,0 9.1,4.3 13.8,5 10.4,8.3 11.2,13 7,10.8 2.8,13 3.6,8.3 0.2,5 4.9,4.3"
        />
      </g>
      <text
        x="150"
        y="43"
        fill="#181617"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="13"
      >
        4.6 ★
      </text>

      <text
        x="68"
        y="59"
        fill="#54595F"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="600"
        fontSize="10.5"
      >
        Verified Local East TX Rating
      </text>
    </svg>
  );
}

function GoldStars() {
  return (
    <span className="flex gap-0.5 text-[#f7c906]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 14 13" className="w-3 h-3" fill="currentColor">
          <polygon points="7,0 9.1,4.3 13.8,5 10.4,8.3 11.2,13 7,10.8 2.8,13 3.6,8.3 0.2,5 4.9,4.3" />
        </svg>
      ))}
    </span>
  );
}

function ReviewMark({
  icon,
  score,
  caption,
  stars = true,
}: {
  icon: React.ReactNode;
  score: string;
  caption: string;
  stars?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
      <div className="w-9 h-9 shrink-0 mt-1">{icon}</div>
      <div>
        <div className="text-[34px] font-bold leading-none tracking-tight">{score}</div>
        {stars ? (
          <div className="mt-1">
            <GoldStars />
          </div>
        ) : null}
        <div className="mt-1 text-[12px] leading-none text-white/90">{caption}</div>
      </div>
    </div>
  );
}

/** Compact hero marks: icon, score, stars, caption — stacked on the photo. */
export function HeroReviewStack() {
  return (
    <div className="flex flex-col gap-9">
      <ReviewMark
        icon={<GoogleGIcon className="w-9 h-9" />}
        score="4.6"
        caption="Google reviews"
      />
      <ReviewMark
        icon={
          <div className="w-9 h-9 rounded-full bg-[#005A78] text-white flex items-center justify-center text-[11px] font-extrabold">
            BBB
          </div>
        }
        score="A+"
        caption="Accredited"
      />
      <ReviewMark
        icon={
          <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-extrabold">
            95
          </div>
        }
        score="1995"
        caption="Gilmer, Texas"
        stars={false}
      />
    </div>
  );
}

/**
 * Inline Google "G" Icon for individual review cards
 */
export function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path
        d="M38.4 20.45c0-1.42-.13-2.78-.36-4.09H20v7.74h10.32c-.45 2.4-1.8 4.43-3.83 5.79v4.81h6.2c3.63-3.34 5.71-8.26 5.71-14.25z"
        fill="#4285F4"
      />
      <path
        d="M20 39.2c5.18 0 9.52-1.72 12.69-4.65l-6.2-4.81c-1.72 1.15-3.92 1.83-6.49 1.83-4.99 0-9.22-3.37-10.73-7.9H2.86v4.97C6.01 34.9 12.5 39.2 20 39.2z"
        fill="#34A853"
      />
      <path
        d="M9.27 23.67A11.53 11.53 0 0 1 8.67 20c0-1.28.22-2.52.6-3.67v-4.97H2.86A19.18 19.18 0 0 0 .8 20c0 3.1.74 6.03 2.06 8.64l6.41-4.97z"
        fill="#FBBC05"
      />
      <path
        d="M20 8.43c2.82 0 5.34.97 7.33 2.87l5.5-5.5C29.51 2.71 25.18.8 20 .8 12.5.8 6.01 5.1 2.86 11.36l6.41 4.97c1.51-4.53 5.74-7.9 10.73-7.9z"
        fill="#EA4335"
      />
    </svg>
  );
}
