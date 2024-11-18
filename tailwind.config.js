/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
    colors: {
      mainBlue: "#001e43",
      mainGray: "#f4f6f9",
      mainHoverGray: "#e7e7e7",
      mainBorderColor: "#e7e7e7",
      textColor: "#64748b",
      customGray: "#bdc3c7",
      customBlack: "#010101",
      textWhite: "#fff",
      white: "#fff",
      softRed: "#F05252",
      emerald: "#10b981",
      cardBlue: "#c3ebfa",
      "sky-100": "#e0f2fe",
      "sky-400": "#38bdf8",
      "pink-400": "#f472b6",
      "cyan-400": "#22d3ee",
    },
    fontSize: {
      sm: ["0.8rem", { lineHeight: "1.2rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1.1" }],
      "8xl": ["6rem", { lineHeight: "1.1" }],
      "9xl": ["8rem", { lineHeight: "1.1" }],
      minimal: ["10px", { lineHeight: "1rem" }],
      "sidebar-list": [
        "1rem",
        {
          fontWeight: 500,
          color: "rgba(255, 255, 255, 0.85)",
          lineHeight: "1.5rem",
        },
      ],
    },
  },
  plugins: [require("flowbite/plugin")],
};
