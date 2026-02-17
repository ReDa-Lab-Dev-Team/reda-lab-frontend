<template>
  <div class="relative h-64 rounded-xl overflow-hidden group shadow-md">

    <!-- Image -->
    <img
      :src="CardData.imageSrc"
      :alt="CardData.alt"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <!-- Arrow Button -->
    <a
      href="#"
      class="absolute top-4 right-4 z-20 w-11 h-11 bg-white rounded-full flex items-center justify-center text-blue-600 text-lg shadow-md transition-transform duration-200 hover:scale-110"
    >
      <i class="fas fa-arrow-up-right-from-square font-black"></i>
    </a>

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-5 transition-all duration-300"
    >
      <div class="text-white">
        <!-- Title -->
        <h3
          class="text-lg font-semibold transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
        >
          {{ CardData.title }}
        </h3>

        <!-- Description -->
        <p
          class="text-sm opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          {{ CardData.description }}
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  CardData: {
    type: Object,
    required: true,
    default: () => ({
      imageSrc: "",
      title: "",
      description: "",
      alt: "",
    }),
  },
});
</script>
