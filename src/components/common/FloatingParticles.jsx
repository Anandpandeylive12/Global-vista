"use client";

import { useMemo } from "react";

export default function FloatingParticles({ count = 12, className = "" }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `fp-${i}`,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
  }, [count]);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold/60 animate-float"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 8px 2px rgba(216,155,29,0.45)",
          }}
        />
      ))}
    </div>
  );
}