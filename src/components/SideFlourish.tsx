"use client";

/**
 * Decorative botanical/geometric flourishes for left and right sides of sections.
 * Hidden on mobile, visible on md+ screens.
 */

/** Leaf branch — gentle curved stems with small leaves */
export function LeafBranch({ side, className = "" }: { side: "left" | "right"; className?: string }) {
  const flip = side === "right";
  return (
    <svg
      width="120"
      height="300"
      viewBox="0 0 120 300"
      fill="none"
      className={`pointer-events-none hidden md:block ${className}`}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
        animation: `${flip ? "sway-reverse" : "sway"} 8s ease-in-out infinite`,
        transformOrigin: "bottom center",
      }}
      aria-hidden="true"
    >
      {/* Main stem */}
      <path d="M60 300 Q55 220 58 160 Q60 100 55 40" stroke="#D4D4C8" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Leaves */}
      <path d="M58 240 Q30 230 25 210 Q40 215 58 230" fill="#D4D4C8" opacity="0.15" />
      <path d="M56 200 Q28 185 26 165 Q42 175 56 190" fill="#D4D4C8" opacity="0.12" />
      <path d="M57 160 Q32 148 30 128 Q44 138 57 150" fill="#D4D4C8" opacity="0.10" />
      <path d="M56 120 Q36 105 35 88 Q46 98 56 112" fill="#D4D4C8" opacity="0.08" />
      <path d="M55 80 Q40 65 42 50 Q48 60 55 72" fill="#D4D4C8" opacity="0.06" />
      {/* Small berries/dots */}
      <circle cx="25" cy="208" r="2" fill="#D4D4C8" opacity="0.12" />
      <circle cx="26" cy="163" r="1.5" fill="#D4D4C8" opacity="0.10" />
      <circle cx="30" cy="126" r="1.5" fill="#D4D4C8" opacity="0.08" />
    </svg>
  );
}

/** Corner dots — small cluster of dots for corners */
export function CornerDots({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const isRight = position.includes("right");
  const isBottom = position.includes("bottom");

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className="pointer-events-none hidden md:block"
      style={{
        position: "absolute",
        [isBottom ? "bottom" : "top"]: "2rem",
        [isRight ? "right" : "left"]: "2rem",
        animation: "fade-float 7s ease-in-out infinite",
      }}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="2" fill="#D4D4C8" opacity="0.15" />
      <circle cx="35" cy="12" r="1.5" fill="#D4D4C8" opacity="0.10" />
      <circle cx="14" cy="38" r="1.5" fill="#D4D4C8" opacity="0.12" />
      <circle cx="45" cy="28" r="2.5" fill="#D4D4C8" opacity="0.08" />
      <circle cx="28" cy="50" r="1" fill="#D4D4C8" opacity="0.10" />
      <circle cx="55" cy="15" r="1" fill="#D4D4C8" opacity="0.07" />
      <circle cx="10" cy="55" r="2" fill="#D4D4C8" opacity="0.06" />
    </svg>
  );
}

/** Curved vine — a simpler decorative arc for sides */
export function CurvedVine({ side, className = "" }: { side: "left" | "right"; className?: string }) {
  const flip = side === "right";
  return (
    <svg
      width="60"
      height="200"
      viewBox="0 0 60 200"
      fill="none"
      className={`pointer-events-none hidden md:block ${className}`}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <path
        d="M50 10 Q10 50 30 100 Q50 150 20 190"
        stroke="#D4D4C8"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
      <circle cx="50" cy="10" r="2" fill="#D4D4C8" opacity="0.12" />
      <circle cx="30" cy="100" r="2.5" fill="#D4D4C8" opacity="0.10" />
      <circle cx="20" cy="190" r="2" fill="#D4D4C8" opacity="0.12" />
    </svg>
  );
}

/** Green flower — botanical flower with petals, leaves, and stem */
export function GreenFlower({ side, className = "" }: { side: "left" | "right"; className?: string }) {
  const flip = side === "right";
  return (
    <svg
      width="140"
      height="400"
      viewBox="0 0 140 400"
      fill="none"
      className={`pointer-events-none hidden md:block ${className}`}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
        animation: `${flip ? "sway-reverse" : "sway"} 10s ease-in-out infinite`,
        transformOrigin: "bottom center",
      }}
      aria-hidden="true"
    >
      {/* Main stem */}
      <path d="M70 400 Q65 340 68 280 Q72 220 66 160 Q62 110 65 60" stroke="#8B9E7C" strokeWidth="1.2" fill="none" opacity="0.35" />

      {/* Secondary stem branch */}
      <path d="M68 200 Q45 170 35 140" stroke="#8B9E7C" strokeWidth="0.8" fill="none" opacity="0.25" />
      <path d="M66 140 Q42 118 30 95" stroke="#8B9E7C" strokeWidth="0.8" fill="none" opacity="0.20" />

      {/* Leaves along main stem */}
      <path d="M68 350 Q40 340 30 315 Q48 320 68 338" fill="#8B9E7C" opacity="0.18" />
      <path d="M70 310 Q95 298 105 275 Q90 285 70 300" fill="#8B9E7C" opacity="0.15" />
      <path d="M68 270 Q38 255 30 232 Q46 244 68 260" fill="#8B9E7C" opacity="0.14" />
      <path d="M70 235 Q92 220 100 198 Q86 210 70 225" fill="#8B9E7C" opacity="0.12" />
      <path d="M66 195 Q40 180 34 158 Q48 168 66 185" fill="#8B9E7C" opacity="0.11" />
      <path d="M66 155 Q44 140 40 120 Q50 130 66 145" fill="#8B9E7C" opacity="0.09" />

      {/* Top flower — 5 petals */}
      <ellipse cx="65" cy="48" rx="10" ry="14" transform="rotate(-15 65 48)" fill="#A8B89A" opacity="0.18" />
      <ellipse cx="58" cy="55" rx="10" ry="13" transform="rotate(-70 58 55)" fill="#A8B89A" opacity="0.15" />
      <ellipse cx="72" cy="55" rx="10" ry="13" transform="rotate(70 72 55)" fill="#A8B89A" opacity="0.15" />
      <ellipse cx="56" cy="42" rx="9" ry="12" transform="rotate(-45 56 42)" fill="#A8B89A" opacity="0.12" />
      <ellipse cx="74" cy="42" rx="9" ry="12" transform="rotate(45 74 42)" fill="#A8B89A" opacity="0.12" />
      {/* Flower center */}
      <circle cx="65" cy="50" r="4" fill="#7A8E6C" opacity="0.22" />
      <circle cx="65" cy="50" r="2" fill="#6B7D5E" opacity="0.28" />

      {/* Side flower on branch */}
      <ellipse cx="32" cy="132" rx="7" ry="10" transform="rotate(-20 32 132)" fill="#A8B89A" opacity="0.14" />
      <ellipse cx="27" cy="137" rx="7" ry="9" transform="rotate(-65 27 137)" fill="#A8B89A" opacity="0.12" />
      <ellipse cx="37" cy="137" rx="7" ry="9" transform="rotate(65 37 137)" fill="#A8B89A" opacity="0.12" />
      <circle cx="32" cy="135" r="3" fill="#7A8E6C" opacity="0.18" />
      <circle cx="32" cy="135" r="1.5" fill="#6B7D5E" opacity="0.22" />

      {/* Small bud on second branch */}
      <ellipse cx="28" cy="90" rx="5" ry="8" transform="rotate(-10 28 90)" fill="#A8B89A" opacity="0.10" />
      <circle cx="28" cy="88" r="2" fill="#7A8E6C" opacity="0.14" />

      {/* Tiny berries/buds along stem */}
      <circle cx="30" cy="310" r="2.5" fill="#8B9E7C" opacity="0.12" />
      <circle cx="100" cy="270" r="2" fill="#8B9E7C" opacity="0.10" />
      <circle cx="34" cy="228" r="2" fill="#8B9E7C" opacity="0.09" />
    </svg>
  );
}

/** Section divider — ornamental line between sections */
export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <span className="h-px w-12 bg-beige-200" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-3">
        <circle cx="10" cy="10" r="2" fill="#D4D4C8" opacity="0.3" />
        <circle cx="10" cy="10" r="5" stroke="#D4D4C8" strokeWidth="0.5" opacity="0.15" />
      </svg>
      <span className="h-px w-12 bg-beige-200" />
    </div>
  );
}
