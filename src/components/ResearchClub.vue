<template>
  <section class="research-club-section">
    <div class="container">
      <h2>Our Research Club</h2>
      <div class="club-cards">
        <ClubCard 
          v-for="(url, idx) in ResearchCard.imageSrc"
          :key="idx"
          :CardData="{
            imageSrc: url,
            title: ResearchCard.title[idx],
            description: ResearchCard.description[idx],
            alt: ResearchCard.alt[idx]
          }" />
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

<style scoped>
@import "@/assets/Resource-Card.css";
</style>

