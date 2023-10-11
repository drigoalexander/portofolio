const url = import.meta.env.PROD;

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
    documentDriven: true,
  },
  runtimeConfig: {
    public: {
      url,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@hypernym/nuxt-anime",
    "@nuxtjs/google-fonts",
    "nuxt-multi-tenancy",
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
      MuseoModerno: true,
      Montserrat: true,
    },
    preload: true,
    preconnect: true,
  },
});
