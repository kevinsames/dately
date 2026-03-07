"use client";

import { useTranslation } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <button
      onClick={() => setLocale(locale === "de" ? "en" : "de")}
      className="fixed right-4 top-4 z-50 flex items-center gap-0.5 rounded-full border border-beige-200 bg-white/80 px-3 py-1.5 font-[var(--font-inter)] text-[12px] font-medium tracking-wide backdrop-blur-md transition-colors hover:bg-white"
      aria-label="Toggle language"
    >
      <span className={locale === "en" ? "text-warm-black" : "text-warm-gray"}>
        EN
      </span>
      <span className="text-beige-300">|</span>
      <span className={locale === "de" ? "text-warm-black" : "text-warm-gray"}>
        DE
      </span>
    </button>
  );
}
