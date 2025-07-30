<template>
  <section class="research-club-section">
    <div class="container">
      <h2>Our Research Club</h2>
      <div class="club-cards">
        <ClubCard v-for="n in 4" :key="n" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ClubCard from './ClubCard.vue'
</script>

<style scoped>
@import "@/assets/Homepage.css";
</style>
