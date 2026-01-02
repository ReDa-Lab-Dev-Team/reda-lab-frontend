<template>
  <div>
    <!-- Hero Section with ABOUT REDA content -->
    <HeroSection
      :show-hero-background="true"
      :background-image="'public/homepage-background.png'"
      :min-height="'80vh'"
      :hero-content="true"
      hero-title="Welcome to ReDA Lab"
      :gradient-overlay="true"
      hero-subtitle="A Research and Data Analytics Laboratory of Department of Applied Mathematics and Statistics in Institute of Technology of Cambodia. A community of thinkers and doers — driving Research, sparking Innovation, strengthening Social bonds, and creating lasting Impact."
    >
      <template #cta>
        <Button
          label="Learn More About Us"
          class="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          @click="$router.push('/about-us')"
        />
      </template>
    </HeroSection>

    <div class="my-12">
      <CoreValue />
    </div>

    <div class="my-12">
      <LatestNewsSection />
      <FeaturedProjectsSection />
    </div>

    <ResearchClub />
    <Partners />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ViewHomepage",
});

import ResearchClub from "@/components/ResearchClub.vue";
import Partners from "@/components/Partners.vue";
import HeroSection from "@/components/HeroSection.vue";
import CoreValue from "@/components/home/CoreValue.vue";
import LatestNewsSection from "@/components/home/LatestNewsSection.vue";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection.vue";
import Button from "primevue/button";
</script>

<style scoped></style>
