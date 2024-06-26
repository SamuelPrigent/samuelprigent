const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      md: "710px",
      lg: "1020px",
    },
    extend: {
      colors: {
        medGray: "#A3A3A3",
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      gridTemplateColumns: {
        custom1: "repeat(1, minmax(100px, 1fr))",
        custom2: "repeat(2, minmax(100px, 1fr))",
        custom3: "repeat(3, minmax(100px, 1fr))",
        custom4: "repeat(4, minmax(100px, 1fr))",
      },
      animation: {
        spotlight: "spotlight 1.2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".area-1n1": {
          gridArea: "inherit",
        },
        ".area-1n2": {
          gridArea: "1 / 2",
        },
        ".area-2n2": {
          gridArea: "2 / 2",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
