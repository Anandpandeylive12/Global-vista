import { cn } from "@/lib/utils";

export default function Container({ children, className, as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto max-w-7xl px-6 lg:px-10", className)}>
      {children}
    </Tag>
  );
}