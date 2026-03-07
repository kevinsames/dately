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
    accommodationOption2Name: "Pension Ahrensburg",
    accommodationOption2Detail: "10 min from venue · from €65/night",
    accommodationOption2Url: "https://www.pension-ahrensburg.de",
    accommodationOption3Name: "City Hotel Hamburg",
    accommodationOption3Detail: "20 min from venue · from €110/night",
    accommodationOption3Url: "https://www.cityhotel-hamburg.de",
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
    accommodationOption2Name: "Pension Ahrensburg",
    accommodationOption2Detail: "10 Min. entfernt · ab 65 €/Nacht",
    accommodationOption2Url: "https://www.pension-ahrensburg.de",
    accommodationOption3Name: "City Hotel Hamburg",
    accommodationOption3Detail: "20 Min. entfernt · ab 110 €/Nacht",
    accommodationOption3Url: "https://www.cityhotel-hamburg.de",
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
