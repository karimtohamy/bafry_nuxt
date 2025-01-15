<template>
    <header class="max-w-screen shadow-lg text-white select-none">
        <div class="bg-primary hidden invisible lg:visible lg:flex w-full items-center justify-center top-0 py-2">
            <NuxtLink class="absolute" :class="[currentLanguage === 'ar' ? 'right-6' : 'left-6']" to="/en">
                <img src="@/assets/images/Logo.png" alt="" class="h-28">
            </NuxtLink>
            <div class="w-full flex h-12 justify-center items-center">
                <NavLinks v-for="(item, index) in navItems" :currnetlang="currentLanguage" :key="index" :to="item.to"
                    :text="item.text" />
            </div>
            <div class="absolute" :class="[currentLanguage === 'ar' ? 'left-6' : 'right-6']">
                <a href="#" v-for="locale in availableLocales" :key="locale.code" class="py-2 flex items-center px-4 me-3 text-white rounded-md bg-white/30"
                    @click.prevent.stop="setLanguage(locale)">
                    <span :class="[locale == 'ar' ? 'mb-1': 'mb-0']">{{ $t(`languages.${locale}`) }}</span>
                </a>
            </div>
        </div>
        <div class=" lg:hidden fixed z-10 flex w-full items-center justify-between bg-primary ">
            <Bars3Icon class="size-10 m-2 hover:bg-black/35 rounded text-white" @click="emit('toggle-sidebar')" />
            <div class="flex items-center ">
                <a href="#" v-for="locale in availableLocales" :key="locale.code" class="me-3 text-s underline rounded-md"
                    @click.prevent.stop="setLanguage(locale)">
                    <span :class="[locale == 'ar' ? 'mb-1': 'mb-0']">{{ $t(`languages.${locale}`) }}</span>
                </a>
                <NuxtLink to="/">
                    <img src="@/assets/images/Logo.png" alt="Logo" class=" h-14 me-3" />
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';

import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import NavLinks from './navLinks.vue';

const { locale, locales, setLocale } = useI18n();

// Available locales excluding the current locale
const availableLocales = computed(() => {
  return locales.value.filter(localeItem => localeItem !== locale.value);
});

// Manage current language in the component
const currentLanguage = ref(locale.value);
const emit = defineEmits(['toggle-sidebar'])

// Sync the language when the component is mounted
onMounted(() => {
  const path = window.location.pathname; // Get current path
  const detectedLocale = path.split('/')[1]; // Assuming locale is the first path segment
  if (locales.value.includes(detectedLocale)) {
    setLocale(detectedLocale); // Set the detected locale
    currentLanguage.value = detectedLocale; // Update the current language
  } else {
    // Fallback to default locale
    setLocale('en');
    currentLanguage.value = 'en';
  }
});

// Function to set the language when user clicks a locale
const setLanguage = (locale) => {
  setLocale(locale); // This will switch the locale
  currentLanguage.value = locale; // Update the current language reactively
};

// Navigation items
const navItems = [
  { to: "/", text: "home" },
  { to: "products", text: "products" },
  { to: "tools", text: "tools" },
  { to: "studies", text: "studies" },
  { to: "contact", text: "contact" },
  { to: "faq", text: "faq" },
];
</script>


<style lang="scss" scoped></style>