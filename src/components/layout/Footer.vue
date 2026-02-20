<template>
  <footer class="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white pt-14">

    <!-- Full Width Content -->
    <div class="w-full px-8 lg:px-16">

      <div class="flex flex-wrap justify-between gap-10">

        <!-- Logo -->
        <div class="flex items-center justify-center min-w-[200px]">
          <img
            src="/ReDa-Icon.png"
            alt="ReDa Lab Logo"
            class="h-20 w-auto drop-shadow-lg"
          />
        </div>

        <!-- Working Hours -->
        <div class="min-w-[220px] max-w-[300px]">
          <h3 class="text-yellow-400 text-lg font-semibold mb-6">
            Working Hours
          </h3>

          <div class="flex items-start gap-3 mb-4">
            <i class="far fa-calendar-alt text-yellow-400 mt-1"></i>
            <span>Monday - Saturday</span>
          </div>

          <div class="flex items-start gap-3">
            <i class="far fa-clock text-yellow-400 mt-1"></i>
            <span>8:00 am - 5:00 pm</span>
          </div>
        </div>

        <!-- Location -->
        <div class="min-w-[220px] max-w-[320px]">
          <h3 class="text-yellow-400 text-lg font-semibold mb-6">
            Location
          </h3>

          <div class="flex items-start gap-3">
            <i class="fas fa-map-marker-alt text-yellow-400 mt-1"></i>
            <span>
              Institute of Technology of Cambodia, Department of Applied
              Mathematics and Statistics
            </span>
          </div>
        </div>

        <!-- Contact -->
        <div class="min-w-[220px] max-w-[280px]">
          <h3 class="text-yellow-400 text-lg font-semibold mb-6">
            Contact Us
          </h3>

          <div class="flex items-start gap-3 mb-4">
            <i class="fas fa-phone text-yellow-400 mt-1"></i>
            <span>010101213</span>
          </div>

          <div class="flex items-start gap-3 mb-4">
            <i class="fas fa-phone text-yellow-400 mt-1"></i>
            <span>01101213</span>
          </div>

          <div class="flex items-start gap-3">
            <i class="far fa-envelope text-yellow-400 mt-1"></i>
            <span class="hover:text-yellow-300 transition">
              ReDa@itc.edu.kh
            </span>
          </div>
        </div>

        <!-- QR Code -->
        <div class="flex items-center justify-center min-w-[180px]">
          <img
            src="/qr.png"
            alt="QR Code"
            class="w-36 hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-10 border-t border-white/10 py-5 text-center text-sm text-gray-300">
      © 2025 Department of Applied Mathematics & Statistics. All rights reserved.
    </div>

  </footer>
</template>

<script setup>
defineOptions({
  name: "ComponentFooter",
});
</script>
