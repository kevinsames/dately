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
