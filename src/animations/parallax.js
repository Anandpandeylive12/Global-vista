export const parallaxOffset = (scrollYProgress, distance = 80) => ({
  range: [0, 1],
  output: [distance, -distance],
  apply: (transform) => transform(scrollYProgress, [0, 1], [distance, -distance]),
});