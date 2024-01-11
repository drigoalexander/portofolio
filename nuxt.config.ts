export default defineNuxtConfig({
  devtools: { enabled: true },

  content: {
    highlight: {
      theme: "github-dark",
    },
    documentDriven: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@hypernym/nuxt-anime",
    "@nuxtjs/google-fonts",
    "nuxt-multi-tenancy",
    "nuxt-viewport",
    "@nuxtjs/eslint-module",
  ],
  multiTenancy: {
    rootDomains: ["drigoalexander.local", "drigoalexander.vercel.app"],
    tenantDynamicRoute: "site",
  },
  anime: {
    provide: true,
    composables: true,
  },
  googleFonts: {
    families: {
      MuseoModerno: {
        wght: "200..900",
      },
      "Open Sans": {
        wght: "200..900",
      },
    },
    preload: true,
    preconnect: true,
  },
});
