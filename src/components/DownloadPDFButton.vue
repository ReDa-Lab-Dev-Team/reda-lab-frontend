<!-- DownloadRibbonCard.vue -->
<template>
  <!-- Wrap with <a> so the whole thing is clickable -->
  <a
    :href="href"
    class="group relative inline-block select-none pr-4 pb-4"
    :download="download ? '' : null"
  >
    <!-- Paper stack -->
    <div class="relative">
      <!-- back sheets -->
      <div class="absolute inset-0 translate-x-4 translate-y-4 bg-white rounded-lg shadow-md"></div>
      <div class="absolute inset-0 translate-x-2 translate-y-2 bg-white rounded-lg shadow-md"></div>

      <!-- top sheet with optional preview -->
      <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          v-if="imageSrc"
          :src="imageSrc"
          :alt="imageAlt"
          class="block w-[180px] h-[220px] object-cover"
        />
        <div v-else class="w-[180px] h-[220px] grid place-items-center">
          <span class="text-sm text-gray-500">PDF preview</span>
        </div>
      </div>
    </div>

    <!-- Ribbon -->
    <div
      class="absolute -top-3 left-0 origin-left -skew-x-6"
      :class="ribbonWidthClass"
      aria-hidden="true"
    >
      <div
        class="relative z-10 rounded-r-lg px-4 py-2 shadow-lg transition-transform duration-200 bg-red-600 text-white group-hover:scale-[1.02]"
      >
        <div class="flex items-center gap-2 skew-x-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1.25 1.25 0 0 1-1.768 0L6.925 11.707a1 1 0 0 1 1.414-1.414L10 12.954V4a1 1 0 0 1 1-1z"
            />
            <path
              d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H7v-3a1 1 0 1 0-2 0v3z"
            />
          </svg>
          <span class="font-semibold text-xs leading-none">{{ buttonText }}</span>
          <span v-if="fileMeta" class="text-white/90 text-xs">• {{ fileMeta }}</span>
        </div>
      </div>
      <!-- ribbon tail -->
      <div class="absolute z-0 h-3 w-3 bg-red-700 -mt-1 ml-[1px] skew-x-6 clip-path-triangle"></div>
    </div>

    <!-- Invisible text for screen readers to announce target -->
    <span class="sr-only">{{ srLabel }}</span>
  </a>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  href: { type: String, required: true },
  imageSrc: { type: String, default: "" },
  imageAlt: { type: String, default: "PDF preview" },
  buttonText: { type: String, default: "Download Free PDF" },
  fileMeta: { type: String, default: "" }, // e.g. "1.2 MB"
  ribbonWidth: { type: String, default: "md" }, // 'sm' | 'md' | 'lg'
  download: { type: Boolean, default: false }, // set true to force download
});

const ribbonWidthClass = computed(() => {
  switch (props.ribbonWidth) {
    case "sm":
      return "w-[130px]";
    case "lg":
      return "w-[220px]";
    default:
      return "w-[170px]";
  }
});

const srLabel = computed(
  () => `${props.buttonText}${props.fileMeta ? " (" + props.fileMeta + ")" : ""}`
);
</script>

<style scoped>
/* tiny triangle notch at ribbon end */
.clip-path-triangle {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
</style>
