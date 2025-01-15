<template>
    <div class="mt-3">
        <NuxtLink :to="$localePath(to)"
         class="flex justify-start ps-3 items-center mb-2 py-2 rounded transition-colors text-white"
            active-class="bg-black/30 !text-white">

            <span>{{ $t(text)}}</span>
        </NuxtLink>
    </div>
</template>

<script setup>

const props = defineProps({
    text: String,
    to: String,
    currnetlang: String

})

</script>

<style scoped>
/* Additional styles can go here if needed */
</style>
