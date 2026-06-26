import { Quote } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function TestimonialCard({ name, role, quote }) {
  return (
    <GlassCard className="h-full p-8" hover={false}>
      <Quote className="h-6 w-6 text-gold/60" />
      <p className="mt-5 text-base leading-relaxed text-offwhite/90">{quote}</p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="font-display text-base text-offwhite">{name}</p>
        <p className="text-xs text-muted">{role}</p>
      </div>
    </GlassCard>
  );
}