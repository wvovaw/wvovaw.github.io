module.exports = {
  content: [
    "layouts/**/*.{vue,js}",
    "storyblok/**/*.{vue,js}",
    "pages/**/*.vue",
    "components/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      // sans: "Roboto, sans-serif",
      sans: ["'Josefin Sans'", "sans-serif"],
      josefin: ["'Josefin Sans'", "sans-serif"],
      roboto: "Roboto",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    prefix: "",
    darkTheme: "business",
    lightTheme: "corporate",
    themes: [
      "light",
      "dark", // Nice dark theme
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate", // Nice light theme
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua", // Nice blueprint
      "lofi", // Nice minimal b&w
      "pastel", // girls gonna like this theme
      "fantasy",
      "wireframe", // Nice minimal light theme witch comic sans font
      "black", // True black theme
      "luxury",
      "dracula", // Nice dark theme
      "cmyk",
      "autumn",
      "business", // Nice strict black theme (opposite to corporate)
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
