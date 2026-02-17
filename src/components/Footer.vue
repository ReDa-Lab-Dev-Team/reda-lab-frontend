<template>
  <footer>
    <div class="container footer-content">
      <!-- logo -->
      <div class="info-section logo-section">
        <div class="footer-logo">
          <img src="/ReDa-Icon.png" alt="ReDa Lab Logo" />
        </div>
      </div>

      <!-- Working Hours -->
      <div class="info-section">
        <h3>Working hours</h3>
        <div class="info-item">
          <i class="far fa-calendar-alt"></i>
          <span>Monday - Saturday</span>
        </div>
        <div class="info-item">
          <i class="far fa-clock"></i>
          <span>8:00 am - 5:00 pm</span>
        </div>
      </div>

      <!-- Location -->
      <div class="info-section">
        <h3>Location</h3>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>Institute of Technology of Cambodia, Department of Applied Mathematic and statistic</span>
        </div>
      </div>

      <!-- Contact -->
      <div class="info-section">
        <h3>Contact Us</h3>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <span>010101213</span>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <span>01101213</span>
        </div>
        <div class="info-item">
          <i class="far fa-envelope"></i>
          <span>ReDa@itc.edu.kh</span>
        </div>
      </div>

      <!-- QR Code -->
      <div class="info-section qr-section">
        <div class="qr-code">
          <img src="/qr.png" alt="QR Code" />
        </div>
      </div>

    </div>


    <div class="copyright">
      <p>&copy; 2025 Department of Applied Mathematics & Statistics. All rights reserved.</p>
    </div>
  </footer>
</template>


<script setup>
defineOptions({
  name: "ComponentFooter",
})
</script>
