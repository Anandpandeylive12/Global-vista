"use client";

import { useMemo } from "react";

function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function GalaxyBackground() {
  const stars = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: 90 }).map((_, i) => ({
      id: `star-${i}`,
      top: rand() * 100,
      left: rand() * 100,
      size: rand() * 2 + 1,
      delay: rand() * 4,
      duration: rand() * 3 + 2,
    }));
  }, []);

  const particles = useMemo(() => {
    const rand = seededRandom(108);
    return Array.from({ length: 22 }).map((_, i) => ({
      id: `particle-${i}`,
      top: rand() * 100,
      left: rand() * 100,
      size: rand() * 3 + 2,
      delay: rand() * 6,
      duration: rand() * 6 + 6,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 overflow-hidden bg-navy"
    >
      {/* Base deep navy gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#020617_0%,#020617_40%,#01030a_100%)]" />

      {/* Blue nebula glow */}
      <div className="absolute -top-1/4 left-1/4 h-[60vw] w-[60vw] rounded-full bg-[#001F6B]/40 blur-[140px]" />
      <div className="absolute top-1/3 -right-1/4 h-[50vw] w-[50vw] rounded-full bg-[#0B2A8A]/30 blur-[160px]" />

      {/* Subtle purple glow */}
      <div className="absolute bottom-0 left-1/3 h-[45vw] w-[45vw] rounded-full bg-[#3B1768]/30 blur-[150px]" />

      {/* Golden ambient glow, very subtle */}
      <div className="absolute top-1/2 left-1/2 h-[35vw] w-[35vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D89B1D]/[0.06] blur-[160px]" />

      {/* Tiny stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Golden floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold/70 animate-float"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 8px 2px rgba(216,155,29,0.5)",
          }}
        />
      ))}

      {/* Noise texture overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_55%,#020617_100%)]" />
    </div>
  );
}