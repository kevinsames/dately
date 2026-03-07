"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { CurvedVine } from "./SideFlourish";

interface CountdownProps {
  date: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - Date.now();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white md:h-24 md:w-24"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="font-[var(--font-playfair)] text-[2rem] font-light text-warm-black md:text-[2.5rem]"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 font-[var(--font-inter)] text-[11px] font-medium uppercase tracking-[0.15em] text-warm-gray">
        {label}
      </span>
    </div>
  );
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

export default function Countdown({ date }: CountdownProps) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(date));
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(date)), 1000);
    return () => clearInterval(timer);
  }, [date]);

  const units = [
    { key: "days", value: timeLeft.days, label: t.days },
    { key: "hours", value: timeLeft.hours, label: t.hours },
    { key: "minutes", value: timeLeft.minutes, label: t.minutes },
    { key: "seconds", value: timeLeft.seconds, label: t.seconds },
  ];

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden px-6 py-28 md:py-36"
      style={{
        background: "linear-gradient(180deg, #F5F5F0 0%, #F0F0E8 50%, #F5F5F0 100%)",
      }}
    >
      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 lg:left-12">
        <CurvedVine side="left" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 lg:right-12">
        <CurvedVine side="right" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading>{t.countingDown}</SectionHeading>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex justify-center gap-3 md:gap-6"
        >
          {mounted
            ? units.map((u) => <Unit key={u.key} value={u.value} label={u.label} />)
            : units.map((u) => <Unit key={u.key} value={0} label={u.label} />)}
        </motion.div>
      </div>
    </motion.section>
  );
}
