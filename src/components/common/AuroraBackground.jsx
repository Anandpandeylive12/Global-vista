export default function AuroraBackground({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#3B1768]/30 blur-[120px]" />
      <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-[#001F6B]/30 blur-[130px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[140px]" />
    </div>
  );
}