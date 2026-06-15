export function formatDate(dateString: string, locale: string = "en"): string {
  const date = new Date(dateString);
  const bcp47: Record<string, string> = {
    en: "en-US",
    de: "de-DE",
    fa: "fa-IR-u-ca-gregory",
  };
  return date.toLocaleDateString(bcp47[locale] ?? "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(dateString: string, locale: string = "en"): string {
  const date = new Date(dateString);
  const bcp47: Record<string, string> = {
    en: "en-US",
    de: "de-DE",
    fa: "fa-IR",
  };
  return date.toLocaleTimeString(bcp47[locale] ?? "en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: locale === "en",
  });
}
