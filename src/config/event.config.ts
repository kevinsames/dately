import { EventConfig } from "@/types/event";

export const eventConfig: EventConfig = {
  title: "Hadi & Homa",
  subtitle: "Nasrollahi",
  date: "2026-06-06T15:00:00",
  location: {
    venue: "FeG Ahrensburg",
    address: "Ahrensburg, Germany",
    mapsUrl: "https://maps.google.com/?q=FeG+Ahrensburg",
  },
  message:
    "We would love for you to join us as we celebrate our love and begin this beautiful new chapter together.",
  dresscode: "Black Tie Optional",
  features: {
    countdown: true,
    gallery: true,
    rsvp: false,
    map: true,
  },
  gallery: {
    images: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
    ],
  },
};
