// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "Hãy làm quen với GoLiveDev, hệ thống đào tạo tập trung vào việc xây dựng trải nghiệm học tập tốt nhất, nhằm có được chất lượng tốt nhất cho đầu ra.",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:url",
          content: "https://www.golivedev.com/about",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:description",
          content:
            "Hãy làm quen với GoLiveDev, hệ thống đào tạo tập trung vào việc xây dựng trải nghiệm học tập tốt nhất, nhằm có được chất lượng tốt nhất cho đầu ra.",
        },
        {
          property: "og:title",
          content: "GoLiveDev - Hệ thống đào tạo lập trình sáng tạo",
        },
      ],
      title: "GoLiveDev - Hệ thống đào tạo lập trình sáng tạo",
    },
    cdnURL: '/',
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Be Vietnam Pro": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
    "@nuxtjs/robots",
    'nuxt-swiper',
  ],
});
