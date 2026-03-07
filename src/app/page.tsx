"use client";

import { eventConfig } from "@/config/event.config";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Wishlist from "@/components/Wishlist";
import Accommodation from "@/components/Accommodation";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { SectionDivider } from "@/components/SideFlourish";

export default function Home() {
  return (
    <main className="bg-beige-50">
      <LanguageToggle />
      <Hero config={eventConfig} />
      {eventConfig.features.countdown && (
        <Countdown date={eventConfig.date} />
      )}
      <SectionDivider />
      <EventDetails config={eventConfig} />
      <SectionDivider />
      <Schedule />
      {eventConfig.features.gallery && eventConfig.gallery && (
        <>
          <SectionDivider />
          <Gallery gallery={eventConfig.gallery} />
        </>
      )}
      <SectionDivider />
      <Accommodation />
      <SectionDivider />
      <Wishlist />
      {eventConfig.features.rsvp && <RSVP />}
      <SectionDivider />
      <Footer config={eventConfig} />
    </main>
  );
}
