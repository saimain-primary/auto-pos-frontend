<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();

const breadcrumb = computed(() => {
  let pathArray = route.path.split("/");
  pathArray.shift();

  let breadcrumb = pathArray.map((path, i) => {
    return {
      name: path,
      params: { id: pathArray[i + 1] },
    };
  });

  return breadcrumb;
});

const transformToReadable = (text) => {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
</script>

<template>
  <nav class="text-gray-400 text-sm">
    <ol class="flex">
      <li
        v-for="(route, index) in breadcrumb"
        :key="index"
        class="flex items-center"
      >
        <router-link
          :to="{ name: route.name, params: route.params }"
          class="text-gray-500 hover:text-gray-800"
          >{{ transformToReadable(route.name) }}</router-link
        >
        <span v-if="index < breadcrumb.length - 1" class="mx-2">/</span>
      </li>
    </ol>
  </nav>
</template>
