<template>
  <div>
    <div class="mb-1" v-if="label">
      <label for="" class="text-sm text-gray-600 font-medium">{{
        label
      }}</label>
    </div>
    <div class="relative">
      <span
        class="absolute inset-y-0 left-0 flex items-center pl-2"
        v-if="leftIcon"
      >
        <component
          :is="leftIcon"
          v-if="leftIcon"
          class="h-5 w-5 text-gray-400"
        />
      </span>
      <input
        :type="type"
        :disabled="disabled"
        v-bind="$attrs"
        v-model="value"
        :class="inputClasses"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: "",
  },
  leftIcon: {
    type: [Object, Function],
  },
});

const value = ref("");

const inputClasses = computed(() => {
  return `border border-gray-300 rounded-md px-4 py-2 w-full  pl-${
    props.leftIcon ? "8" : "4"
  } focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300`;
});
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
