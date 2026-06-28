const marqueeItems = [
  "STEM Academic Support",
  "Mentorship",
  "500+ Students Mentored",
  "Career Guidance",
  "Exam Preparation",
  "Flexible Learning",
  "Global Educators",
  "1000+ Learning Sessions",
  "95% Parent Satisfaction",
];

export default function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <div
            key={i}
            className="mx-8 flex shrink-0 items-center gap-4 whitespace-nowrap"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-slate-300">
              {item}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#D89B1D]/70" />
          </div>
        ))}
      </div>
    </section>
  );
}