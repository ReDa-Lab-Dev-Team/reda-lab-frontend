<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block">
        Our Research Club
        <span class="block h-1 w-16 bg-blue-500 mx-auto mt-3 rounded-full"></span>
      </h2>

      <!-- Cards Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ClubCard
          v-for="(url, idx) in ResearchCard.imageSrc"
          :key="idx"
          :CardData="{
            imageSrc: url,
            title: ResearchCard.title[idx],
            description: ResearchCard.description[idx],
            alt: ResearchCard.alt[idx]
          }"
          class="transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import ClubCard from './ClubCard.vue'

const ResearchCard = {
  imageSrc: [
    new URL(`/research-club.png`, import.meta.url).href,
    new URL(`/research-club.png`, import.meta.url).href,
    new URL(`/research-club.png`, import.meta.url).href,
    new URL(`/research-club.png`, import.meta.url).href
  ],
  title: [
    'LLM Research Club',
    'LLM Research Club',
    'LLM Research Club',
    'LLM Research Club'
  ],
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  ],
  alt: [
    'LLM Research Club',
    'LLM Research Club',
    'LLM Research Club',
    'LLM Research Club'
  ]
}
</script>
