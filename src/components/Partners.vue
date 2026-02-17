<template>
  <section class="partners-section">
    <div class="container">
      <h2>Our Partner</h2>
      <div class="partners-logos">
        <div class="partner-logo" v-for="partner in partners" :key="partner.alt">
          <img :src="partner.src" :alt="partner.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineOptions } from "vue";
defineOptions({
  name: "ComponentPartners",
});
const partners = [
  { src: new URL("/partner-mcdonalds.png", import.meta.url).href, alt: "McDonald's" },
  { src: new URL("/partner-kfc.png", import.meta.url).href, alt: "KFC" },
  { src: new URL("/partner-harvard.png", import.meta.url).href, alt: "Harvard University" },
  { src: new URL("/partner-psg.png", import.meta.url).href, alt: "Paris Saint-Germain" },
  { src: new URL("/partner-league.png", import.meta.url).href, alt: "League" },
];
</script>
