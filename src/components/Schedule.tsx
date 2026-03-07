"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { LeafBranch, CornerDots } from "./SideFlourish";

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

const icons: Record<string, React.ReactNode> = {
  arrival: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 00-12 0c0 7 6 13 6 13s6-6 6-13z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  ),
  ceremony: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  cocktail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8M12 11v11M3 2l9 9 9-9" />
      <path d="M5.5 2H18.5" />
    </svg>
  ),
  dinner: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  ),
  cake: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3M12 8v3M17 8v3" />
      <path d="M7 4h.01M12 4h.01M17 4h.01" />
    </svg>
  ),
  party: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
};

export default function Schedule() {
  const { t } = useTranslation();

  const items = [
    { key: "arrival", icon: icons.arrival, time: t.scheduleArrivalTime, label: t.scheduleArrival },
    { key: "ceremony", icon: icons.ceremony, time: t.scheduleCeremonyTime, label: t.scheduleCeremony },
    { key: "cocktail", icon: icons.cocktail, time: t.scheduleCocktailTime, label: t.scheduleCocktail },
    { key: "dinner", icon: icons.dinner, time: t.scheduleDinnerTime, label: t.scheduleDinner },
    { key: "cake", icon: icons.cake, time: t.scheduleCakeTime, label: t.scheduleCake },
    { key: "party", icon: icons.party, time: t.schedulePartyTime, label: t.scheduleParty },
  ];

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden bg-beige-100 px-6 py-28 md:py-36"
    >
      {/* Side botanical flourishes */}
      <div className="absolute right-4 top-1/3 -translate-y-1/2 lg:right-10 xl:right-20">
        <LeafBranch side="right" />
      </div>
      <CornerDots position="top-left" />
      <CornerDots position="bottom-right" />

      <div className="mx-auto max-w-md text-center">
        <SectionHeading>{t.scheduleHeading}</SectionHeading>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-lg font-[var(--font-inter)] text-[17px] leading-relaxed text-warm-gray"
        >
          {t.scheduleBody}
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-beige-300 md:left-8" aria-hidden="true" />

          <div className="space-y-8">
            {items.map((item) => (
              <motion.div
                key={item.key}
                variants={fadeUp}
                className="relative flex items-start gap-5 text-left md:gap-6"
              >
                {/* Dot on the line */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-warm-gray shadow-sm md:h-16 md:w-16">
                  {item.icon}
                </div>

                <div className="pt-1 md:pt-3">
                  <p className="font-[var(--font-inter)] text-[13px] font-medium uppercase tracking-[0.1em] text-warm-gray">
                    {item.time}
                  </p>
                  <p className="mt-0.5 font-[var(--font-playfair)] text-[18px] text-warm-black">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
