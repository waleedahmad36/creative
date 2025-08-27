/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '6xl': '1200px', // Customizing the max-w-6xl to 1200px
      },
    },
  },
  plugins: [],
}