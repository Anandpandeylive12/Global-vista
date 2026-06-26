import GlassCard from "@/components/ui/GlassCard";

export default function CountryCard({ name, tag, description }) {
  return (
    <GlassCard className="p-8 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-gold">{tag}</p>
      <h3 className="mt-3 font-display text-2xl text-offwhite">{name}</h3>
      <p className="mt-3 text-sm text-muted">{description}</p>
    </GlassCard>
  );
}