import { EventConfig } from "@/types/event";

const basePath = process.env.NODE_ENV === "production" ? "/dately" : "";

export const eventConfig: EventConfig = {
  title: "Hadi & Homa",
  subtitle: "Nasrollahi",
  date: "2026-07-24T14:00:00",
  location: {
    venue: "FeG Ahrensburg",
    address: "Lübecker Straße 4a, 22926 Ahrensburg",
    mapsUrl: "https://maps.google.com/?q=FeG+Ahrensburg+Lübecker+Straße+4a+22926+Ahrensburg",
  },
  heroImage: `${basePath}/images/hero.jpg`,
  features: {
    countdown: true,
    gallery: false,
    map: true,
  },
  gallery: {
    images: ["/images/hero.jpg"],
  },
};
