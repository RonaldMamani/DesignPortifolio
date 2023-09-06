/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-purple': '#775cde',
        'yelow-golden': '#f6a560',
        'pink-white': '#f39e9e',
        'pink-orange': '#eb7565',
        'blue-ice': '#61c4b7',
        'purple-vinho': '#552049',
        'black-person': '#030303',
        'gray-person': '#7a7a6e',
        'white-person': '#fff7f0'
      }
    },
  },
  plugins: [],
}

