"use client";

import { createContext, useContext } from "react";

export type Locale = "en" | "de";

const translations = {
  en: {
    saveTheDate: "Save the Date",
    theDetails: "The Details",
    date: "Date",
    time: "Time",
    venue: "Venue",
    location: "Location",
    dressCode: "Dress Code",
    viewOnMaps: "View on Maps",
    countingDown: "Counting Down",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    ourMoments: "Our Moments",
    rsvp: "RSVP",
    fullName: "Full Name",
    email: "Email",
    willYouAttend: "Will you attend?",
    select: "Select",
    joyfullyAccept: "Joyfully Accept",
    regretfullyDecline: "Regretfully Decline",
    sendRsvp: "Send RSVP",
    thankYou: "Thank you",
    receivedRsvp: "We've received your RSVP.",
    eventMessage:
      "We would love for you to join us as we celebrate our love and begin this beautiful new chapter together.",
    scheduleHeading: "Schedule",
    scheduleBody: "Here's a rough outline of the day — times may shift slightly.",
    scheduleArrival: "Arrival & Welcome",
    scheduleCeremony: "Ceremony",
    scheduleCocktail: "Cocktail Hour",
    scheduleDinner: "Dinner",
    scheduleCake: "Wedding Cake",
    scheduleParty: "Party & Dancing",
    scheduleArrivalTime: "2:00 PM",
    scheduleCeremonyTime: "2:30 PM",
    scheduleCocktailTime: "3:30 PM",
    scheduleDinnerTime: "5:00 PM",
    scheduleCakeTime: "7:00 PM",
    schedulePartyTime: "8:00 PM",
    bibleVerse:
      "That according to the riches of his glory he may grant you to be strengthened with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith—that you, being rooted and grounded in love, may have strength to comprehend with all the saints what is the breadth and length and height and depth, and to know the love of Christ that surpasses knowledge, that you may be filled with all the fullness of God.",
    bibleVerseRef: "Ephesians 3:16–19",
    footerMessage: "We can't wait to celebrate with you",
    wishlistHeading: "Wishlist",
    wishlistBody:
      "We are grateful and well provided for. You don't need to bring us anything — but if it's on your heart, we'd love your support toward our honeymoon.",
    accommodationHeading: "Accommodation",
    accommodationBody:
      "Here are a few places we recommend for your stay. All are within easy reach of the venue.",
    accommodationOption1Name: "Hotel am Schloss",
    accommodationOption1Detail: "5 min from venue · from €89/night",
    accommodationOption1Url: "https://www.hotel-am-schloss.de",
  },
  de: {
    saveTheDate: "Save the Date",
    theDetails: "Die Details",
    date: "Datum",
    time: "Uhrzeit",
    venue: "Ort",
    location: "Adresse",
    dressCode: "Dresscode",
    viewOnMaps: "Auf Karte ansehen",
    countingDown: "Countdown",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    ourMoments: "Unsere Momente",
    rsvp: "Zusage",
    fullName: "Vollständiger Name",
    email: "E-Mail",
    willYouAttend: "Wirst du dabei sein?",
    select: "Auswählen",
    joyfullyAccept: "Freudig zusagen",
    regretfullyDecline: "Leider absagen",
    sendRsvp: "Zusage senden",
    thankYou: "Danke",
    receivedRsvp: "Wir haben deine Zusage erhalten.",
    eventMessage:
      "Wir würden uns sehr freuen, wenn ihr mit uns diesen besonderen Tag feiert und dieses neue Kapitel mit uns beginnt.",
    scheduleHeading: "Ablaufplan",
    scheduleBody: "Hier ein grober Überblick über den Tag — Zeiten können sich noch leicht ändern.",
    scheduleArrival: "Ankommen & Empfang",
    scheduleCeremony: "Trauung",
    scheduleCocktail: "Sektempfang",
    scheduleDinner: "Abendessen",
    scheduleCake: "Hochzeitstorte",
    scheduleParty: "Feier & Tanz",
    scheduleArrivalTime: "14:00",
    scheduleCeremonyTime: "14:30",
    scheduleCocktailTime: "15:30",
    scheduleDinnerTime: "17:00",
    scheduleCakeTime: "19:00",
    schedulePartyTime: "20:00",
    bibleVerse:
      "Daß er euch nach dem Reichtum seiner Herrlichkeit gebe, durch seinen Geist mit Kraft gestärkt zu werden an dem inneren Menschen, daß der Christus durch den Glauben in euren Herzen wohne, damit ihr, in Liebe gewurzelt und gegründet, dazu fähig seid, mit allen Heiligen zu begreifen, was die Breite, die Länge, die Tiefe und die Höhe sei, und die Liebe des Christus zu erkennen, die doch alle Erkenntnis übersteigt, damit ihr erfüllt werdet bis zur ganzen Fülle Gottes.",
    bibleVerseRef: "Epheser 3,16–19",
    footerMessage: "Wir freuen uns darauf, mit euch zu feiern",
    wishlistHeading: "Wunschliste",
    wishlistBody:
      "Wir sind dankbar und gut versorgt. Ihr braucht uns nichts zu schenken — aber wenn ihr es auf dem Herzen habt, unterstützt uns gerne bei der Finanzierung unserer Flitterwochen.",
    accommodationHeading: "Unterkünfte",
    accommodationBody:
      "Hier sind einige Unterkünfte, die wir euch für euren Aufenthalt empfehlen können. Alle sind gut erreichbar.",
    accommodationOption1Name: "Hotel am Schloss",
    accommodationOption1Detail: "5 Min. entfernt · ab 89 €/Nacht",
    accommodationOption1Url: "https://www.hotel-am-schloss.de",
  },
} as const;

export type Translations = { [K in keyof (typeof translations)["en"]]: string };

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: "de",
  setLocale: () => {},
  t: translations.de,
});

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function useTranslation() {
  return useContext(LocaleContext);
}
