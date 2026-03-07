"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Wishlist() {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-beige-100 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-xl text-center">
        <motion.h2
          variants={fadeUp}
          className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-[-0.01em] text-warm-black"
        >
          {t.wishlistHeading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-lg font-[var(--font-inter)] text-[17px] leading-relaxed text-warm-gray"
        >
          {t.wishlistBody}
        </motion.p>
      </div>
    </motion.section>
  );
}
