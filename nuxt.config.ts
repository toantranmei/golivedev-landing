// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Be Vietnam Pro": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],
});
