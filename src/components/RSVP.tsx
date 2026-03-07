"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="bg-beige-100 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-md text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-[var(--font-playfair)] text-[2rem] font-light text-warm-black">
              Thank you
            </p>
            <p className="mt-3 font-[var(--font-inter)] text-[15px] text-warm-gray">
              We&apos;ve received your RSVP.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-beige-100 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-sm text-center">
        <motion.h2
          variants={fadeUp}
          className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-[-0.01em] text-warm-black"
        >
          RSVP
        </motion.h2>

        <motion.form
          variants={fadeUp}
          className="mt-10 space-y-3 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label
              htmlFor="rsvp-name"
              className="mb-1.5 block font-[var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.08em] text-warm-gray"
            >
              Full Name
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              className="w-full rounded-xl border border-beige-200 bg-white px-4 py-3 font-[var(--font-inter)] text-[15px] text-warm-black outline-none transition-colors focus:border-beige-400"
            />
          </div>

          <div>
            <label
              htmlFor="rsvp-email"
              className="mb-1.5 block font-[var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.08em] text-warm-gray"
            >
              Email
            </label>
            <input
              id="rsvp-email"
              type="email"
              required
              className="w-full rounded-xl border border-beige-200 bg-white px-4 py-3 font-[var(--font-inter)] text-[15px] text-warm-black outline-none transition-colors focus:border-beige-400"
            />
          </div>

          <div>
            <label
              htmlFor="rsvp-attendance"
              className="mb-1.5 block font-[var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.08em] text-warm-gray"
            >
              Will you attend?
            </label>
            <select
              id="rsvp-attendance"
              required
              className="w-full appearance-none rounded-xl border border-beige-200 bg-white px-4 py-3 font-[var(--font-inter)] text-[15px] text-warm-black outline-none transition-colors focus:border-beige-400"
            >
              <option value="">Select</option>
              <option value="yes">Joyfully Accept</option>
              <option value="no">Regretfully Decline</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-warm-black py-3.5 font-[var(--font-inter)] text-[14px] font-medium tracking-wide text-white transition-opacity hover:opacity-85"
          >
            Send RSVP
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
