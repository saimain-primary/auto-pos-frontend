<script setup>

const props = defineProps({
  text: String,
  icon: [Object, Function],
  to: String,
});
</script>

<template>
  <router-link
    :to="to"
    class="cursor-pointer flex flex-col items-center justify-center gap-2 w-[56px] h-[56px] md:w-[64px] md:h-[64px] hover:bg-white/10 rounded-lg"
    active-class="router-link-active"
    exact-active-class="router-link-exact-active"
  >
    <component :is="icon" class="w-6 h-6 mx-auto" />
    <p class="text-[8px] md:text-[10px]">{{ text }}</p>
  </router-link>
</template>

<style>
.router-link-exact-active {
  @apply bg-white/10;
}

.router-link-active {
  @apply bg-white/10;
}
</style>
