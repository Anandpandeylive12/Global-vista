"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { staggerItem } from "@/animations/staggerContainer";

export default function EducatorCard({ name, role, initials }) {
  return (
    <motion.div variants={staggerItem}>
      <GlassCard className="group overflow-hidden p-0">
        <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-primary/40 to-navy">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-2xl font-display text-gold backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            {initials}
          </div>
          <GraduationCap className="absolute bottom-4 right-4 h-5 w-5 text-gold/60" />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl text-offwhite">{name}</h3>
          <p className="mt-1 text-sm text-gold">{role}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}