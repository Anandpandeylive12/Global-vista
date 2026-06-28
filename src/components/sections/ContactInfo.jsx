"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { slideInLeft } from "@/animations/slideIn";

const details = [
  { icon: Mail, label: "Email", value: "GlobalVistaEducators@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 98145 61099" },
  // { icon: MapPin, label: "Office", value: "Punjab, India & West Midlands, UK" },
  // { icon: Clock, label: "Hours", value: "Mon–Sat, 9:00 AM – 6:00 PM (GMT +5:30)" },
];

export default function ContactInfo() {
  return (
    <motion.div {...slideInLeft(0)}>
      <GlassCard className="h-full p-10" hover={false}>
        <h3 className="font-display text-2xl text-offwhite">Get in touch</h3>
        <p className="mt-3 text-sm text-muted">
          Reach out directly, or use the form and we'll respond within one
          business day.
        </p>

        <div className="mt-8 flex flex-col gap-6">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                <d.icon className="h-4.5 w-4.5 text-gold" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{d.label}</p>
                <p className="mt-1 text-sm text-offwhite">{d.value}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}