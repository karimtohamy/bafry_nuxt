export default defineNuxtPlugin(nuxtApp => {
    // Hook to trigger after locale switch
    nuxtApp.hook('i18n:localeSwitched', ({oldLocale, newLocale}) => {
      const langDirections = {
        en: 'ltr',
        ar: 'rtl',
      };
      const direction = langDirections[newLocale] || 'ltr';
      document.documentElement.setAttribute('dir', direction);
    });
  });
  