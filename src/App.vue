<script setup></script>

<template>
  <router-view :key="$route.fullPath" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>
