import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
    "@types": fileURLToPath(new URL("./types", import.meta.url)),
  },
  compatibilityDate: "2025-10-24",
  css: ["@/assets/css/tailwind.css", "@/assets/css/josefin.css", "@/assets/css/barlow.css"],
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: {
    dirs: [],
  },
  app: {
    baseURL: "/",
  },
  icon: {
    cssLayer: "nuxt-icon",
  },
});
