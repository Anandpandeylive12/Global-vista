"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  UserCheck,
  Briefcase,
  Rocket,
  Globe2,
  HeartHandshake,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer, staggerItem } from "@/animations/staggerContainer";

const benefits = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Delivering world-class academic standards inspired by leading international education systems.",
  },
  {
    icon: GraduationCap,
    title: "International University Expertise",
    description:
      "Guidance and support from educators and mentors with global academic experience.",
  },
  {
    icon: UserCheck,
    title: "Personalised Mentoring",
    description:
      "Individual attention and tailored learning pathways designed for every student.",
  },
  {
    icon: Briefcase,
    title: "Career-Focused Guidance",
    description:
      "Helping students align their education with future careers and opportunities.",
  },
  {
    icon: Rocket,
    title: "Future Skills Development",
    description:
      "Building leadership, critical thinking, communication, and problem-solving skills.",
  },
  {
    icon: Globe2,
    title: "Global Exposure Opportunities",
    description:
      "Connecting students with international perspectives and educational pathways.",
  },
  {
    icon: HeartHandshake,
    title: "Student-Centred Approach",
    description:
      "Every decision and learning experience is designed around student success.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="">
          <SectionLabel>Why Global Vista</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
           More Than Education — A Partnership with Students and Parents for Lifelong Success.
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