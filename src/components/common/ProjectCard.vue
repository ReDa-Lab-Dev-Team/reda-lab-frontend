<script setup lang="ts">
import { truncateAtWordBoundary } from '@/utils/textTruncation';

interface TeamMember {
  name: string;
  avatar: string;
}

export interface Props {
  title: string;
  description?: string;
  image: string;
  club: string;
  status: "Done" | "On going";
  team: TeamMember[];
  size?: "large" | "small";
}

withDefaults(defineProps<Props>(), {
  size: "small",
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden border">
    <img :src="image" class="w-full object-cover" :class="size === 'large' ? 'h-56' : 'h-40'" />

    <div class="space-y-3" :class="size === 'large' ? 'p-6 space-y-4' : 'p-4'">
      <h3 class="font-semibold" :class="size === 'large' ? 'text-xl font-bold' : 'text-sm'">
        {{ title }}
      </h3>

      <p v-if="description && size === 'large'" class="text-gray-600 text-sm">
        {{ truncateAtWordBoundary(description, 500) }}
      </p>

      <!-- Tags -->
      <div class="flex gap-2">
        <span
          class="text-xs bg-black text-white rounded-md"
          :class="size === 'large' ? 'px-3 py-1' : 'px-2 py-1'"
        >
          {{ club }}
        </span>


        <span
          class="text-xs rounded-md"
          :class="[
            size === 'large' ? 'px-3 py-1' : 'px-2 py-1',
            status === 'Done' ? 'bg-green-500 text-white' : 'bg-yellow-400 text-black',
          ]"
        >
          {{ status }}
        </span>
      </div>

      <!-- Team -->
      <div class="flex -space-x-2">
        <img
          v-for="(member, i) in team"
          :key="i"
          :src="member.avatar"
          :alt="member.name"
          class="rounded-full border-2 border-white"
          :class="size === 'large' ? 'w-8 h-8' : 'w-7 h-7'"
        />
      </div>
    </div>
  </div>
</template>
