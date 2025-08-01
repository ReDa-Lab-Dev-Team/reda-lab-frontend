<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import { RouterView } from 'vue-router'
</script> 

<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
}

.main-content {
  min-height: calc(100vh - 200px);
}
</style>
