import ar from './locales/ar.json'
import en from './locales/en.json'
export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en', // Fallback locale
  messages: {
    en: en,
    ar: ar
  },
  locales: [
    {
      name:'عربي',
      code: "ar",
      iso: "ar",
    },
    {
      name:'English',
      code: "en",
      iso: "en",
    },
  ],
}));
