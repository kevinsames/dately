"use client";

import { Locale, useTranslation } from "@/lib/i18n";

const locales: Locale[] = ["en", "de", "fa"];

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-0.5 rounded-full border border-beige-200 bg-white/80 px-3 py-1.5 font-[var(--font-inter)] text-[12px] font-medium tracking-wide backdrop-blur-md">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-0.5 text-beige-300">|</span>}
          <button
            onClick={() => setLocale(l)}
            className={`transition-colors ${locale === l ? "text-warm-black" : "text-warm-gray hover:text-warm-black"}`}
            aria-label={`Switch to ${l.toUpperCase()}`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
