/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "" + "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B71FE',
        'light': '#FAFAFB',
        'lighter': '#F4F5F6',
      },
    },
  },
  plugins: [],
}
