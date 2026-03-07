"use client";

import { eventConfig } from "@/config/event.config";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-beige-50">
      <Hero config={eventConfig} />
      <EventDetails config={eventConfig} />
      {eventConfig.features.countdown && (
        <Countdown date={eventConfig.date} />
      )}
      {eventConfig.features.gallery && eventConfig.gallery && (
        <Gallery gallery={eventConfig.gallery} />
      )}
      {eventConfig.features.rsvp && <RSVP />}
      <Footer config={eventConfig} />
    </main>
  );
}
