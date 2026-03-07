"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EventConfig } from "@/types/event";
import { formatDate } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

interface HeroProps {
  config: EventConfig;
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Hero({ config }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 py-24">
      <motion.p
        custom={0}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mb-8 font-[var(--font-inter)] text-[13px] font-medium uppercase tracking-[0.25em] text-warm-gray"
      >
        {t.saveTheDate}
      </motion.p>

      <motion.h1
        custom={1}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="text-center font-[var(--font-playfair)] text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] font-light tracking-[-0.02em] text-warm-black"
      >
        {config.title}
      </motion.h1>

      <motion.p
        custom={2}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-3 font-[var(--font-inter)] text-[17px] font-normal text-warm-gray"
      >
        {config.subtitle}
      </motion.p>

      {config.heroImage && (
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="relative mx-auto mt-12 aspect-[3/4] w-full max-w-xs overflow-hidden rounded-3xl shadow-lg"
        >
          <Image
            src={config.heroImage}
            alt={config.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 80vw, 320px"
          />
        </motion.div>
      )}

      <motion.div
        custom={4}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-12 h-px w-12 bg-beige-300"
      />

      <motion.p
        custom={5}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-12 font-[var(--font-inter)] text-[17px] tracking-wide text-warm-black"
      >
        {formatDate(config.date)}
      </motion.p>

      <motion.p
        custom={6}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-2 font-[var(--font-inter)] text-[15px] text-warm-gray"
      >
        {config.location.venue} · {config.location.address}
      </motion.p>

      <motion.div
        custom={7}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-20"
        style={{ willChange: "transform" }}
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#86868B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
