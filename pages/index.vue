<template>
    <ImageSlider class=" shadow-2xl" />
    <div class="flex justify-center">
        <Mission/>
    </div>
</template>

<script setup>
import Mission from '@/components/mission.vue';
import ImageSlider from '@/components/ui/imageSlider.vue';

useHead({
  title: 'Bafry | Home ',
  meta: [
    { name: 'description', content: "welcome to bafry's home page" }
  ],
})
</script>

<style  scoped>

</style>