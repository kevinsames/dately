"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { LeafBranch } from "./SideFlourish";

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
      className="relative overflow-hidden bg-beige-100 px-6 py-28 md:py-36"
    >
      {/* Side botanical flourishes */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-8 xl:left-16">
        <LeafBranch side="left" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 lg:right-8 xl:right-16">
        <LeafBranch side="right" />
      </div>

      <div className="mx-auto max-w-xl text-center">
        {/* Heart icon */}
        <motion.div variants={fadeUp} className="mb-4 flex justify-center" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4D4C8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </motion.div>

        <SectionHeading>{t.wishlistHeading}</SectionHeading>

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
