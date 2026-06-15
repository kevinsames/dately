"use client";

import { useState, useEffect, ReactNode } from "react";
import { Locale, LocaleContext, getTranslations } from "@/lib/i18n";

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: getTranslations(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
}
