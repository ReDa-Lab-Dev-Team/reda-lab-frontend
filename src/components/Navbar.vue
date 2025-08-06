<template>
  <header>
    <nav :class="['navbar', { 'scrolled': isScrolled}]">
      <div class="logo">
        <a href="/">
          <img :src="isScrolled ? reda_Logo_Blue : reda_Logo_Light" alt="ReDa Lab Logo" />
        </a>
      </div>
      <ul :class="['nav-links', { 'dark-links': isScrolled }]">
        <li><a href="/AboutUs">About us</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Board Members</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';

  const isScrolled = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  })

  defineOptions({
    name: "ComponentNavbar",
  });

  const reda_Logo_Light = "/ReDa-Icon.png";
  const reda_Logo_Blue = "/ReDa-Icon-Blue.png";

</script>

<style scoped>
@import "@/assets/NavBar.css";
</style>
