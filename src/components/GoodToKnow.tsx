"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { eventConfig } from "@/config/event.config";
import SectionHeading from "./SectionHeading";
import { CornerDots, GreenFlower } from "./SideFlourish";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const FINGERFOOD_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfcfLv1MOzM5RMFaJKEs4NJbOrZpyprbdJIfGS94fACNdQjmA/viewform?usp=header";

export default function GoodToKnow() {
  const { t } = useTranslation();

  const infoItems = [
    {
      key: "parking",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 17V7h5a3 3 0 010 6H9" />
        </svg>
      ),
      heading: t.parkingHeading,
      body: t.parkingBody,
      url: eventConfig.location.parkingMapsUrl,
    },
    {
      key: "schloss",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      heading: t.schlossHeading,
      body: t.schlossBody,
    },
    {
      key: "childcare",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
      heading: t.childcareHeading,
      body: t.childcareBody,
    },
  ];

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden bg-white px-6 py-28 md:py-36"
    >
      <div className="absolute right-0 top-8 lg:right-4 xl:right-10">
        <GreenFlower side="right" />
      </div>
      <CornerDots position="top-left" />
      <CornerDots position="bottom-right" />

      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading>{t.goodToKnowHeading}</SectionHeading>

        <motion.div variants={stagger} className="mt-12 grid gap-4 sm:grid-cols-2">
          {infoItems.map((item) => (
            <motion.div
              key={item.key}
              variants={fadeUp}
              className="rounded-2xl bg-beige-50 p-6 text-start"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-warm-gray shadow-sm">
                {item.icon}
              </div>
              <p className="font-[var(--font-inter)] text-[15px] font-semibold text-warm-black">
                {item.heading}
              </p>
              <p className="mt-1.5 font-[var(--font-inter)] text-[14px] leading-relaxed text-warm-gray">
                {item.body}
              </p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 font-[var(--font-inter)] text-[14px] font-medium text-warm-gray transition-colors hover:text-warm-black"
                >
                  {t.viewOnMaps}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Fingerfood — full-width highlight card */}
        <motion.div
          variants={fadeUp}
          className="mt-4 rounded-2xl bg-warm-black px-8 py-8 text-start sm:flex sm:items-center sm:justify-between sm:gap-8"
        >
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 12h8M12 8v8" />
              </svg>
            </div>
            <div>
              <p className="font-[var(--font-inter)] text-[18px] font-semibold text-white">
                {t.fingerfoodHeading}
              </p>
              <p className="mt-1.5 font-[var(--font-inter)] text-[14px] leading-relaxed text-white/70">
                {t.fingerfoodBody}
              </p>
            </div>
          </div>
          <a
            href={FINGERFOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-[var(--font-inter)] text-[14px] font-semibold text-warm-black transition-opacity hover:opacity-85 sm:mt-0 sm:shrink-0"
          >
            {t.fingerfoodCta}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
