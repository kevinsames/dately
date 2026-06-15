"use client";

import { eventConfig } from "@/config/event.config";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Wishlist from "@/components/Wishlist";
import Accommodation from "@/components/Accommodation";
import GoodToKnow from "@/components/GoodToKnow";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  return (
    <main className="bg-beige-50">
      <LanguageToggle />
      <Hero config={eventConfig} />
      {eventConfig.features.countdown && (
        <Countdown date={eventConfig.date} />
      )}
      <EventDetails config={eventConfig} />
      <Schedule />
      {eventConfig.features.gallery && eventConfig.gallery && (
        <Gallery gallery={eventConfig.gallery} />
      )}
      <GoodToKnow />
      <Accommodation />
      <Wishlist />
      <Footer config={eventConfig} />
    </main>
  );
}
