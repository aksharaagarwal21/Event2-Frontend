/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#1c1c1c",
        "brand-orange": "#f97316",
        "brand-gold": "#d4a34b",
        "brand-glow": "#ffae42",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        nav: ['"Orbitron"', "sans-serif"],
      },
      boxShadow: {
        "inner-glow": "inset 0 0 10px 0 rgba(255, 174, 66, 0.6)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
