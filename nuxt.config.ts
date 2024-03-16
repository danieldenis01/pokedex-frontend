// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/fonts"],
  ui: {
    icons: ["ph", "simple-icons"],
  },
  colorMode: {
    preference: "dark",
  },
  devtools: { enabled: true },
});
