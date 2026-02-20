<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-blue-900 text-7xl mb-7"></i>
    <h1 class="text-6xl font-bold mb-7">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <RouterLink
      to="/"
      class="text-white text-2xl bg-blue-900 hover:bg-blue-950 rounded-md px-5 py-4 mt-7"
      >Go Back</RouterLink
    >
  </section>
</template>
<script setup>
defineOptions({
  name: "NotFoundView",
});
</script>
