"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { staggerItem } from "@/animations/staggerContainer";

export default function WhyCard({ icon: Icon, title, items }) {
  return (
    <motion.div variants={staggerItem}>
      <GlassCard className="h-full p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
          <Icon className="h-5.5 w-5.5 text-gold" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-display text-xl text-offwhite">{title}</h3>
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted">
              <span className="h-1 w-1 rounded-full bg-gold/70" />
              {item}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}