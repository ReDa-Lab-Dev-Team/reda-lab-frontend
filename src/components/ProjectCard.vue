<template>
  <div :class="['bg-white rounded-xl shadow-lg overflow-hidden h-full border-1 border-black',
    isSmallCard ? 'flex flex-col' : ''
  ]">
    <!-- Image/Graphic Section -->
    <div v-if="image" class="relative bg-white p-2">
      <!-- image under overlay -->
      <img :src="image || defaultImage" :alt="title" class="w-full h-auto rounded-lg object-cover aspect-[2/1]" />
    </div>

    <!-- Content Section -->
    <div class="p-4">
      <h4 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h4>
      <p v-if="description && !isSmallCard" class="text-gray-600 mb-4">{{ description }}</p>

      <!-- Team Section -->
      <div v-if="team && team.length" class="flex items-center">
        <div class="flex -space-x-2">
          <img
            v-for="(member, index) in team"
            :key="index"
            :src="member.avatar || defaultAvatar"
            :alt="member.name || 'Team Member'"
            class="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
        <span v-if="team.length > 2" class="ml-2 text-sm text-gray-600"
          >+{{ team.length - 2 }}</span
        >
        <span class="ml-2 text-sm text-gray-600">{{ teamNames }}</span>
      </div>

      <!-- Slot for Custom Content -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface TeamMember {
  name: string;
  avatar: string;
}

const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  overlayTitle: { type: String, default: "" },
  team: {
    type: Array as () => TeamMember[],
    default: () => [],
  },
  isSmallCard: { type: Boolean, default: false },
});

// Props destructuring
const { team } = props;

// Default fallback values
const defaultImage = "https://via.placeholder.com/400x200";
const defaultAvatar = "/profiles/danielle.jpg";

const teamNames = computed(() =>
  team.length ? team.map((member: TeamMember) => member.name || "Unknown").join(", ") : ""
);
</script>

<style scoped>
/* Scoped styles if needed */
</style>
