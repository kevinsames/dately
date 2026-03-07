"use client";

import { useState, ReactNode } from "react";
import { Locale, LocaleContext, getTranslations } from "@/lib/i18n";

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t: getTranslations(locale) }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
