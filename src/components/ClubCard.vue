<template>
  <div class="club-card">
    <a href="#" class="arrow-link">
      <i class="fas fa-arrow-up-right-from-square"></i>
    </a>

    <div class="images-row">
      <img :key="idx" :src="CardData.imageSrc" :alt="CardData.alt" />
    </div>

    <div class="card-overlay">
      <div class="card-text">
        <h3>{{ CardData.title }}</h3>
        <p>{{ CardData.description }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  // Define the props for the ClubCard component, to make this card is dynamic and can be reused with different data.
  const props = defineProps({
    CardData: {
      type: Object,
      required: true,
      default: () => ({
        imageSrc: '',
        title: '',
        description: '',
        alt: ''
      })
    }
  })
</script>

<style scoped>
  @import "@/assets/Card.css";
</style>
