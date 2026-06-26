"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake, TrendingUp } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer, staggerItem } from "@/animations/staggerContainer";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honest progress reports, even when the news is hard to hear.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Every educator is vetted for both subject mastery and teaching craft.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    description: "We work with families, not just students, at every step.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Progress is tracked, measured, and adjusted, never assumed.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <SectionLabel>Core Values</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
            What guides every decision we make
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer(0.12)}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={staggerItem}>
              <GlassCard className="h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                  <value.icon className="h-5.5 w-5.5 text-gold" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg text-offwhite">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}