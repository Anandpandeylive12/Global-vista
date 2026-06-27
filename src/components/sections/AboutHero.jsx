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
          Best Among Different Education Systems
        </motion.h1>
        <motion.p {...fadeUp(0.24)} className="mt-6 text-base text-muted sm:text-lg">
          The foundation of Global Vista Educators is built on a singular vision: to provide a world-class education that instills the values and knowledge young students need to build a better tomorrow. For us, education is not a business—it is a mission to shape a better world. We believe that receiving a quality education and exploring the world is the fundamental right of every student globally. Now, we have arrived in India to bring the world’s finest education system to its future leaders.
        </motion.p>
      </div>
    </section>
  );
}