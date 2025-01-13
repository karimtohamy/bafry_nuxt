// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n","@headlessui/vue"],
  i18n: {
    vueI18n: './i18n.config.js', // Reference to your custom i18n config
  
  }
});
