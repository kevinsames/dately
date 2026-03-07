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

export default function Accommodation() {
  const { t } = useTranslation();

  const options = [
    { key: "1", name: t.accommodationOption1Name, detail: t.accommodationOption1Detail },
    { key: "2", name: t.accommodationOption2Name, detail: t.accommodationOption2Detail },
    { key: "3", name: t.accommodationOption3Name, detail: t.accommodationOption3Detail },
  ];

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          variants={fadeUp}
          className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-[-0.01em] text-warm-black"
        >
          {t.accommodationHeading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-lg font-[var(--font-inter)] text-[17px] leading-relaxed text-warm-gray"
        >
          {t.accommodationBody}
        </motion.p>

        <motion.div variants={stagger} className="mt-12 grid gap-4">
          {options.map((option) => (
            <motion.div
              key={option.key}
              variants={fadeUp}
              className="rounded-2xl bg-beige-50 px-6 py-5 text-left"
            >
              <p className="font-[var(--font-inter)] text-[17px] font-medium text-warm-black">
                {option.name}
              </p>
              <p className="mt-1 font-[var(--font-inter)] text-[14px] text-warm-gray">
                {option.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
