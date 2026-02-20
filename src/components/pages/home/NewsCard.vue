<script setup lang="ts">
import { truncateAtWordBoundary } from "@/utils";

interface Props {
  image: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="group relative w-full max-w-md bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
  >
    <!-- Image -->
    <div class="relative overflow-hidden">
      <img
        :src="image"
        alt="news"
        class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Badge -->
      <span
        class="inline-block px-4 py-1.5 text-sm font-semibold bg-blue-900 text-white rounded-xl shadow-md"
      >
        News Update
      </span>

      <!-- Title -->
      <h2
        class="text-xl md:text-2xl font-bold text-gray-800 leading-snug group-hover:text-blue-900 transition-colors"
      >
        {{ truncateAtWordBoundary(title, 50) }}
      </h2>

      <!-- Date + Read Time -->
      <div class="flex items-center gap-4 text-gray-500 text-sm">
        <div class="flex items-center gap-1">
          <span class="font-medium">Date:</span>
          <span>{{ date }}</span>
        </div>

        <div class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>{{ readTime }}</span>
        </div>
      </div>

      <!-- Author -->
      <div class="flex items-center gap-3 pt-2">
        <img
          :src="authorImage"
          alt="author"
          class="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
        />
        <p class="text-sm text-gray-700">
          By <span class="font-semibold">{{ author }}</span>
        </p>
      </div>
    </div>

    <!-- Floating Button -->
    <button
      class="absolute bottom-6 right-6 px-5 py-2 bg-black text-white rounded-full text-sm font-medium shadow-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105"
    >
      Read more
    </button>
  </div>
</template>
