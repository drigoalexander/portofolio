// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@hypernym/nuxt-anime",
    "@nuxtjs/google-fonts",
  ],
  anime: {
    provide: true,
    composables: true,
  },
  googleFonts: {
    families: {
      MuseoModerno: true,
      Montserrat: true,
    },
    preload: true,
    preconnect: true,
  },
});
