"use client";

import { createContext, useContext } from "react";

export type Locale = "en" | "de" | "fa";

const translations = {
  en: {
    invitation: "Wedding",
    theDetails: "The Details",
    date: "Date",
    time: "Time",
    venue: "Venue",
    location: "Location",
    dressCode: "Dress Code",
    dressCodeValue:
      "Wear what makes you feel good – from smart to elegant, everything is welcome. The most important accessory is your good mood!",
    viewOnMaps: "View on Maps",
    countingDown: "Counting Down",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    ourMoments: "Our Moments",
    eventMessage:
      "We would love for you to join us as we celebrate our love and begin this beautiful new chapter together.",
    scheduleHeading: "Schedule",
    scheduleBody: "Here's a rough outline of the day — times may shift slightly.",
    scheduleArrival: "Arrival & Welcome",
    scheduleCeremony: "Ceremony",
    scheduleCocktail: "Cocktail Hour",
    scheduleDinner: "Dinner",
    scheduleParty: "Party & Dancing",
    scheduleArrivalTime: "1:30 PM",
    scheduleCeremonyTime: "2:00 PM",
    scheduleCocktailTime: "3:00 PM",
    scheduleDinnerTime: "6:00 PM",
    schedulePartyTime: "9:00 PM",
    bibleVerse:
      "Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God.",
    bibleVerseRef: "1 John 4:7",
    footerMessage:
      "From the bottom of our hearts, we look forward to celebrating this special day with you.",
    wishlistHeading: "Gifts",
    wishlistIntro:
      "Your presence is the most beautiful gift for us. If you would still like to give us joy, we'd be happy with a gift voucher, a contribution to our heart's wishes, or the classic small envelope.",
    wishlistHoneymoonTitle: "Honeymoon",
    wishlistHoneymoonAmount: "2,500 €",
    wishlistIranTitle: "Trip to Iran",
    wishlistIranAmount: "2,000 €",
    wishlistIranDetail:
      "To celebrate our wedding with Hadi's family, who unfortunately cannot travel to Germany.",
    wishlistAmazonTitle: "Amazon Gift Card",
    wishlistAmazonDesc: "5 × 100 €",
    wishlistWunschTitle: "Wunschgutschein",
    wishlistWunschDesc: "10 × 100 €",
    wishlistLinkCta: "Open Link",
    accommodationHeading: "Accommodation",
    accommodationBody:
      "Here are a few places we recommend for your stay. All are within easy reach of the venue.",
    accommodationOption1Name: "Hotel am Schloss",
    accommodationOption1Detail: "5 min from venue · from €89/night",
    accommodationOption1Url: "https://www.hotel-am-schloss.de",
    accommodationOption2Name: "Ringhotel Ahrensburg",
    accommodationOption2Detail: "10 min from venue · from €102.50/night",
    accommodationOption2Url: "https://www.ringhotel-ahrensburg.de/gastezimmer",
    contactHeading: "Contact",
    contactBody: "Got questions or preferences? Just write to us below:",
    contactFormName: "Your Name",
    contactFormEmail: "Email Address",
    contactFormEmailOptional: "optional — so we can reply",
    contactFormMusic: "Song Requests",
    contactFormDietary: "Dietary Requirements & Allergies",
    contactFormOther: "Anything Else?",
    contactFormSubmit: "Send Message",
    contactFormSending: "Sending…",
    contactFormSuccess: "Thank you! We'll be in touch soon.",
    contactFormError: "Something went wrong. Please try again.",
    goodToKnowHeading: "Good to Know",
    parkingHeading: "Parking",
    parkingBody: "Free parking is available approx. 50 metres from the venue.",
    schlossHeading: "Schloss Ahrensburg",
    schlossBody:
      "Between the ceremony and the evening celebrations, we invite you for a stroll at Schloss Ahrensburg — perfect for beautiful photos.",
    childcareHeading: "Childcare",
    childcareBody:
      "Unfortunately we were unable to arrange childcare. Please plan accordingly.",
    fingerfoodHeading: "Fingerfood Buffet",
    fingerfoodBody:
      "Would you like to contribute something to our fingerfood buffet? Sign up here:",
    fingerfoodCta: "Sign up",
  },
  de: {
    invitation: "Hochzeit",
    theDetails: "Die Details",
    date: "Datum",
    time: "Uhrzeit",
    venue: "Ort",
    location: "Adresse",
    dressCode: "Dresscode",
    dressCodeValue:
      "Zieht an, worin ihr euch wohlfühlt – von schick bis elegant ist alles willkommen. Das wichtigste Accessoire ist eure gute Laune!",
    viewOnMaps: "Auf Karte ansehen",
    countingDown: "Countdown",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    ourMoments: "Unsere Momente",
    eventMessage:
      "Wir würden uns sehr freuen, wenn ihr mit uns diesen besonderen Tag feiert und dieses neue Kapitel mit uns beginnt.",
    scheduleHeading: "Ablaufplan",
    scheduleBody: "Hier ein grober Überblick über den Tag — Zeiten können sich noch leicht ändern.",
    scheduleArrival: "Ankommen & Empfang",
    scheduleCeremony: "Trauung",
    scheduleCocktail: "Sektempfang",
    scheduleDinner: "Abendessen",
    scheduleParty: "Feier & Tanz",
    scheduleArrivalTime: "13:30",
    scheduleCeremonyTime: "14:00",
    scheduleCocktailTime: "15:00",
    scheduleDinnerTime: "18:00",
    schedulePartyTime: "21:00",
    bibleVerse:
      "Geliebte, lasst uns einander lieben! Denn die Liebe ist aus Gott, und jeder, der liebt, ist aus Gott geboren und erkennt Gott.",
    bibleVerseRef: "1. Johannes 4,7",
    footerMessage:
      "Wir freuen uns von Herzen darauf, diesen besonderen Tag gemeinsam mit euch zu feiern.",
    wishlistHeading: "Geschenke",
    wishlistIntro:
      "Eure Anwesenheit ist für uns das schönste Geschenk. Wenn ihr uns dennoch eine Freude machen möchtet, freuen wir uns über einen Gutschein, einen Beitrag zu unseren Herzenswünschen oder ganz klassisch über einen kleinen Umschlag.",
    wishlistHoneymoonTitle: "Flitterwochen",
    wishlistHoneymoonAmount: "2.500 €",
    wishlistIranTitle: "Reise in den Iran",
    wishlistIranAmount: "2.000 €",
    wishlistIranDetail:
      "Um unsere Hochzeit auch mit meiner Familie zu feiern, die leider nicht nach Deutschland reisen kann.",
    wishlistAmazonTitle: "Amazon Gutschein",
    wishlistAmazonDesc: "5 × 100 €",
    wishlistWunschTitle: "Wunschgutschein",
    wishlistWunschDesc: "10 × 100 €",
    wishlistLinkCta: "Link öffnen",
    accommodationHeading: "Unterkünfte",
    accommodationBody:
      "Hier sind einige Unterkünfte, die wir euch für euren Aufenthalt empfehlen können. Alle sind gut erreichbar.",
    accommodationOption1Name: "Hotel am Schloss",
    accommodationOption1Detail: "5 Min. entfernt · ab 89 €/Nacht",
    accommodationOption1Url: "https://www.hotel-am-schloss.de",
    accommodationOption2Name: "Ringhotel Ahrensburg",
    accommodationOption2Detail: "10 Min. entfernt · ab 102,50 €/Nacht",
    accommodationOption2Url: "https://www.ringhotel-ahrensburg.de/gastezimmer",
    contactHeading: "Kontakt",
    contactBody: "Habt ihr Fragen oder Wünsche? Schreibt uns einfach unten:",
    contactFormName: "Euer Name",
    contactFormEmail: "E-Mail-Adresse",
    contactFormEmailOptional: "optional — damit wir euch antworten können",
    contactFormMusic: "Musikwünsche",
    contactFormDietary: "Essensvorlieben & Unverträglichkeiten",
    contactFormOther: "Sonstiges",
    contactFormSubmit: "Nachricht senden",
    contactFormSending: "Wird gesendet …",
    contactFormSuccess: "Vielen Dank! Wir melden uns bald.",
    contactFormError: "Etwas hat nicht geklappt. Bitte versuch es nochmal.",
    goodToKnowHeading: "Gut zu wissen",
    parkingHeading: "Parken",
    parkingBody: "Kostenlose Parkmöglichkeiten ca. 50 Meter von der Gemeinde entfernt.",
    schlossHeading: "Schloss Ahrensburg",
    schlossBody:
      "Zwischen Trauung und Feier laden wir euch zu einem Spaziergang am Schloss Ahrensburg ein — perfekt für schöne Fotos.",
    childcareHeading: "Kinderbetreuung",
    childcareBody: "Leider konnten wir keine Kinderbetreuung organisieren. Bitte plant entsprechend.",
    fingerfoodHeading: "Fingerfood-Buffet",
    fingerfoodBody:
      "Du hast Lust, etwas zu unserem Fingerfood-Buffet beizusteuern? Melde dich gerne hier:",
    fingerfoodCta: "Jetzt eintragen",
  },
  fa: {
    invitation: "عروسی",
    theDetails: "جزئیات",
    date: "تاریخ",
    time: "ساعت",
    venue: "مکان",
    location: "آدرس",
    dressCode: "کد لباس",
    dressCodeValue:
      "هر چه دوست دارید بپوشید – از شیک تا رسمی، همه چیز خوش‌آمد است. مهم‌ترین اکسسوری، شادی شماست!",
    viewOnMaps: "نمایش در نقشه",
    countingDown: "شمارش معکوس",
    days: "روز",
    hours: "ساعت",
    minutes: "دقیقه",
    seconds: "ثانیه",
    ourMoments: "لحظات ما",
    eventMessage:
      "دوستان عزیز، خوشحال می‌شویم که در این روز خاص در کنارمان باشید و این فصل زیبا را با ما آغاز کنید.",
    scheduleHeading: "برنامه روز",
    scheduleBody: "برنامه تقریبی روز — ممکن است زمان‌ها کمی تغییر کنند.",
    scheduleArrival: "ورود و پذیرایی",
    scheduleCeremony: "مراسم ازدواج",
    scheduleCocktail: "پذیرایی با شامپاین",
    scheduleDinner: "شام",
    scheduleParty: "جشن و رقص",
    scheduleArrivalTime: "۱۳:۳۰",
    scheduleCeremonyTime: "۱۴:۰۰",
    scheduleCocktailTime: "۱۵:۰۰",
    scheduleDinnerTime: "۱۸:۰۰",
    schedulePartyTime: "۲۱:۰۰",
    bibleVerse:
      "ای دوستان، بیایید یکدیگر را دوست بداریم؛ زیرا محبت از خداست، و هر که محبت می‌کند از خدا متولد شده و خدا را می‌شناسد.",
    bibleVerseRef: "اول یوحنا ۴:۷",
    footerMessage: "از ته دل منتظریم که این روز خاص را با شما جشن بگیریم.",
    wishlistHeading: "هدایا",
    wishlistIntro:
      "حضور شما بزرگترین هدیه برای ماست. اگر می‌خواهید با هدیه‌ای خوشحالمان کنید، از کارت هدیه، کمک به آرزوهایمان یا یک پاکت کوچک خوشحال می‌شویم.",
    wishlistHoneymoonTitle: "ماه عسل",
    wishlistHoneymoonAmount: "۲٬۵۰۰ یورو",
    wishlistIranTitle: "سفر به ایران",
    wishlistIranAmount: "۲٬۰۰۰ یورو",
    wishlistIranDetail:
      "برای جشن عروسی با خانواده‌ای که متأسفانه نمی‌توانند به آلمان بیایند.",
    wishlistAmazonTitle: "کارت هدیه آمازون",
    wishlistAmazonDesc: "۵ × ۱۰۰ یورو",
    wishlistWunschTitle: "Wunschgutschein",
    wishlistWunschDesc: "۱۰ × ۱۰۰ یورو",
    wishlistLinkCta: "باز کردن لینک",
    accommodationHeading: "اقامت",
    accommodationBody:
      "در اینجا چند محل اقامت توصیه می‌کنیم. همه آن‌ها به محل مراسم نزدیک هستند.",
    accommodationOption1Name: "Hotel am Schloss",
    accommodationOption1Detail: "۵ دقیقه تا محل · از ۸۹ یورو در شب",
    accommodationOption1Url: "https://www.hotel-am-schloss.de",
    accommodationOption2Name: "Ringhotel Ahrensburg",
    accommodationOption2Detail: "۱۰ دقیقه تا محل · از ۱۰۲٫۵۰ یورو در شب",
    accommodationOption2Url: "https://www.ringhotel-ahrensburg.de/gastezimmer",
    contactHeading: "تماس",
    contactBody: "سؤال یا خواسته‌ای دارید؟ پایین برایمان بنویسید:",
    contactFormName: "نام شما",
    contactFormEmail: "آدرس ایمیل",
    contactFormEmailOptional: "اختیاری — تا بتوانیم پاسخ دهیم",
    contactFormMusic: "آهنگ‌های مورد علاقه",
    contactFormDietary: "ترجیحات غذایی و حساسیت‌ها",
    contactFormOther: "سایر موارد",
    contactFormSubmit: "ارسال پیام",
    contactFormSending: "در حال ارسال…",
    contactFormSuccess: "ممنون! به زودی خبر می‌دهیم.",
    contactFormError: "مشکلی پیش آمد. لطفاً دوباره امتحان کنید.",
    goodToKnowHeading: "اطلاعات مفید",
    parkingHeading: "پارکینگ",
    parkingBody: "پارکینگ رایگان در فاصله ۵۰ متری از محل مراسم در دسترس است.",
    schlossHeading: "قصر آرنسبورگ",
    schlossBody:
      "بین مراسم و جشن، شما را به گردش در قصر آرنسبورگ دعوت می‌کنیم — فرصت عالی برای عکس‌های زیبا.",
    childcareHeading: "مراقبت از کودکان",
    childcareBody:
      "متأسفانه نتوانستیم مراقبت از کودکان سازماندهی کنیم. لطفاً از قبل برنامه‌ریزی کنید.",
    fingerfoodHeading: "بوفه فینگرفود",
    fingerfoodBody: "اگر دوست دارید به بوفه فینگرفود ما کمک کنید، اینجا ثبت‌نام کنید:",
    fingerfoodCta: "ثبت‌نام",
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
