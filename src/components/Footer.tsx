"use client";

import { motion } from "framer-motion";
import { EventConfig } from "@/types/event";
import { useTranslation } from "@/lib/i18n";

interface FooterProps {
  config: EventConfig;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Footer({ config }: FooterProps) {
  const { t } = useTranslation();

  return (
    <motion.footer
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-beige-50 px-6 py-24 text-center md:py-32"
    >
      <motion.p
        variants={fadeUp}
        className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.5rem)] font-light text-warm-black"
      >
        {config.title}
      </motion.p>

      <motion.blockquote
        variants={fadeUp}
        className="mx-auto mt-10 max-w-md font-[var(--font-inter)] text-[15px] leading-relaxed text-warm-gray italic"
      >
        &ldquo;{t.bibleVerse}&rdquo;
      </motion.blockquote>
      <motion.p
        variants={fadeUp}
        className="mt-3 font-[var(--font-inter)] text-[13px] tracking-wide text-beige-400"
      >
        — {t.bibleVerseRef}
      </motion.p>

      {/* Heart & infinity ornament */}
      <motion.div
        variants={fadeUp}
        className="mx-auto my-8 flex items-center justify-center gap-3"
        aria-hidden="true"
      >
        <span className="h-px w-6 bg-beige-300" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4D4C8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
        <span className="h-px w-6 bg-beige-300" />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="font-[var(--font-inter)] text-[15px] text-warm-gray"
      >
        {t.footerMessage}
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-12 font-[var(--font-inter)] text-[11px] italic tracking-wide text-beige-300"
      >
        Soli Deo Gloria
      </motion.p>
    </motion.footer>
  );
}
