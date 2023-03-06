export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css", "@/assets/css/josefin.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "uqbMRn9enHzcZPsUC9zU0gtt",
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        // }
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
  router: {
    baseURL: "/",
  },
});
