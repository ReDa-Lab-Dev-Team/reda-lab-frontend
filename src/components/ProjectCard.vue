<template>
  <div class="flex flex-row">
    <img
      src="/public/homepage-background.png"
      class="max-h-[120px] max-w-[100px] bg-center mt-2 mr-6"
    />
    <div class="flex flex-col gap-1 max-w-[560px] text-blue-900">
      <p class="text-2xl">{{ title }}</p>
      <p>published : {{ end_date }}</p>
      <p>tag : {{ tags }}</p>
      <p>{{ abstract.substring(0, 160) }}...</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  end_date: Date,
  tags: Array,
  abstract: String,
});
</script>
