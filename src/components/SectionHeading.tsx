"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <>
      <motion.div
        variants={fadeUp}
        className="mb-6 flex items-center justify-center gap-3"
        aria-hidden="true"
      >
        <span className="h-px w-8 bg-beige-300" />
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="4" y="0" width="5.66" height="5.66" rx="1" transform="rotate(45 4 0)" fill="#D4D4C8" />
        </svg>
        <span className="h-px w-8 bg-beige-300" />
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-[-0.01em] text-warm-black"
      >
        {children}
      </motion.h2>
    </>
  );
}
