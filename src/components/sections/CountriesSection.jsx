"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { slideInLeft, slideInRight } from "@/animations/slideIn";
import { fadeUp } from "@/animations/fadeUp";

export default function CountriesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="text-center">
          <SectionLabel className="justify-center">Two Nations, One Goal</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
            Bridging Education Across Borders
          </h2>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
          <motion.div {...slideInLeft(0.1)}>
            <GlassCard className="p-8 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Origin</p>
              <h3 className="mt-3 font-display text-2xl text-offwhite">India</h3>
              <p className="mt-3 text-sm text-muted">
                Ambitious students across India, ready for world-class
                academic mentorship.
              </p>
            </GlassCard>
          </motion.div>

          <div className="relative flex h-32 items-center justify-center">
            <svg viewBox="0 0 300 60" className="w-full max-w-xs overflow-visible">
              <motion.path
                d="M10 30 Q150 -10 290 30"
                fill="none"
                stroke="#D89B1D"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              <motion.circle
                r="4"
                fill="#D89B1D"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: "path('M10 30 Q150 -10 290 30')" }}
              />
            </svg>
          </div>

          <motion.div {...slideInRight(0.1)}>
            <GlassCard className="p-8 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Destination</p>
              <h3 className="mt-3 font-display text-2xl text-offwhite">United Kingdom</h3>
              <p className="mt-3 text-sm text-muted">
                Experienced UK educators delivering global academic
                standards, live.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}