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

      <motion.div
        variants={fadeUp}
        className="mx-auto my-8 h-px w-10 bg-beige-300"
      />

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
