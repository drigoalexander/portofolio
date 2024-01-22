export default defineNuxtConfig({
  devtools: { enabled: true },
  // debug: true,

  content: {
    highlight: {
      theme: "github-dark",
    },
    documentDriven: true,
  },
  gsap: {
    provide: true,
    extraPlugins: {
      flip: true,
      draggable: true,
      scrollTrigger: true,
      scrollTo: true,
    },
  },
  modules: [
    "@nuxt/content",
    "@hypernym/nuxt-anime",
    "@nuxtjs/google-fonts",
    "nuxt-viewport",
    "@nuxtjs/eslint-module",
    "@nuxt/ui",
    "@hypernym/nuxt-gsap",
  ],
  anime: {
    provide: true,
    composables: true,
  },
  googleFonts: {
    useStylesheet: true,
    preconnect: true,
    prefetch: true,
    preload: true,
    families: {
      "Roboto Condensed": {
        wght: "200..900",
      },
      Roboto: {
        wght: "100..900",
      },
    },
  },
});
