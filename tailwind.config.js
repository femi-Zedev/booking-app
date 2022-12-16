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
        'secondary': '#FA8F54',
        'light': '#FAFAFB',
        'lighter': '#F4F5F6',
      },
    },
  },
  plugins: [],
}
