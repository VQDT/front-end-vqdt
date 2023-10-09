/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "#108ABD",
        Blue70: "#108ABDCC",
        Blue25: "#108ABD25",
        Concrete: "#95A5A6",
        Green: "#309F35",
        Green70: "#309F35CC",
        Green25: "#309F3525",
        LightTextSecondary: "#00000099",
        Red: "#F63B42",
        Red70: "#F63B42CC",
        Red25: "#F63B4225",
        Orange: "#E67E22",
        Orange70: "#E67E22CC",
        Orange25: "#E67E2225",
        Silver: "#C5C5C5",
        Tertiary: "#EEF1F4",
        White: "#FFFFFF",
        Midnight: "#2C3E50",
        Secondary: "#9BA5B7",
        Light: "#EEF1F4",
        Darker: "#596978",
      },
    },
  },
  plugins: [],
};
