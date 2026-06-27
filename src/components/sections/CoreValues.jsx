"use client";

import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer, staggerItem } from "@/animations/staggerContainer";

import {
  Users,
  Award,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Globe2,
  BookOpen,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Students First",
    description:
      "Every decision is made with our learners' success, wellbeing and aspirations in mind.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in teaching, mentoring and student support.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We act with honesty, transparency and professionalism in everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new ideas and technology to create engaging learning experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Support",
    description:
      "Every student receives guidance tailored to their strengths, ambitions and goals.",
  },
  {
    icon: Globe2,
    title: "Global Mindset",
    description:
      "We prepare students to thrive in an interconnected and internationally focused world.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description:
      "We inspire curiosity, confidence and a passion for continuous growth and development.",
  },
  {
    icon: Sparkles,
    title: "Partnership",
    description:
      "We work closely with families, educators and students at every stage of the journey.",
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
  <div className="flex items-center gap-4">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
      <value.icon
        className="h-7 w-7 text-gold"
        strokeWidth={2.5}
      />
    </div>

    <h3 className="font-display text-lg text-offwhite">
      {value.title}
    </h3>
  </div>

  <p className="mt-5 text-sm text-muted leading-relaxed">
    {value.description}
  </p>
</GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}