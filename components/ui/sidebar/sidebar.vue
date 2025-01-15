<template>
    <div
        class=" transistion-all fixed min-w-[240px] transition-all z-10 flex justify-start px-3 bg-primary h-screen top-0 lg:relative lg:h-auto">
        <div class="lg:pt-14 flex flex-col w-full mt-14 justify-between">
            <div>

                <SidebarLinks v-for="item in navItems" @click="emit('toggle-sidebar')" 
                    :to="item.to" :text="item.text" />
            </div>
        </div>
    </div>
</template>

<script setup>
import SidebarLinks from './sidebarLinks.vue';
const navItems = [
  { to: "/", text: "home" },
  { to: "products", text: "products" },
  { to: "tools", text: "tools" },
  { to: "studies", text: "studies" },
  { to: "contact", text: "contact" },
  { to: "faq", text: "faq" },
];

const emit = defineEmits(['toggle-sidebar']);

</script>
<style scoped>
/* Additional styles can be added here if needed */
</style>
