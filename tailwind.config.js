/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'nav-dark': '#232222',
          'primary-letter':'#469D97'
      },
    },
  },
  plugins: [],
}

