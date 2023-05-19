<template>
  <button :class="buttonClass" @click="onClick">
    <slot name="icon"></slot>
    <span><slot></slot></span>
  </button>
</template>

<script setup>
import { computed, defineEmits } from "vue";

// Define props and emits
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "medium",
  },
});

const emits = defineEmits(["click"]);

// Button click function
const onClick = () => {
  emits("click");
};

// Define button class based on type and size prop
const buttonClass = computed(() => {
  let baseClass = "text-white rounded  flex items-center justify-center";
  let colorClass, paddingClass;

  switch (props.type) {
    case "primary":
      colorClass = "bg-gray-800 hover:bg-gray-900";
      break;
    case "secondary":
      colorClass = "bg-gray-500 hover:bg-gray-700";
      break;
    case "danger":
      colorClass = "bg-red-500 hover:bg-red-700";
      break;
    case "warning":
      colorClass = "bg-yellow-500 hover:bg-yellow-700";
      break;
    default:
      colorClass = "bg-blue-500 hover:bg-blue-700";
      break;
  }

  switch (props.size) {
    case "small":
      paddingClass = "px-2 py-1";
      break;
    case "medium":
      paddingClass = "px-4 py-2";
      break;
    case "large":
      paddingClass = "px-6 py-3";
      break;
    default:
      paddingClass = "px-4 py-2";
      break;
  }

  return `${baseClass} ${colorClass} ${paddingClass}`;
});
</script>
