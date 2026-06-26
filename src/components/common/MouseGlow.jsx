"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed -z-40 h-[420px] w-[420px] rounded-full bg-gold/[0.06] blur-[100px]"
      style={{ left: springX, top: springY, translateX: "-50%", translateY: "-50%" }}
    />
  );
}