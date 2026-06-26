"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { staggerItem } from "@/animations/staggerContainer";

export default function ServiceCard({ title, description, items }) {
  return (
    <motion.div variants={staggerItem}>
      <GlassCard className="h-full p-8">
        <h3 className="font-display text-xl text-offwhite">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold"
            >
              {item}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}