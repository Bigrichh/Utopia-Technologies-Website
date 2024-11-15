/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ab: ['Anybody'],
        ws: ['Work Sans'],
      },
    },
  },
  plugins: [],
}

