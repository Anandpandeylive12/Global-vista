"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { useCountUp } from "@/hooks/useCountUp";
import { staggerItem } from "@/animations/staggerContainer";

export default function StatCard({ value, suffix = "", label }) {
  const { ref, value: animated } = useCountUp(value);

  return (
    <motion.div variants={staggerItem} ref={ref}>
      <GlassCard hover={false} className="p-8 text-center">
        <p className="font-display text-4xl text-gold sm:text-5xl">
          {animated}
          {suffix}
        </p>
        <p className="mt-2 text-sm text-muted">{label}</p>
      </GlassCard>
    </motion.div>
  );
}