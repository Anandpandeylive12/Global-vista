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
    items: ["9th", "10th", "11th", "12th", "Olympiad & Competitive Exam"],
  },
  {
    icon: CalendarClock,
    title: "Flexible Learning",
    items: ["Live online Classes", "Recorded Sessions", "Learning Resources","Self-paced Learning"],
  },
  {
    icon: Compass,
    title: "Mentorship",
    items: ["Parent Engagement", "Career Counselling", "Skill Development","Mentoring & Coaching"],
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <SectionLabel>Why Global Vista</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
            We bring the world’s finest education system to India, opening doors of opportunity for your child’s future.
          </h2>
          
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