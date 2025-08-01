<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-logo">
        <img src="/ReDa-Icon.png" alt="ReDa Lab Logo" />
        <p>ReDa Lab</p>
      </div>
      <div class="footer-info">
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

        <div class="info-section">
          <h3>Location</h3>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Institute of Technology of Cambodia, Department of Applied Mathematic and statistic</span>
          </div>
        </div>

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

        <div class="info-section">
          <div class="qr-code">
            <img src="/QRCode.png" alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2025 ReDa Lab</p>
    </div>
  </footer>
</template>

<script setup>
defineOptions({
  name: "ComponentFooter",
})
</script>

<style scoped>
  @import '@/assets/Footer.css';
</style>
