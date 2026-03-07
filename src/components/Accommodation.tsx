"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

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
    { key: "1", name: t.accommodationOption1Name, detail: t.accommodationOption1Detail, url: t.accommodationOption1Url },
    { key: "2", name: t.accommodationOption2Name, detail: t.accommodationOption2Detail, url: t.accommodationOption2Url },
    { key: "3", name: t.accommodationOption3Name, detail: t.accommodationOption3Detail, url: t.accommodationOption3Url },
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
        <SectionHeading>{t.accommodationHeading}</SectionHeading>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-lg font-[var(--font-inter)] text-[17px] leading-relaxed text-warm-gray"
        >
          {t.accommodationBody}
        </motion.p>

        <motion.div variants={stagger} className="mt-12 grid gap-4">
          {options.map((option) => (
            <motion.a
              key={option.key}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group flex items-center justify-between rounded-2xl bg-beige-50 px-6 py-5 text-left transition-colors hover:bg-beige-100"
            >
              <div className="flex items-start gap-3">
                {/* Map pin icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0 text-beige-400"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-[var(--font-inter)] text-[17px] font-medium text-warm-black">
                    {option.name}
                  </p>
                  <p className="mt-1 font-[var(--font-inter)] text-[14px] text-warm-gray">
                    {option.detail}
                  </p>
                </div>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-beige-400 transition-colors group-hover:text-warm-gray"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
