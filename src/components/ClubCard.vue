<template>
  <div class="club-card">
    <div class="images-row">
      <img :key="idx" :src="CardData.imageSrc" :alt="CardData.alt" />
    </div>
    <div class="card-overlay">
      <div class="card-text">
        <h3>{{ CardData.title }}</h3>
        <p>{{ CardData.description }}</p>
      </div>
      <a href="#" class="arrow-link"><i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

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
@import "@/assets/Homepage.css";
</style>
