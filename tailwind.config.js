/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#020617",
        primary: "#001F6B",
        gold: "#D89B1D",
        offwhite: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-instrument)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};