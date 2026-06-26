export const floatingAnimation = (duration = 6, distance = 16) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});