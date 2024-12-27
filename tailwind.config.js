/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,css}"],
  theme: {
    extend: {
          fontFamily: {
            'Barlow' : ['Barlow', 'sans-serif'],
            'Fraunces' : ['Fraunces', 'sans-serif'],
          },
      },
  },
  plugins: [],
}

