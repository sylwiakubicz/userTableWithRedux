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
        "secondary-light": '#25292f',
        "akcent-color": '#0072a9',
        "custom-light-gray": '#F9FAFB',
        "dark-primary": '#141a2e',
        "dark-secondary": '#1f2942',
        "dark-custom-light-gray": '#1f2940 ',
        "dark-akcent-color": '#6671f8',
        "dark-text": '#cbced9'
      },
    },
  },
  plugins: [],
}