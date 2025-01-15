export default defineNuxtConfig({
  target: "static",
  plugins: [
    "~/plugins/i18n.js", // Add this line to load the plugin
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/leaflet",
    "nuxt-headlessui",
  ],
  i18n: {
    locales: ["en", "ar"],
    vueI18n: "./i18n.config.js",
    strategy: "prefix",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

});
