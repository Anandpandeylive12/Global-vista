const items = [
  "STEM Support",
  "Mentorship",
  "Career Guidance",
  "Exam Preparation",
  "Flexible Learning",
  "UK Educators",
];

export default function MarqueeSection() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-6">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 pr-12">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-slate-300"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-[#D89B1D]/70" />
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-12 pr-12" aria-hidden="true">
          {[...items, ...items].map((item, i) => (
            <span
              key={`dup-${i}`}
              className="flex items-center gap-3 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-muted"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-[#D89B1D]/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}