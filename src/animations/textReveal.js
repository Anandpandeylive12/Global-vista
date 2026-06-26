export const textReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const charReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] },
  }),
};  