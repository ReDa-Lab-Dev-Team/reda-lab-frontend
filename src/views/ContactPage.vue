<script setup></script>

<template>
  <section
    class="bg-[linear-gradient(rgba(26,54,93,0.9),rgba(21,50,90,0.9)),url('/homepage-background.png')] bg-cover bg-center flex items-center min-h-[60vh]"
  >
    <div class="container flex flex-col justify-center py-20">
      <h1 class="text-5xl text-white">Contact Us</h1>
      <p class="text-2xl text-white">Let's get in touch with our research club</p>
      <div>
        <i class="pi pi-facebook text-white text-4xl"></i>
        <i class="pi pi-telegram text-white text-4xl"></i>
        <i class="pi pi-linkedin text-white text-4xl"></i>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center">
    <div class="flex items-start flex-col">
      <h1 class="text-5xl text-blue-900 !py-20">How to Find Us?</h1>
      <p class="text-xl text-blue-900 mb-20">
        Institute of Technology of Cambodia, Department of Applied Mathematic and statistic
      </p>
    </div>
    <div class="max-w-4xl w-full px-4">
      <div class="aspect-[16/9] rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.6377711518855!2d104.89941711534466!3d11.570712186573026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095135c2ad598d%3A0xb2d48d6f11032091!2sDepartment%20of%20Applied%20Mathematics%20and%20Statistics%20(AMS)!5e1!3m2!1sen!2skh!4v1753932807379!5m2!1sen!2skh"
          class="block w-full h-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>
