<template>
  <div>
    <section class="hero"></section>
    <section class="reda-lab-section">
      <div class="container">
        <div class="section-content">
          <div class="text-content">
            <h2>ReDa Lab</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
          <div class="image-container">
            <img
              src="/math-department.png"
              alt="Department of Applied Mathematics and Statistics"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="reda-lab-section alternate">
      <div class="container">
        <div class="section-content reverse">
          <div class="image-container">
            <img
              src="/math-department.png"
              alt="Department of Applied Mathematics and Statistics"
            />
          </div>
          <div class="text-content">
            <h2>ReDa Lab</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      </div>
    </section>

    <ResearchClub />
    <Partners />
  </div>
</template>

<script setup>
defineOptions({
  name: "ViewHomepage",
});

import ResearchClub from "@/components/ResearchClub.vue";
import Partners from "@/components/Partners.vue";
</script>

<style scoped>
@import "@/assets/Homepage.css";
</style>
