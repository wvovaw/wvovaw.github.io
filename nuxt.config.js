import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  alias: {
    "@": fileURLToPath(new URL(".", import.meta.url)),
  },
  devtools: { enabled: false },
  css: ["@/assets/css/josefin.css", "@/assets/css/barlow.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image", "@nuxt/content"],
  components: {
    dirs: [],
  },
  app: {
    baseURL: "/",
  },
});
