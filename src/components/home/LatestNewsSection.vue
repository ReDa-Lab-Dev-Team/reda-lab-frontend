<template>
  <section class="py-12 px-4 bg-gradient-to-b from-blue-900/0 to-blue-900/100 text-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">Latest News</h2>
        <p class="text-xl opacity-90 text-blue-900">
          See our ReDA upcoming events and News update.
        </p>
      </div>

      <!-- Card Swiper -->
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="swiperBreakpoints"
        :loop="true"
        class="swiper-container"
      >
        <SwiperSlide v-for="(card, index) in newsCards" :key="index">
          <NewsCard
            :imageUrl="card.imageUrl"
            :overlayTitle="card.overlayTitle"
            :overlaySubtitles="card.overlaySubtitles"
            :overlayFooter="card.overlayFooter"
            :tag="card.tag"
            :title="card.title"
            :date="card.date"
            :duration="card.duration"
            :authorName="card.authorName"
            :authorImage="card.authorImage"
            :buttonText="card.buttonText"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import NewsCard from "@/components/ui/NewsCard.vue";

// register auto play
// Swiper.use([Autoplay]);

const swiperBreakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const autoplayConfig = {
  delay: 5000,
  disableOnInteraction: false,
};

const newsCards = [
  {
    imageUrl: "https://picsum.photos/400/300",
    overlayTitle: "INNOVATION",
    overlaySubtitles: ["CHALLENGE", "EXPLORE"],
    overlayFooter: ["UNDERSTAND", "DESIGN"],
    tag: "Workshop",
    title: "Innovation Across Borders: An International Workshop Experience",
    date: "1. January. 2025",
    duration: "5 hrs",
    authorName: "Mr. Jean-François Tain",
    authorImage: "/profiles/jean-francois-tain.jpg",
    buttonText: "Read more",
  },
  {
    imageUrl: "https://picsum.photos/seed/picsum/400/250",
    overlayTitle: "Trends Of Big Data",
    overlaySubtitles: [],
    overlayFooter: [],
    tag: "Upcoming Event",
    title: "Industry Meet-Up: Big Data Trends & Tools",
    date: "26. December. 2025",
    duration: "20 hrs",
    authorName: "Dr. Adolf",
    authorImage: "/profiles/adolf.jpg",
    buttonText: "Read more",
  },
  {
    imageUrl: "https://picsum.photos/400/250?grayscale",
    overlayTitle: "Predictive Analytics Techniques",
    overlaySubtitles: [],
    overlayFooter: [],
    tag: "News Update",
    title: "ReDa Lab Publishes New Study on Predictive Analytics",
    date: "5. January. 2026",
    duration: "2 days",
    authorName: "Ms. Danielle Marsh",
    authorImage: "/profiles/danielle.jpg",
    buttonText: "Read more",
  },
  {
    imageUrl: "https://picsum.photos/seed/400/250",
    overlayTitle: "Predictive Analytics Techniques",
    overlaySubtitles: [],
    overlayFooter: [],
    tag: "News Update",
    title: "ReDa Lab Publishes New Study on Predictive Analytics",
    date: "5. January. 2026",
    duration: "2 days",
    authorName: "Ms. Danielle Marsh",
    authorImage: "/profiles/danielle.jpg",
    buttonText: "Read more",
  },
];
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: auto;
}
</style>
