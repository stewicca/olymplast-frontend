/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["Nunito Sans", 'sans-serif'],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
}
