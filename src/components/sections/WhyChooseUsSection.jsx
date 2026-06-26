"use client";

import { motion } from "framer-motion";
import { FlaskConical, NotebookPen, CalendarClock, Compass } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import WhyCard from "@/components/cards/WhyCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer } from "@/animations/staggerContainer";

const cards = [
  {
    icon: FlaskConical,
    title: "STEM Support",
    items: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
  {
    icon: NotebookPen,
    title: "Exam Preparation",
    items: ["10th", "11th", "12th"],
  },
  {
    icon: CalendarClock,
    title: "Flexible Learning",
    items: ["Live Classes", "Recorded Sessions", "Resources"],
  },
  {
    icon: Compass,
    title: "Mentorship",
    items: ["Leadership", "Communication", "Career Skills"],
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <SectionLabel>Why Global Vista</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
            Everything a student needs to learn with confidence
          </h2>
          <p className="mt-4 text-base text-muted">
            From subject mastery to exam strategy, every part of the journey
            is guided by UK educators who teach with structure and care.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer(0.12)}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <WhyCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}