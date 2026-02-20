<template>
  <div>
    <!-- Hero Background Section -->
    <section
      v-if="showHeroBackground"
      :class="[
        'bg-cover bg-center flex items-center relative',
        heroBackgroundClass,
        'overflow-hidden',
      ]"
      :style="{
        backgroundImage: `url('${backgroundImage}')`,
        minHeight: minHeight,
      }"
    >
      <!-- Overlay for better text readability -->
      <div
        :class="[
          'absolute inset-0',
          gradientOverlay ? 'bg-gradient-to-r from-blue-900/80' : 'bg-black/40',
        ]"
      ></div>

      <div v-if="heroContent" class="container mx-auto px-4 relative z-10">
        <div class="text-white max-w-2xl space-y-6">
          <h1
            v-if="heroTitle"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {{ heroTitle }}
          </h1>
          <p v-if="heroSubtitle" class="text-base sm:text-lg md:text-xl leading-relaxed">
            {{ heroSubtitle }}
          </p>

          <!-- Slot for custom content like buttons, icons, etc. -->
          <slot name="cta"></slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "HeroSection",
});

defineSlots<{
  cta?: () => any;
}>();

const props = defineProps({
  // Hero background section props
  showHeroBackground: {
    type: Boolean,
    default: true,
  },
  backgroundImage: {
    type: String,
    default: "/homepage-background.png",
  },
  minHeight: {
    type: String,
    default: "70vh",
  },
  heroBackgroundClass: {
    type: String,
    default: "",
  },
  heroContent: {
    type: Boolean,
    default: false,
  },
  heroTitle: {
    type: String,
    default: "",
  },
  heroSubtitle: {
    type: String,
    default: "",
  },
  // gradient overlay toggle
  gradientOverlay: {
    type: Boolean,
    default: true,
  },

  // Content section props
  title: {
    type: String,
    default: "",
  },
  paragraphs: {
    type: Array,
    default: () => [],
  },
  sideImage: {
    type: String,
    default: "",
  },
  imageAlt: {
    type: String,
    default: "Section Image",
  },
  sectionClass: {
    type: String,
    default: "",
  },
  alternate: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* No external CSS - All styles are Tailwind-based */
</style>
