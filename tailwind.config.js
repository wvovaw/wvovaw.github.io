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
  safelist: [
    // blends
    "mix-blend-normal",
    "mix-blend-multiply",
    "mix-blend-screen",
    "mix-blend-overlay",
    "mix-blend-darken",
    "mix-blend-lighten",
    "mix-blend-color-dodge",
    "mix-blend-color-burn",
    "mix-blend-hard-light",
    "mix-blend-soft-light",
    "mix-blend-difference",
    "mix-blend-exclusion",
    "mix-blend-hue",
    "mix-blend-saturation",
    "mix-blend-color",
    "mix-blend-luminosity",
    "mix-blend-plus-lighter",
    // Heights
    "h-full",
    "h-fit",
    "h-screen",
    "h-auto",
    // Width
    "w-full",
    "w-fit",
    "w-screen",
    "w-aeuto",
    // Place content
    "place-content-start",
    "place-content-center",
    "place-content-end",
    // Place items
    "place-items-start",
    "place-items-center",
    "place-items-end",
    // Text align
    "text-start",
    "text-center",
    "text-end",
    // Text sizes
    "text-5xl",
    "text-4xl",
    "text-3xl",
    "text-2xl",
    "text-xl",
    "text-lg",
    // Font weigh
    "font-thin",
    "font-normal",
    "font-medium",
    "font-bold",
    "font-extrabold",
  ],
  plugins: [require("@tailwindcss/typography")],
};
