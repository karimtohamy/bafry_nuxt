<template>
    <div>
        <NuxtLink :to="$localePath(to)" class="flex items-center me-6"
            active-class="text-emerald-500 bg-black/15 rounded p-2 text-l font-semibold">
            {{ $t(text) }}
        </NuxtLink>

    </div>
</template>

<script setup>
const props = defineProps({
    to: String,
    text: String,
    currnetlang: String

});

</script>

<style lang="scss" scoped></style>