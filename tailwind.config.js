/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0F766E", dark: "#115E59", light: "#5EEAD4" },
        ink: { DEFAULT: "#0F172A", soft: "#334155", faint: "#94A3B8" },
        accent: { DEFAULT: "#F97360", soft: "#FDB7AE" }
      },
      backgroundImage: {
        'hero-light': "radial-gradient(40% 60% at 10% 10%, rgba(94,234,212,0.30), transparent 60%), radial-gradient(40% 60% at 90% 20%, rgba(249,115,96,0.25), transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(15,118,110,0.20), transparent 60%)",
        'hero-dark': "radial-gradient(40% 60% at 10% 10%, rgba(94,234,212,0.15), transparent 60%), radial-gradient(40% 60% at 90% 20%, rgba(249,115,96,0.15), transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(15,118,110,0.35), transparent 60%)"
      },
      boxShadow: { 'glow': '0 0 40px rgba(94,234,212,0.35)' }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
