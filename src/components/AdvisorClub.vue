<template>
  <section class="research-club-section">
    <div class="container">
      <h2>Board Advisor</h2>
      <div class="club-cards">
        <ClubCard
          v-for="(url, idx) in AdvisorCard.imageSrc"
          :key="idx"
          :CardData="{
            imageSrc: url,
            title: AdvisorCard.title[idx],
            description: AdvisorCard.description[idx],
            alt: AdvisorCard.alt[idx],
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ClubCard from "./ClubCard.vue";

const AdvisorCard = {
  imageSrc: [
    new URL(`/AboutUs/Advisor.png`, import.meta.url).href,
    new URL(`/AboutUs/Advisor.png`, import.meta.url).href,
    new URL(`/AboutUs/Advisor.png`, import.meta.url).href,
    new URL(`/AboutUs/Advisor.png`, import.meta.url).href,
  ],
  title: ["Bunkloem PEL", "Bunkloem PEL", "Bunkloem PEL", "Bunkloem PEL"],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  ],
  alt: ["Advisor Image 1", "Advisor Image 2", "Advisor Image 3", "Advisor Image 4"],
};
</script>
