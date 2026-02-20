<script setup lang="ts">
interface Props {
  text?: string;
  color?: "black" | "red" | "blue"; // NOTE: Only "black" works, and I don't know why
  variant?: "solid" | "outline";
}

const props = withDefaults(defineProps<Props>(), {
  text: "Read more",
  color: "black",
  variant: "solid",
});
</script>

<template>
  <button
    :class="[
      'absolute bottom-6 right-6 px-5 py-2',
      `bg-${props.color}`,
      `hover:bg-${props.color}-900`,
      'text-white rounded-full text-sm font-medium shadow-lg transition-all duration-300 hover:scale-105',
    ]"
  >
    {{ props.text }}
  </button>
</template>
