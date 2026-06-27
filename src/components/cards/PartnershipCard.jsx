"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { staggerItem } from "@/animations/staggerContainer";

export default function PartnershipCard({ icon: Icon, title, description }) {
  return (
    <motion.div variants={staggerItem}>
      <GlassCard className="group h-full p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/15 group-hover:shadow-[0_0_24px_rgba(216,155,29,0.25)]">
          <Icon className="h-5.5 w-5.5 text-gold" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-display text-lg text-offwhite">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </GlassCard>
    </motion.div>
  );
}