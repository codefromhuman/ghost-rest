/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss').colors;

module.exports = {
  content: [
    './src/renderer/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#384147',
        secondary: '#222A31',
        accent: '#FF2D66',
        /* HTTP Method Colors */
        http: {
          get: '#362FD9',
          post: '#27E1C1',
          put: '#7149C6',
          patch: '#FFD93D',
          delete: '#EA5455',
          options: '#C9EEFF',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
