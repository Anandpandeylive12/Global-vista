"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp } from "@/animations/fadeUp";

export default function ServicesHero() {
  return (
    <section className="relative px-6 pt-36 pb-20 text-center lg:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp(0)}>
          <SectionLabel className="justify-center">Services</SectionLabel>
        </motion.div>
        <motion.h1
          {...fadeUp(0.12)}
          className="mt-5 font-display text-4xl text-offwhite sm:text-5xl lg:text-6xl"
        >
          Support built around how you learn
        </motion.h1>
        <motion.p {...fadeUp(0.24)} className="mt-6 text-base text-muted sm:text-lg">
          From subject mastery to mentorship, every service is designed to
          meet a student exactly where they are.
        </motion.p>
      </div>
    </section>
  );
}