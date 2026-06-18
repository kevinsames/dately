"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { useClickCounter } from "@/lib/useClickCounter";
import SectionHeading from "./SectionHeading";
import { LeafBranch, GreenFlower } from "./SideFlourish";

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
  const amazonCounter = useClickCounter("amazon-clicks", 5);
  const wunschCounter = useClickCounter("wunsch-clicks", 10);

  function counterText(remaining: number | null, total: number, fallback: string) {
    if (remaining === null) return fallback;
    if (remaining === 0) return t.wishlistSoldOut;
    return t.wishlistRemaining.replace("{n}", String(remaining)).replace("{total}", String(total));
  }

  const items = [
    {
      key: "honeymoon",
      emoji: "✈️",
      title: t.wishlistHoneymoonTitle,
      amount: t.wishlistHoneymoonAmount,
      detail: null,
      url: null,
      onClickExtra: undefined,
    },
    {
      key: "iran",
      emoji: "🏡",
      title: t.wishlistIranTitle,
      amount: t.wishlistIranAmount,
      detail: t.wishlistIranDetail,
      url: null,
      onClickExtra: undefined,
    },
    {
      key: "amazon",
      emoji: null,
      title: t.wishlistAmazonTitle,
      amount: counterText(amazonCounter.remaining, 5, t.wishlistAmazonDesc),
      detail: null,
      url: "https://www.amazon.de/Digitaler-Amazon-Gutschein-Blaues-Amazon/dp/B07Q1JNC7R/",
      onClickExtra: amazonCounter.increment,
    },
    {
      key: "wunsch",
      emoji: null,
      title: t.wishlistWunschTitle,
      amount: counterText(wunschCounter.remaining, 10, t.wishlistWunschDesc),
      detail: null,
      url: "https://www.wunschgutschein.de/products/dein-wunscherfueller-schmetterling?variant=41151370625224",
      onClickExtra: wunschCounter.increment,
    },
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
      <div className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-8 xl:left-16">
        <LeafBranch side="left" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 lg:right-8 xl:right-16">
        <LeafBranch side="right" />
      </div>
      <div className="absolute bottom-8 right-0 lg:right-6 xl:right-14">
        <GreenFlower side="right" />
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
          {t.wishlistIntro}
        </motion.p>

        <motion.div variants={stagger} className="mt-10 grid gap-3">
          {items.map((item) => {
            const inner = (
              <>
                <div className="flex items-start gap-3 text-start">
                  {item.emoji && (
                    <span className="text-xl leading-none mt-0.5">{item.emoji}</span>
                  )}
                  <div>
                    <p className="font-[var(--font-inter)] text-[17px] font-medium text-warm-black">
                      {item.title}
                    </p>
                    <p className="mt-0.5 font-[var(--font-inter)] text-[14px] text-warm-gray">
                      {item.amount}
                    </p>
                    {item.detail && (
                      <p className="mt-1 font-[var(--font-inter)] text-[13px] leading-relaxed text-warm-gray">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
                {item.url && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-beige-400"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                )}
              </>
            );

            return item.url ? (
              <motion.a
                key={item.key}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="flex items-center justify-between rounded-2xl bg-white px-6 py-5 transition-colors hover:bg-beige-50"
                onClick={item.onClickExtra}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={item.key}
                variants={fadeUp}
                className="flex items-center justify-between rounded-2xl bg-white px-6 py-5"
              >
                {inner}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
