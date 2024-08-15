// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // runtimeConfig: {
  //   public: {
  //     apiBase: "https://vadalar.uz/api",
  //   },
  // },
  modules: ["@pinia/nuxt", "nuxt-swiper", "@nuxtjs/i18n"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
});