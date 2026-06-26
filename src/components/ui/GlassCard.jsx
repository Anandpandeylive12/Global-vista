import { cn } from "@/lib/utils";

export default function GlassCard({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        hover &&
          "transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.07] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}