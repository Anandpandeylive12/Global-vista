"use client";

import { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

/**
 * ConnectionArc
 * Renders three layered SVG arcs between two projected points on the globe canvas,
 * plus an animated light particle that travels the path continuously.
 *
 * Props:
 *   from  { x, y }  – pixel coords of origin marker (India)
 *   to    { x, y }  – pixel coords of destination marker (UK)
 *   size  number    – canvas diameter (used for control-point scaling)
 */
const ConnectionArc = memo(function ConnectionArc({ from, to, size = 520 }) {
  const particleRef = useRef(null);
  const rafRef = useRef(null);
  const progressRef = useRef(0);

  /* ─── Bezier control point ─────────────────────────────────────── */
  const cx = (from.x + to.x) / 2;
  const cy = Math.min(from.y, to.y) - size * 0.28; // arc height

  const pathD = `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;

  /* ─── Particle animation ────────────────────────────────────────── */
  useEffect(() => {
    const svg = document.getElementById("connection-arc-svg");
    const guidePath = document.getElementById("arc-guide");
    if (!svg || !guidePath || !particleRef.current) return;

    const total = guidePath.getTotalLength();

    const animate = () => {
      progressRef.current = (progressRef.current + 0.003) % 1;
      const pt = guidePath.getPointAtLength(progressRef.current * total);
      if (particleRef.current) {
        particleRef.current.setAttribute("cx", pt.x);
        particleRef.current.setAttribute("cy", pt.y);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [from.x, from.y, to.x, to.y]);

  return (
    <svg
      id="connection-arc-svg"
      className="absolute inset-0 pointer-events-none"
      width={size}
      height={size}
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Guide path for particle (invisible) */}
        <path id="arc-guide" d={pathD} fill="none" />

        {/* Glow filter for particle */}
        <filter id="particle-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft glow for arcs */}
        <filter id="arc-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Layer 1 – thick gold, low opacity (halo) */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#D89B1D"
        strokeWidth={6}
        strokeOpacity={0.18}
        strokeLinecap="round"
        filter="url(#arc-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
      />

      {/* Layer 2 – thin bright gold */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#F0B429"
        strokeWidth={1.8}
        strokeOpacity={0.75}
        strokeLinecap="round"
        strokeDasharray="6 4"
        filter="url(#arc-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
      />

      {/* Layer 3 – white glow core */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth={0.9}
        strokeLinecap="round"
        filter="url(#arc-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
      />

      {/* Travelling particle */}
      <circle
        ref={particleRef}
        r={4}
        fill="white"
        filter="url(#particle-glow)"
        style={{ opacity: 0.95 }}
      />
      {/* Outer glow ring on particle */}
      <circle
        ref={particleRef}
        r={7}
        fill="none"
        stroke="#D89B1D"
        strokeWidth={1.5}
        strokeOpacity={0.6}
        filter="url(#arc-glow)"
        style={{ pointerEvents: "none" }}
      />
    </svg>
  );
});

export default ConnectionArc;