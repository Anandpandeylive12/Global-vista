"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  NotebookPen,
  CalendarClock,
  Compass,
} from "lucide-react";

import SectionLabel from "@/components/ui/SectionLabel";
import WhyCard from "@/components/cards/WhyCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer } from "@/animations/staggerContainer";

const cards = [
  {
    icon: FlaskConical,
    title: "STEM Academic Support",
    items: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
  {
    icon: NotebookPen,
    title: "Exam Preparation",
    items: ["9th", "10th", "11th", "12th", "Competitive Exams"],
  },
  {
    icon: CalendarClock,
    title: "Flexible Learning",
    items: [
      "Live Online Classes",
      "Recorded Sessions",
      "Learning Resources",
      "Self-Paced Learning",
    ],
  },
  {
    icon: Compass,
    title: "Mentorship",
    items: [
      "Parent Engagement",
      "Career Counselling",
      "Skill Development",
      "Coaching",
    ],
  },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 lg:px-10">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-[#001F6B]/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-[#D89B1D]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)}>
            <SectionLabel className="justify-center">
              Services
            </SectionLabel>
          </motion.div>

          <motion.h1
            {...fadeUp(0.12)}
            className="mt-5 font-display text-4xl text-offwhite sm:text-5xl lg:text-6xl"
          >
            Support Built Around How You Learn
          </motion.h1>

          <motion.p
            {...fadeUp(0.24)}
            className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg"
          >
            From academic excellence to mentorship and career guidance,
            every service is designed to empower students and support parents
            throughout the learning journey.
          </motion.p>
        </div>

        {/* Service Cards */}
        <motion.div
          {...staggerContainer(0.1)}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <WhyCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}