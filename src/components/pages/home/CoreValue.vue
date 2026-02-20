<template>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="(value, index) in coreValues" :key="index" class="text-center">
        <div class="mb-4">
          <img :src="value.iconPath" alt="icon" class="h-12 w-12 mx-auto" />
        </div>
        <h3 class="text-lg font-semibold mb-2">{{ value.title }}</h3>
        <p class="text-sm">{{ value.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  coreValues: {
    type: Array,
    default: () => [
      {
        title: "Research",
        description: "Through curiosity and inquiry, we uncover knowledge that shapes the future.",
        iconPath: "/icons/integrated-data-and-research.svg",
        iconViewBox: "0 0 24 24",
      },
      {
        title: "Innovation",
        description: "Turning bold ideas into solutions that inspire progress.",
        iconPath: "/icons/hugeicons-ai-setting.svg",
        iconViewBox: "0 0 24 24",
      },
      {
        title: "Social",
        description: "Building communities where collaboration creates shared growth.",
        iconPath: "/icons/fluent-people-community-filled.svg",
        iconViewBox: "0 0 24 24",
      },
      {
        title: "Impact",
        description: "Transforming knowledge into action that changes lives.",
        iconPath: "/icons/gps-fix-thin.svg",
        iconViewBox: "0 0 24 24",
      },
    ],
  },
});
</script>
