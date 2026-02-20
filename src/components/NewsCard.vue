<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
    <!-- Image/Graphic Section -->
    <div class="relative">
      <img :src="imageUrl" alt="Card Graphic" class="w-full h-64 object-cover" />
      <!-- Overlay text for the graphic -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-transparent to-black/10 flex items-center justify-center"
      >
        <div class="text-white text-center p-4">
          <h2 class="text-2xl font-bold mb-2">{{ overlayTitle }}</h2>
          <div class="flex justify-between text-sm">
            <span v-for="(subtitle, index) in overlaySubtitles" :key="index">{{ subtitle }}</span>
          </div>
          <div class="mt-4">
            <span v-for="(footer, index) in overlayFooter" :key="index" class="block">
              {{ footer }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <!-- Tag -->
      <div
        class="inline-block bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full mb-4"
      >
        {{ tag }}
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-800 mb-3">
        {{ title }}
      </h3>

      <!-- Date and Duration -->
      <div class="flex items-center text-gray-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>Date: {{ date }}</span>
      </div>

      <div class="flex items-center text-gray-600 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ duration }}</span>
      </div>

      <!-- Author Section -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img :src="authorImage" alt="Author" class="w-10 h-10 rounded-full mr-3 object-cover" />
          <span class="text-gray-700">By {{ authorName }}</span>
        </div>

        <!-- Read More Button -->
        <button
          class="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageUrl: {
    type: String,
    default: "https://via.placeholder.com/400x250",
  },
  overlayTitle: {
    type: String,
    default: "INNOVATION",
  },
  overlaySubtitles: {
    type: Array as () => string[],
    default: () => ["CHALLENGE", "EXPLORE"],
  },
  overlayFooter: {
    type: Array as () => string[],
    default: () => ["UNDERSTAND", "DESIGN"],
  },
  tag: {
    type: String,
    default: "Workshop",
  },
  title: {
    type: String,
    default: "Innovation Across Borders: An International Workshop Experience",
  },
  date: {
    type: String,
    default: "5. December. 2025",
  },
  duration: {
    type: String,
    default: "5 hrs",
  },
  authorName: {
    type: String,
    default: "Mr. Yoshie YAMADA",
  },
  authorImage: {
    type: String,
    default: "https://via.placeholder.com/40",
  },
  buttonText: {
    type: String,
    default: "Read more",
  },
});
</script>
