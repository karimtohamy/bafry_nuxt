<template>
  <div>
    <NuxtLayout class="min-h-screen"></NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  link: [
    // Favicon Links
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/icon-bafry.png',
    },
    {
      rel: 'icon',
      href: '/icon-bafry.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/icon-bafry.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/icon-bafry.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icon-bafry.png',
      sizes: '192x192',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  meta: [
    {
      name: 'description',
      content: 'Bafry is a German-Saudi Arabian company specializing in hygiene solutions and disinfectants. Committed to cleanliness, safety, and innovation, we provide high-quality products designed to protect both personal and public health. Our advanced disinfectants and hygiene solutions meet the highest industry standards to ensure effective protection against harmful pathogens and support a cleaner, safer environment.'
    },
    {
      name: 'keywords',
      content: 'bafry, bafry_saudi, bafry_sa, bafrycompany, bafryofficial, bafry.sa, bafry_ksa, saudi, saudiarabia, saudiarab, ksa, kingdomofsaudiarabia, saudi_products, saudi_companies, saudi_services, saudi_business, top_quality, products, services, faq, faqs, FAQ, FAQs, tools, Tools, contact us',
    },
    {
      name: 'author',
      content: 'Bafry saudi',
    },
    { property: 'og:title', content: 'Bafry | Hygiene Solutions' },
    { property: 'og:description', content: 'Providing top-tier hygiene and disinfectant products.' },
    { property: 'og:image', content: '/icon-bafry.png' },
    { property: 'og:url', content: 'https://bafrynuxt.netlify.app' },
  ]
})

</script>
<style>
      body {
        --sb-track-color: #232e33;
        --sb-thumb-color: rgb(16 185 129);;
        --sb-size: 6px;
        overflow-y: scroll;
      }

      body::-webkit-scrollbar {
        width: var(--sb-size);
      }

      body::-webkit-scrollbar-track {
        background: var(--sb-track-color);
        border-radius: 23px;
      }

      body::-webkit-scrollbar-thumb {
        background: var(--sb-thumb-color);
        border-radius: 23px;
      }
    </style>