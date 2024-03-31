/** @type {import('tailwindcss').Config} */
export default {
  content:["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      signature:["Poppins"],
    }
  },
  plugins: [require('tailwind-scrollbar'),],
}

