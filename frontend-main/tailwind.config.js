/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        marquee: 'marquee 40s linear infinite', // Durée de l'animation
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      
      boxShadow: {
        "custom-lg": "0px 0px 15px 3px rgba(23,23,23, 0.20)",
        "custom-md": "0px 0px 10px 2px rgba(23,23,23, 0.16)",
        "custom-sm": "0px 0px 6px 2px rgba(23,23,23, 0.16)",
      },
    },
  },
  plugins: [],
}
