/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#40404D',
        'brandPrimary': '#4CAF4F',
        'neutralGrey': '#7171717',
      }
    },
  },
  plugins: [],
}