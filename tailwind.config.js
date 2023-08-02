const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "./components/**/*.{js,vue,ts}"),
    join(__dirname, "./layouts/**/*.vue"),
    join(__dirname, "./pages/**/*.vue"),
    join(__dirname, "./plugins/**/*.{js,ts}"),
    join(__dirname, "./nuxt.config.{js,ts}"),
    join(__dirname, "./app.vue"),
  ],
  // mode: 'jit',
  // purge: ['./pages/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1f0030',
        'secondary': '#D3D1C1',
        'light-purple': '#7a26aa73',
        'light-white': '#ffffff08',
        'light-green': '#00ffb2',
        'opacity-green': '#27f4b669'
      },
      boxShadow: {
        'card': '0 0 20px rgb(0 0 0 / 22%)',
      }
    },
  },
  plugins: [],
}

