import { cn } from "@/lib/utils";
import SectionLabel from "@/components/ui/SectionLabel";

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <SectionLabel className={align === "center" ? "justify-center" : ""}>
          {label}
        </SectionLabel>
      )}
      <h2 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted">{description}</p>
      )}
    </div>
  );
}