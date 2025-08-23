<template>
  <div
    class="relative w-[192px] h-[192px] overflow-hidden bg-cover bg-center rounded-2xl shadow-lg"
    :style="{ backgroundImage: `url(${CardData.imageSrc})` }"
  >
    <div class="h-[64px] w-full absolute inset-x-0 bottom-0 bg-white px-3">
      <p class="text-lg text-blue-900 font-semibold mt-2">{{ CardData.name }}</p>
      <p class="text-xs text-blue-900">{{ CardData.academicLevel }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  CardData: {
    type: Object,
    required: true,
    default: () => ({
      imageSrc: "",
      name: "",
      academicLevel: "",
    }),
  },
});
</script>
