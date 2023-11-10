/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "layouts/**/*.{vue,js,ts}",
    "pages/**/*.vue",
    "components/**/*.{vue,js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Josefin Sans'", "sans-serif"],
      roboto: "Roboto",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    prefix: "",
    darkTheme: "business",
    lightTheme: "corporate",
    themes: ["corporate", "business"],
  },
};
