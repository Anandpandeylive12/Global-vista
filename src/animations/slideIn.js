export const slideInLeft = (delay = 0, distance = 48) => ({
  initial: { opacity: 0, x: -distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export const slideInRight = (delay = 0, distance = 48) => ({
  initial: { opacity: 0, x: distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});