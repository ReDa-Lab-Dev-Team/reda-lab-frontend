<template>
  <header>
    <nav class="navbar">
      <div class="logo">
        <a href="/">
          <img src="/ReDa-Icon.png" alt="ReDa Lab Logo" />
        </a>
      </div>
      <ul class="nav-links">
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
  defineOptions({
    name: "ComponentNavbar",
  });

</script>

<style scoped>
@import "@/assets/Navbar.css";
</style>
