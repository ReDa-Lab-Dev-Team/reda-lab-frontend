<template>
  <header>
    <nav
      :class="[
        'fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200 py-3'
          : 'bg-transparent py-5'
      ]"
    >
      <!-- Logo -->
      <div>
        <a href="/" class="flex items-center">
          <img
            :src="isScrolled ? reda_Logo_Blue : reda_Logo_Light"
            alt="ReDa Lab Logo"
            :class="[
              'transition-all duration-300 drop-shadow-md hover:scale-110',
              isScrolled ? 'h-14' : 'h-20'
            ]"
          />
        </a>
      </div>

      <!-- Nav Links -->
      <ul class="hidden md:flex items-center space-x-8">
        <li v-for="item in navItems" :key="item.name">
          <RouterLink
            :to="item.link"
            class="relative font-medium transition-all duration-300"
            :class="isScrolled ? 'text-gray-800' : 'text-white'"
          >
            {{ item.name }}

            <!-- Animated underline -->
            <span
              class="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

defineOptions({
  name: "ComponentNavbar",
});

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const reda_Logo_Light = "/ReDa-Icon.png";
const reda_Logo_Blue = "/ReDa-Icon-Blue.png";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/AboutUs" },
  { name: "Projects", link: "/Projects" },
  { name: "Events", link: "/Events" },
  { name: "Board Members", link: "/Board-Members" },
  { name: "Contact", link: "/Contact" },
];
</script>
