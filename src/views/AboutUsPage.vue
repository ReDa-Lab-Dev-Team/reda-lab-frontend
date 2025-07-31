<script setup>
  import AdvisorClub from '@/components/AdvisorClub.vue';
</script>

<template>
  <div>
    <section class="AboutUs-P"></section>
    <section class="reda-lab-section">
      <div class="container">
        <div class="section-content">
          <div class="text-content">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
    <AdvisorClub />
  </div>
</template>

<style>
@import "@/assets/Homepage.css";
</style>