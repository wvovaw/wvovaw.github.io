import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
    "@types": fileURLToPath(new URL("./types", import.meta.url)),
  },
  compatibilityDate: "2025-10-24",
  css: ["@/assets/css/josefin.css", "@/assets/css/barlow.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
  ],
  components: {
    dirs: [],
  },
  app: {
    baseURL: "/",
  },
});
