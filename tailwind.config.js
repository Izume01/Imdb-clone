/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'sans': ['Roboto', 'serif'],
      'karla': ['Karla', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}