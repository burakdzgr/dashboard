/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'mainBlue': '#0437b7',
      'mainGray': '#f2f2f2',
      'mainHoverGray': '#e7e7e7',
      'mainBorderColor': '#e7e7e7',
      'textColor': '#64748b',
      'textWhite': '#fff',
      'white': '#fff',
      'softRed': '#F05252',
      'emerald': '#10b981',
      'sky': '#0284c7',
      'sky-100': '#e0f2fe',
      'sky-400': '#38bdf8',
      'pink-400': '#f472b6',
      'cyan-400': '#22d3ee',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      minimal: '10px',
      'sidebar-list': ['1rem', {
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.85)'
      }],
    }
  },
  plugins: [],
};