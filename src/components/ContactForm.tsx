"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    musikwuensche: "",
    unvertraeglichkeiten: "",
    sonstiges: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Hochzeit – Nachricht von ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-beige-200 bg-white px-4 py-3 font-[var(--font-inter)] text-[15px] text-warm-black placeholder:text-beige-400 focus:outline-none focus:ring-2 focus:ring-beige-300 transition-shadow";
  const labelClass =
    "block font-[var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.08em] text-warm-gray mb-1.5";

  if (status === "success") {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="rounded-2xl bg-beige-50 px-6 py-10 text-center"
      >
        <p className="font-[var(--font-inter)] text-[17px] text-warm-black">{t.contactFormSuccess}</p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl bg-beige-50 px-6 py-7 text-left">
      <p className="font-[var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.1em] text-warm-gray">
        {t.contactHeading}
      </p>
      <p className="mt-2 mb-6 font-[var(--font-inter)] text-[15px] text-warm-gray">
        {t.contactBody}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

        <div>
          <label className={labelClass}>
            {t.contactFormName} <span className="text-warm-black">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder={t.contactFormName}
          />
        </div>

        <div>
          <label className={labelClass}>
            {t.contactFormEmail}
            <span className="ml-1.5 normal-case tracking-normal font-normal text-[11px]">
              ({t.contactFormEmailOptional})
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="mail@beispiel.de"
          />
        </div>

        <div>
          <label className={labelClass}>{t.contactFormMusic}</label>
          <textarea
            name="musikwuensche"
            value={form.musikwuensche}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label className={labelClass}>{t.contactFormDietary}</label>
          <textarea
            name="unvertraeglichkeiten"
            value={form.unvertraeglichkeiten}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label className={labelClass}>{t.contactFormOther}</label>
          <textarea
            name="sonstiges"
            value={form.sonstiges}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>

        {status === "error" && (
          <p className="font-[var(--font-inter)] text-[14px] text-red-500">{t.contactFormError}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 w-full rounded-xl bg-warm-black px-6 py-3.5 font-[var(--font-inter)] text-[15px] font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {status === "submitting" ? t.contactFormSending : t.contactFormSubmit}
        </button>
      </form>
    </div>
  );
}
