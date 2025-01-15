export default defineNuxtPlugin(nuxtApp => {
    // Hook to trigger after locale switch
    nuxtApp.hook('i18n:localeSwitched', ({oldLocale, newLocale}) => {
        console.log('oldLocale:', oldLocale); // Log old locale
        console.log('newLocale:', newLocale); // Log new locale
      const langDirections = {
        en: 'ltr',
        ar: 'rtl',
      };
      const direction = langDirections[newLocale] || 'ltr';
      console.log(newLocale);
      
      document.documentElement.setAttribute('dir', direction);
      console.log(`Locale switched to: ${newLocale}, Direction set to: ${direction}`);
    });
  });
  