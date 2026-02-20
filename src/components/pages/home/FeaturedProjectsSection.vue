<script setup lang="ts">
import { ref, computed } from "vue";
import ProjectCard from "@/components/common/ProjectCard.vue";
import type { Props as ProjectCardProps } from "@/components/common/ProjectCard.vue";

interface Project extends ProjectCardProps {
  id: number;
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: "Khmer Text Summarization",
    description:
      "A project focused on developing a text summarization model for the Khmer language, utilizing advanced natural language processing techniques to generate concise and coherent summaries from longer texts. A project focused on developing a text summarization model for the Khmer language, utilizing advanced natural language processing techniques to generate concise and coherent summaries from longer texts.A project focused on developing a text summarization model for the Khmer language, utilizing advanced natural language processing techniques to generate concise and coherent summaries from longer texts.A project focused on developing a text summarization model for the Khmer language, utilizing advanced natural language processing techniques to generate concise and coherent summaries from longer texts.A project focused on developing a text summarization model for the Khmer language, utilizing advanced natural language processing techniques to generate concise and coherent summaries from longer texts.A project focused on developing a text summarization model for the Khmer language, utilizing advanced natural language processing techniques to generate concise and coherent summaries from longer texts.",
    // image: "https://via.placeholder.com/600x300",
    image: "https://picsum.photos/400/300",
    club: "CV Club",
    status: "On going",
    team: [
      { name: "N. Vanna", avatar: "https://i.pravatar.cc/40?img=1" },
      { name: "N. Tina", avatar: "https://i.pravatar.cc/40?img=2" },
      { name: "Others", avatar: "https://i.pravatar.cc/40?img=3" },
    ],
  },
  {
    id: 2,
    title: "FINTECH Project Management",
    image: "https://picsum.photos/400/300",
    club: "Business Club",
    status: "Done",
    team: [
      { name: "N. Vanna", avatar: "https://i.pravatar.cc/40?img=4" },
      { name: "S. Rachana", avatar: "https://i.pravatar.cc/40?img=5" },
    ],
  },
  {
    id: 3,
    title: "CAMTour Chatbot",
    image: "https://picsum.photos/400/300",
    club: "CV Club",
    status: "On going",
    team: [
      { name: "N. Tina", avatar: "https://i.pravatar.cc/40?img=6" },
      { name: "S. Rachana", avatar: "https://i.pravatar.cc/40?img=7" },
    ],
  },
  {
    id: 4,
    title: "AI Finance Assistant",
    image: "https://picsum.photos/400/300",
    club: "Tech Club",
    status: "Done",
    team: [{ name: "Dara", avatar: "https://i.pravatar.cc/40?img=8" }],
  },
  {
    id: 5,
    title: "E-Commerce Analytics",
    image: "https://picsum.photos/400/300",
    club: "Business Club",
    status: "On going",
    team: [{ name: "Sokha", avatar: "https://i.pravatar.cc/40?img=9" }],
  },
]);

const bigProject = computed(() => projects.value[0]);
const smallProjects = computed(() => projects.value.slice(1, 5));
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- ================= DESKTOP VIEW ================= -->
    <div class="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-6">
      <!-- Big Card -->
      <div class="col-span-1 row-span-2">
        <ProjectCard v-bind="bigProject" size="large" />
      </div>

      <!-- Small Cards Grid -->
      <!-- <div class="col-span-2 grid grid-cols-2 gap-6"> -->
      <ProjectCard
        v-for="project in smallProjects"
        :key="project.id"
        v-bind="project"
        size="small"
      />
      <!-- </div> -->
    </div>

    <!-- ================= MOBILE VIEW ================= -->
    <div class="lg:hidden">
      <div class="flex overflow-x-auto space-x-4 snap-x snap-mandatory pb-4">
        <div v-for="project in smallProjects" :key="project.id" class="min-w-[85%] snap-start">
          <ProjectCard v-bind="project" size="small" />
        </div>
      </div>
    </div>
  </div>
</template>
