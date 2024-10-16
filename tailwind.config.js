const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
                sans: ['Playfair Display', ...defaultTheme.fontFamily.sans],
            },
      colors: {
        eucalyptus:'#5B7769',
        tiki: '#C66E4D',
        cream: '#f9e5d8',
        foundation: '#e3c6af',
        emerald: '#193d2d',
        camel: '#b5875d'
      }
    },
  },
  plugins: [],
}

