"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp } from "@/animations/fadeUp";

export default function AboutHero() {
  return (
    <section className="relative px-6 pt-36 pb-20 text-center lg:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp(0)}>
          <SectionLabel className="justify-center">About Us</SectionLabel>
        </motion.div>
        <motion.h1
          {...fadeUp(0.12)}
          className="mt-5 font-display text-4xl text-offwhite sm:text-5xl lg:text-6xl"
        >
          Built to bridge two education systems
        </motion.h1>
        <motion.p {...fadeUp(0.24)} className="mt-6 text-base text-muted sm:text-lg">
          Global Vista Educators was founded to give Indian students direct
          access to UK academic mentorship, without losing what makes their
          own curriculum work.
        </motion.p>
      </div>
    </section>
  );
}