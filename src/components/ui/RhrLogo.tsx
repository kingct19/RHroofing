import React from "react";

interface RhrLogoProps {
  variant?: "light-bg" | "dark-bg";
  showText?: boolean;
  className?: string;
}

/**
 * Renders the authentic Raymond Hardin Roofing (RHR) double-gable + chimney + mirrored ЯHR monogram logo.
 * On light backgrounds, uses the exact RHR Navy Blue (#0e0e0e) or uploaded image;
 * on dark backgrounds, renders a crisp white/blue vector lockup.
 */
export function RhrLogo({
  variant = "light-bg",
  showText = true,
  className = "",
}: RhrLogoProps) {
  const strokeColor = variant === "light-bg" ? "#0e0e0e" : "#FFFFFF";
  const subtextColor =
    variant === "light-bg" ? "text-[#0e0e0e]" : "text-[#9aafdf]";
  const titleColor = variant === "light-bg" ? "text-[#181617]" : "text-white";

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {variant === "light-bg" ? (
        <img
          src="/images/rhr-logo.jpg"
          alt="Raymond Hardin Roofing RHR Logo"
          className="h-12 sm:h-14 w-auto object-contain shrink-0"
        />
      ) : (
        <svg
          viewBox="0 0 180 110"
          className="h-12 sm:h-14 w-auto shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Raymond Hardin Roofing RHR Monogram"
        >
          {/* Chimney on left slope */}
          <path
            d="M34 58V34H48V45"
            stroke={strokeColor}
            strokeWidth="7"
            strokeLinecap="square"
          />
          <line
            x1="31"
            y1="32"
            x2="51"
            y2="32"
            stroke={strokeColor}
            strokeWidth="5"
          />
          {/* Main left roof peak */}
          <path
            d="M8 82L90 14L154 67"
            stroke={strokeColor}
            strokeWidth="10"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          {/* Secondary right roof peak */}
          <path
            d="M115 30L138 12L174 44"
            stroke={strokeColor}
            strokeWidth="9"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          {/* Interlocking mirrored ЯHR Monogram */}
          <text
            x="90"
            y="88"
            textAnchor="middle"
            fill={strokeColor}
            fontFamily="Montserrat, sans-serif"
            fontWeight="800"
            fontSize="34"
            letterSpacing="-2"
          >
            ЯHR
          </text>
        </svg>
      )}

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-heading text-lg sm:text-xl font-extrabold uppercase tracking-tight leading-none ${titleColor}`}
          >
            Raymond Hardin
          </span>
          <span
            className={`font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mt-1 ${subtextColor}`}
          >
            Roofing • Est. 1995
          </span>
        </div>
      )}
    </div>
  );
}
