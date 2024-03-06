/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fylo_dark_blue: "hsl(243, 87%, 12%)",
        fylo_saturated_blue: "hsl(238, 22%, 44%)",
        fylo_bright_blue: "hsl(224, 93%, 58%)",
        fylo_moderate_cyan: "hsl(170, 45%, 43%)",
        fylo_grayish_blue: "hsl(240, 75%, 98%)",
        fylo_gray: "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
