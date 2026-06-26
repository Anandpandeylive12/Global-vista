"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/animations/fadeUp";

export default function MapSection() {
  return (
    <section className="relative px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)}>
          <GlassCard className="relative flex h-80 items-center justify-center overflow-hidden p-0" hover={false}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,31,107,0.4),transparent_60%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-xl text-offwhite">
                Rohtak, Haryana, India
              </p>
              <p className="mt-1 text-sm text-muted">
                Map preview — connect Google Maps for a live embed.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}