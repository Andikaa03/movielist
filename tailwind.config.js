/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  compilerOptions: {
    isCustomElement: (tag) => tag === 'v-img',
  },
  plugins: [require("daisyui")],
}