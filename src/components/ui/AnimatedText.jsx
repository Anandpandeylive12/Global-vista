"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedText({ text, as: Tag = "h2", className, delay = 0 }) {
  const words = text.split(" ");

  return (
    <Tag className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}