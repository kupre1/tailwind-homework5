/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#00040f",
        secondery: "#999999",
        colorbutton: " #E50000",
        main: "#141414",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};
