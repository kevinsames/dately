"use client";

import { motion } from "framer-motion";
import { EventConfig } from "@/types/event";
import { formatDate, formatTime } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

interface EventDetailsProps {
  config: EventConfig;
}

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

export default function EventDetails({ config }: EventDetailsProps) {
  const { t } = useTranslation();

  const details = [
    { label: t.date, value: formatDate(config.date) },
    { label: t.time, value: formatTime(config.date) },
    { label: t.venue, value: config.location.venue },
    { label: t.location, value: config.location.address },
    ...(config.dresscode ? [{ label: t.dressCode, value: config.dresscode }] : []),
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
          {t.theDetails}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-lg font-[var(--font-inter)] text-[17px] leading-relaxed text-warm-gray"
        >
          {config.message}
        </motion.p>

        <motion.div
          variants={stagger}
          className="mt-16 grid gap-4 sm:grid-cols-2"
        >
          {details.map((detail) => (
            <motion.div
              key={detail.label}
              variants={fadeUp}
              className="rounded-2xl bg-beige-50 p-6 text-left"
            >
              <p className="font-[var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.1em] text-warm-gray">
                {detail.label}
              </p>
              <p className="mt-2 font-[var(--font-inter)] text-[17px] text-warm-black">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {config.features.map && config.location.mapsUrl && (
          <motion.div variants={fadeUp} className="mt-10">
            <a
              href={config.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-[var(--font-inter)] text-[15px] font-medium text-warm-gray transition-colors hover:text-warm-black"
            >
              {t.viewOnMaps}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
