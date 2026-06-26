export const fadeUp = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-80px" },
});

export const fadeUpScroll = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
});