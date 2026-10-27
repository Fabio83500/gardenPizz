/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs tirées du logo Garden Pizz
        garden: {
          red: "#E53032",
          "red-dark": "#B8221F",
          gold: "#FAC969",
          "gold-deep": "#E9A93B",
          basil: "#1F9D55",
          ink: "#120E0C",
          coal: "#1C1512",
          card: "#231B17",
          line: "#3A2E27",
          cream: "#FFF6E5",
          muted: "#CDBFAE",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "Impact", "sans-serif"],
        brush: ["var(--font-kaushan)", "cursive"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FAC969 0%, #E9A93B 100%)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        kenburns: {
          from: { transform: "scale(1.02)" },
          to: { transform: "scale(1.14)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--r, 0deg))" },
        },
        glow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(0.95)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        ring: {
          "0%, 100%": { transform: "rotate(0)" },
          "20%, 60%": { transform: "rotate(-14deg)" },
          "40%, 80%": { transform: "rotate(14deg)" },
        },
        scrollcue: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        kenburns: "kenburns 22s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        glow: "glow 5s ease-in-out infinite",
        ring: "ring 0.6s ease-in-out",
        scrollcue: "scrollcue 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
