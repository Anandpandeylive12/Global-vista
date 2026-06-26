"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer, staggerItem } from "@/animations/staggerContainer";

const steps = [
  { number: "01", title: "Consultation", description: "A free call to understand goals, gaps and schedule." },
  { number: "02", title: "Mentor Match", description: "We pair the student with the right UK educator." },
  { number: "03", title: "Live Learning", description: "Regular sessions begin, recorded for later review." },
  { number: "04", title: "Progress Review", description: "Reports and adjustments keep the plan on track." },
];

export default function LearningProcess() {
  return (
    <section className="relative px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
            How a student journey unfolds
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer(0.15)}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={staggerItem}>
              <GlassCard className="h-full p-7" hover={false}>
                <span className="font-display text-3xl text-gold/50">{step.number}</span>
                <h3 className="mt-4 font-display text-lg text-offwhite">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}