"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer, staggerItem } from "@/animations/staggerContainer";
import {
  UserPlus,
  MonitorPlay,
  Video,
  MessageCircle,
  Users,
  ClipboardCheck,
  BarChart3,
  Briefcase,
  Trophy,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register & Enrol",
    description:
      "Complete your registration and choose the learning pathway that best fits your academic goals.",
  },
  {
    number: "02",
    icon: MonitorPlay,
    title: "Attend Live Interactive Classes",
    description:
      "Join engaging live sessions led by experienced educators and international mentors.",
  },
  {
    number: "03",
    icon: Video,
    title: "Access Recorded Lessons Anytime",
    description:
      "Revisit concepts and learn at your own pace through our recorded lesson library.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Discussion & Doubt-Clearing Sessions",
    description:
      "Participate in interactive discussions and dedicated sessions to strengthen understanding.",
  },
  {
    number: "05",
    icon: Users,
    title: "Personalised Mentoring & Guidance",
    description:
      "Receive one-to-one mentoring tailored to your strengths, goals and learning style.",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Assignments & Practice Activities",
    description:
      "Apply your learning through assessments, projects and practical activities.",
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Track Progress & Receive Feedback",
    description:
      "Monitor academic growth through regular reviews, reports and mentor feedback.",
  },
  {
    number: "08",
    icon: Briefcase,
    title: "Develop Academic & Career Skills",
    description:
      "Build leadership, communication and future-ready skills alongside academics.",
  },
  {
    number: "09",
    icon: Trophy,
    title: "Achieve Goals with Confidence",
    description:
      "Progress toward university admissions, competitive exams and future career success.",
  },
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
         className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={staggerItem}>
              <GlassCard className="group relative h-full p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/30">

  <div className="flex items-start gap-4">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 backdrop-blur-sm">
      <step.icon className="h-7 w-7 text-gold" strokeWidth={2} />
    </div>

    <div className="flex-1">
      <span className="text-sm font-semibold text-gold">
        Step {step.number}
      </span>

      <h3 className="mt-1 font-display text-xl text-offwhite leading-snug">
        {step.title}
      </h3>
    </div>
  </div>

  <p className="mt-6 text-sm leading-relaxed text-muted">
    {step.description}
  </p>

</GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}