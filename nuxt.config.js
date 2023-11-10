// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css", "@/assets/css/josefin.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image"],
  components: {
    dirs: [],
  },
  app: {
    baseURL: "/",
  },
  routeRules: {
    "/blog": {prerender: false}
  },
});
