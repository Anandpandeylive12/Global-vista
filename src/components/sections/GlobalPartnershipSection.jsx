"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Users,
  Plane,
  BookOpen,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import PartnershipCard from "@/components/cards/PartnershipCard";
import { fadeUp } from "@/animations/fadeUp";
import { staggerContainer } from "@/animations/staggerContainer";
import { slideInLeft } from "@/animations/slideIn";

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const partnershipCards = [
  {
    icon: Building2,
    title: "India Operations",
    description:
      "Kaizen BMS manages local operations, student support, and institutional partnerships across India.",
  },
  {
    icon: GraduationCap,
    title: "UK Academic Excellence",
    description:
      "Students receive guidance and mentorship inspired by the UK's world-renowned education system.",
  },
  {
    icon: Users,
    title: "Local Student Support",
    description:
      "Dedicated support teams provide assistance throughout the learning journey.",
  },
  {
    icon: Plane,
    title: "Global Opportunities",
    description:
      "Students gain access to international pathways, mentorship and future opportunities.",
  },
];

// Floating education icons positioned around the illustration, each with
// its own gentle float rhythm so they never move in perfect unison.
const floatingIcons = [
  { Icon: BookOpen, top: "10%", left: "12%", delay: 0, duration: 6 },
  { Icon: GraduationCap, top: "18%", left: "78%", delay: 0.8, duration: 7 },
  { Icon: Users, top: "72%", left: "16%", delay: 1.4, duration: 6.5 },
  { Icon: Cpu, top: "78%", left: "74%", delay: 0.4, duration: 7.5 },
];

/* -------------------------------------------------------------------------- */
/* Left illustration: India ↔ UK glowing connection with floating icons     */
/* -------------------------------------------------------------------------- */

function PartnershipIllustration() {
  return (
    <motion.div {...slideInLeft(0)} className="relative mx-auto w-full max-w-md">
      <div className="relative aspect-square w-full">
        {/* Atmospheric glow layers */}
        <div className="absolute inset-0 rounded-full bg-[#001F6B]/35 blur-[90px]" />
        <div className="absolute inset-0 scale-90 rounded-full bg-[#1E3A8A]/20 blur-[110px]" />

        {/* Slow-rotating outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[6%] rounded-full border border-gold/15"
        />
        {/* Counter-rotating inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[16%] rounded-full border border-white/10"
        />

        {/* Core globe-style sphere */}
        <div className="absolute inset-[24%] overflow-hidden rounded-full border border-gold/20 bg-gradient-to-br from-[#1E3A8A] via-[#001F6B] to-navy shadow-[0_0_60px_rgba(0,31,107,0.5)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.12),transparent_55%)]" />
        </div>

        {/* India ↔ UK glowing connection */}
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="partnershipArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D89B1D" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#D89B1D" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#D89B1D" stopOpacity="0.15" />
            </linearGradient>
            <filter id="partnershipGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M 30 66 Q 50 28 72 34"
            fill="none"
            stroke="url(#partnershipArc)"
            strokeWidth="0.6"
            strokeLinecap="round"
            filter="url(#partnershipGlow)"
            opacity="0.9"
          />

          <circle r="1.2" fill="#FFFFFF" filter="url(#partnershipGlow)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 30 66 Q 50 28 72 34" />
            <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
          </circle>

          <circle cx="30" cy="66" r="1.8" fill="#D89B1D" filter="url(#partnershipGlow)">
            <animate attributeName="r" values="1.6;2.4;1.6" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="72" cy="34" r="1.8" fill="#D89B1D" filter="url(#partnershipGlow)">
            <animate attributeName="r" values="1.6;2.4;1.6" dur="2.6s" begin="1.3s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Country labels */}
        <span className="absolute left-[20%] top-[68%] -translate-x-1/2 text-[11px] font-medium uppercase tracking-[0.2em] text-offwhite/80">
          India
        </span>
        <span className="absolute left-[78%] top-[26%] -translate-x-1/2 text-[11px] font-medium uppercase tracking-[0.2em] text-offwhite/80">
          UK
        </span>

        {/* Floating education icons */}
        {floatingIcons.map(({ Icon, top, left, delay, duration }, i) => (
          <motion.div
            key={i}
            className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
            style={{ top, left }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
          >
            <Icon className="h-4.5 w-4.5 text-gold" strokeWidth={1.75} />
          </motion.div>
        ))}

        {/* Ambient floating particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={`particle-${i}`}
            className="absolute rounded-full bg-gold/60"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              animation: `partnership-float ${6 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
              boxShadow: "0 0 8px 2px rgba(216,155,29,0.4)",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes partnership-float {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(6px, -10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main section                                                               */
/* -------------------------------------------------------------------------- */

export default function GlobalPartnershipSection() {
  return (
    <section className="relative overflow-hidden px-6 py-14 lg:px-10">
      {/* Section-local atmospheric accents */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#001F6B]/20 blur-[130px]" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-gold/[0.06] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
          <SectionLabel className="justify-center">Global Collaboration</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl lg:text-5xl">
             Partnership with KaizenBMS for Global Operations
          </h2>
        
        </motion.div>
        {/* CTAs */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
         
        </motion.div>
      </div>
    </section>
  );
}