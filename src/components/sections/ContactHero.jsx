"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp } from "@/animations/fadeUp";

export default function ContactHero() {
  return (
    <section className="relative px-6 pt-36 pb-16 text-center lg:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp(0)}>
          <SectionLabel className="justify-center">Contact</SectionLabel>
        </motion.div>
        <motion.h1
          {...fadeUp(0.12)}
          className="mt-5 font-display text-4xl text-offwhite sm:text-5xl lg:text-6xl"
        >
          Let's plan the next step
        </motion.h1>
        <motion.p {...fadeUp(0.24)} className="mt-6 text-base text-muted sm:text-lg">
          Tell us about your student and we'll arrange a free consultation
          within 48 hours.
        </motion.p>
      </div>
    </section>
  );
}