<template>
  <div class="club-card">
    <div class="images-row">
      <img v-for="(url, idx) in imageUrls" :key="idx" :src="url" alt="LLM Research Club" />
    </div>
    <div class="card-overlay">
      <div class="card-text">
        <h3>LLM Research Club</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <a href="#" class="arrow-link"><i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</template>

<script setup>
const imageSrc = new URL(`/research-club.png`, import.meta.url).href;
const imageUrls = Array(4).fill(imageSrc);
</script>

<style scoped>
@import "@/assets/Homepage.css";
</style>
