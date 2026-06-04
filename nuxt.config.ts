import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
    "@types": fileURLToPath(new URL("./types", import.meta.url)),
  },
  css: ["@/assets/css/tailwind.css", "@/assets/css/josefin.css", "@/assets/css/barlow.css"],
  compatibilityDate: "2026-06-05",
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/content", "nuxt-umami"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: "/",
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [],
    },
  },
  icon: {
    cssLayer: "components",
  },
  umami: {
    id: "0f45b084-979d-4b99-8041-5e4b0cadfa1f",
    host: "https://umami.qpup.ru",
    autoTrack: true,
  },
});
