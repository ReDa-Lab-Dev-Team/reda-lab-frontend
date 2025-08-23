<template>
  <div class="flex flex-col gap-1 max-w-[320px] text-blue-900">
    <p class="text-xl">{{ title }}</p>
    <p>tag : {{ tags }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  tags: Array,
});
</script>
