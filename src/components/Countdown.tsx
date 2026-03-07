"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white md:h-24 md:w-24">
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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(date));
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(date)), 1000);
    return () => clearInterval(timer);
  }, [date]);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-beige-100 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          variants={fadeUp}
          className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-[-0.01em] text-warm-black"
        >
          Counting Down
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex justify-center gap-3 md:gap-6"
        >
          {mounted
            ? units.map((u) => <Unit key={u.label} value={u.value} label={u.label} />)
            : units.map((u) => <Unit key={u.label} value={0} label={u.label} />)}
        </motion.div>
      </div>
    </motion.section>
  );
}
