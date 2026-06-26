import { cn } from "@/lib/utils";

export default function SectionLabel({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold",
        className
      )}
    >
      <span className="h-px w-6 bg-gold/60" />
      {children}
    </span>
  );
}