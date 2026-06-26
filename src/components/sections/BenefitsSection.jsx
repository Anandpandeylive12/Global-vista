"use client";

import { motion } from "framer-motion";
import { Clock, Users, LineChart, ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer, staggerItem } from "@/animations/staggerContainer";

const benefits = [
  { icon: Clock, title: "Flexible Scheduling", description: "Sessions fit around school, not the other way around." },
  { icon: Users, title: "Small Group Focus", description: "Low student-to-mentor ratios for real attention." },
  { icon: LineChart, title: "Tracked Progress", description: "Regular reports show exactly where a student stands." },
  { icon: ShieldCheck, title: "Vetted Educators", description: "Every mentor is screened for subject depth and teaching skill." },
];

export default function BenefitsSection() {
  return (
    <section className="relative px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <SectionLabel>Benefits</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
            Why families choose Global Vista
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer(0.12)}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((b) => (
            <motion.div key={b.title} variants={staggerItem}>
              <GlassCard className="h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                  <b.icon className="h-5.5 w-5.5 text-gold" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg text-offwhite">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}