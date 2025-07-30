<template>
  <header>
    <nav class="navbar">
      <div class="logo">
        <img src="/public/ReDa-Icon.png" alt="ReDa Lab Logo" />
      </div>
      <ul class="nav-links">
        <li><a href="#">About us</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Board Members</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
defineOptions({
  name: "ComponentNavbar",
});
</script>

<style scoped>
@import "@/assets/Homepage.css";
</style>
