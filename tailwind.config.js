/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#f7f7f7',
        "secondary": '#22272b',
        "akcent-color": '#0072a9'
      },
    },
  },
  plugins: [],
}