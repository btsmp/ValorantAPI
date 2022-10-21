/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Roboto', 'sans-serif' ],
        valorant: ['valorant', 'sans-serif'],
        agent: ['agent', 'sans-serif'],
      }
    },
  },
  plugins: [],
}