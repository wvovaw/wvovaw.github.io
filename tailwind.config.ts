import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "layouts/**/*.{vue,js,ts}",
    "pages/**/*.vue",
    "components/**/*.{vue,js,ts}",
    "app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["'Josefin Sans'", "sans-serif"],
      roboto: "Roboto",
    },
  },
  plugins: [typography, daisyui],
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
