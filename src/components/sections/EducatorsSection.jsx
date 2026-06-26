"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import EducatorCard from "@/components/cards/EducatorCard";
import { educatorsData } from "@/data/educatorsData";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer } from "@/animations/staggerContainer";

export default function EducatorsSection() {
  return (
    <section className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <SectionLabel>Our Educators</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
            Meet the people guiding your journey
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer(0.15)}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {educatorsData.map((educator) => (
            <EducatorCard key={educator.id} {...educator} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}