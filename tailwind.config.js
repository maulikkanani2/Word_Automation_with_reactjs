/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : "#124EE8",
        'secondary' : "#666",
        'lightPurple': '#3E334E'
      },
      backgroundColor: {
        'primary' : "#124EE8",
        'secondary' : "#666",
        'lightPurple': '#3E334E' 
      },
      boxShadow: {
        'card' : '0px 15px 80px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [
   
  ],
})

