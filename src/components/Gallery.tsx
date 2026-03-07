"use client";

import { motion } from "framer-motion";
import { GalleryConfig } from "@/types/event";
import { useTranslation } from "@/lib/i18n";

interface GalleryProps {
  gallery: GalleryConfig;
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
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Gallery({ gallery }: GalleryProps) {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          variants={fadeUp}
          className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-[-0.01em] text-warm-black"
        >
          {t.ourMoments}
        </motion.h2>

        <motion.div
          variants={stagger}
          className="mt-12 grid grid-cols-2 gap-3 md:gap-4"
        >
          {gallery.images.map((src, index) => (
            <motion.div
              key={src}
              variants={fadeUp}
              className={`overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <div className="flex h-full w-full items-center justify-center bg-beige-100">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ADADAD"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
