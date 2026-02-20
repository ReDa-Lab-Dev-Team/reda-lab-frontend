<!-- CommunitySection.vue -->
<template>
  <section class="py-12 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Community & Student Life</h2>
        <p class="text-lg text-blue-800 max-w-3xl">
          Beyond research and innovation, our members connect through activities, competitions, and shared learning experiences.
        </p>
      </div>

      <!-- Vertical Swiper Container -->
      <div class="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
        <div
          ref="swiperContainer"
          class="flex flex-col transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateY(${currentTranslateY}px)` }"
        >
          <!-- Use the reusable card component -->
          <CommunityCard
            v-for="(card, index) in cards"
            :key="index"
            :image="card.image"
            :title="card.title"
            :quote="card.quote"
            :openDays="card.openDays"
            :hours="card.hours"
            :location="card.location"
            :buttonText="card.buttonText"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CommunityCard from '../CommunityCard.vue';

const cards = ref([
  {
    image: 'https://placehold.co/400x300?text=ReDa+Lab+Event',
    title: 'ReDa Lab',
    quote: "At ReDa Lab, research meets real connection. Our doors are open to students who are curious, creative, and ready to make a difference. Join our workshops, explore new ideas, and be part of a vibrant learning community.",
    openDays: "Monday – Saturday",
    hours: "8:00 AM – 5:00 PM",
    location: "Building F, Room F104, Institute of Technology of Cambodia, Phnom Penh",
    buttonText: "Visit our Clubs"
  },
  {
    image: 'https://placehold.co/400x300?text=Student+Workshop',
    title: 'Student Workshop',
    quote: "Our student-led workshops provide hands-on experience with cutting-edge technologies and foster collaboration across disciplines. Come learn, create, and innovate with your peers.",
    openDays: "Tuesday – Friday",
    hours: "9:00 AM – 7:00 PM",
    location: "Building C, Innovation Hub, Institute of Technology of Cambodia, Phnom Penh",
    buttonText: "Join Workshop"
  },
  {
    image: 'https://placehold.co/400x300?text=Research+Fair',
    title: 'Research Fair',
    quote: "Showcase your research projects and connect with faculty mentors at our annual research fair. This is your opportunity to present your work and receive valuable feedback from the academic community.",
    openDays: "Every First Saturday",
    hours: "10:00 AM – 4:00 PM",
    location: "Main Campus Plaza, Institute of Technology of Cambodia, Phnom Penh",
    buttonText: "Submit Project"
  },
  {
    image: 'https://placehold.co/400x300?text=Tech+Competition',
    title: 'Tech Competition',
    quote: "Challenge yourself in our competitive tech events where creativity meets problem-solving. Teams compete for prizes and recognition while developing valuable skills for future careers.",
    openDays: "Monthly Events",
    hours: "Varies by Event",
    location: "Various Locations Across Campus, Institute of Technology of Cambodia, Phnom Penh",
    buttonText: "Register Now"
  }
]);

const currentTranslateY = ref(0);
const cardHeight = ref(0);
let intervalId = null;

// Calculate card height after component is mounted
onMounted(() => {
  nextTick(() => {
    if (cards.value.length > 0) {
      // Get the height of the first card (assuming all cards have similar heights)
      const firstCard = document.querySelector('.p-6');
      if (firstCard) {
        cardHeight.value = firstCard.offsetHeight + 16; // Add margin/padding
      }

      // Start auto-scrolling
      startAutoScroll();
    }
  });
});

// Clean up interval when component is unmounted
onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

// Auto-scroll function
function startAutoScroll() {
  intervalId = setInterval(() => {
    currentTranslateY.value -= cardHeight.value;

    // Reset position when we reach the end
    if (Math.abs(currentTranslateY.value) >= (cards.value.length * cardHeight.value)) {
      currentTranslateY.value = 0;
    }
  }, 5000); // Scroll every 5 seconds
}
</script>

<style scoped>
/* Optional: add any custom styles here */
</style>
