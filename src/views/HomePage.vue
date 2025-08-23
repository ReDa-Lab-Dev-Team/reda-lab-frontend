<template>
  <div>
    <section
      class="bg-[url('/homepage-background.png')] bg-cover bg-center flex items-center min-h-[70vh]"
    ></section>
    <section class="reda-lab-section">
      <div class="container">
        <div class="section-content">
          <div class="text-content">
            <h2>ABOUT REDA</h2>
            <p>
              The Research in Data Analytics (ReDa) Lab is a premier research facility dedicated to
              advancing knowledge in applied mathematics and statistics.
            </p>
            <br />
            <p>
              Our lab brings together researchers from diverse backgrounds to tackle complex
              problems using mathematical modeling, statistical analysis, and computational
              techniques.
            </p>
            <br />
            <p>
              We collaborate with industry partners and government agencies to apply our research to
              real-world challenges in healthcare, finance, technology, and environmental science.
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
        <div class="section-content">
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
