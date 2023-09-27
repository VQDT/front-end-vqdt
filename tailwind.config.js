/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#108ABD",
        primary_dark: "#176181",
        primary_light: "#61B3D4",
        primary_red: "#F63B42",
        concrete: "#95A5A6",
        secondary: "#F5F5F5",
        secondary_dark: "#C5C5C5",
        alert: "#E52207",
        alert_light: "#f55b47",
        attention: "#F3BE02",
        attention_light: "#fAD345",
        confirm: "#168821",
        confirm_light: "#3CAC47"
      }
    },
  },
  plugins: [],
}

