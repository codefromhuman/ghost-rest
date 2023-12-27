/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss').colors;

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#35858B',
        secondary: '#072227',
        /* HTTP Method Colors */
        http: {
          get: '#362FD9',
          post: '#27E1C1',
          put: '#7149C6',
          pathc: '#FFD93D',
          delete: '#EA5455',
          options: '#C9EEFF',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
