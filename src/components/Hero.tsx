"use client";

import { motion } from "framer-motion";
import { EventConfig } from "@/types/event";
import { formatDate } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { LeafBranch, GreenFlower } from "./SideFlourish";

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

const floatingDots = [
  { size: 6, top: "12%", left: "18%", delay: 0 },
  { size: 5, top: "28%", right: "14%", delay: 1.2 },
  { size: 7, bottom: "22%", left: "22%", delay: 2.4 },
  { size: 4, bottom: "35%", right: "20%", delay: 0.8 },
  { size: 3, top: "45%", left: "10%", delay: 1.8 },
  { size: 5, top: "60%", right: "10%", delay: 3.0 },
  { size: 4, top: "8%", right: "28%", delay: 0.4 },
  { size: 3, bottom: "15%", right: "30%", delay: 2.0 },
];

export default function Hero({ config }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-14 md:py-24"
      style={{
        background: "radial-gradient(ellipse at center, #FFFFFF 0%, #FAFAF8 50%, #F5F5F0 100%)",
      }}
    >
      {/* Side botanical flourishes */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-8 xl:left-16">
        <LeafBranch side="left" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 lg:right-8 xl:right-16">
        <LeafBranch side="right" />
      </div>
      {/* Green flowers */}
      <div className="absolute bottom-16 left-0 lg:left-4 xl:left-12">
        <GreenFlower side="left" />
      </div>
      <div className="absolute bottom-16 right-0 lg:right-4 xl:right-12">
        <GreenFlower side="right" />
      </div>

      {/* Floating decorative dots */}
      {floatingDots.map((dot, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-beige-300"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            opacity: 0.12,
            animation: `float-dot 6s ease-in-out ${dot.delay}s infinite`,
          }}
          aria-hidden="true"
        />
      ))}

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
          className="relative mx-auto mt-8 aspect-[3/4] w-full max-w-[200px] md:mt-12 md:max-w-xs"
        >
          {/* Double ring frame */}
          <div className="absolute -inset-3 rounded-[1.75rem] border border-beige-200" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={config.heroImage}
              alt={config.title}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      )}

      <motion.div
        custom={4}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-8 h-px w-12 bg-beige-300 md:mt-12"
      />

      <motion.p
        custom={5}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-8 font-[var(--font-inter)] text-[17px] tracking-wide text-warm-black md:mt-12"
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
        className="mt-10 md:mt-20"
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
