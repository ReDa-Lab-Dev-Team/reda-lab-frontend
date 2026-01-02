<template>
  <section class="py-12 px-4 bg-gradient-to-b from-blue-900/50 to-blue-900/0 text-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">Latest News</h2>
        <p class="text-xl opacity-90 text-blue-900">
          See our ReDA upcoming events and News update.
        </p>
      </div>

      <!-- Featured Projects Grid system -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Large Card (Left) -->
        <div class="col-span-1 lg:col-span-1">
          <ProjectCard
            :key="featuredProjects[0].id"
            :title="featuredProjects[0].title"
            :description="featuredProjects[0].description"
            :image="featuredProjects[0].image"
            :overlayTitle="featuredProjects[0].category"
            :team="featuredProjects[0].team.members"
          />
        </div>

        <!-- Right Column Cards -->
        <div class="col-span-1 lg:col-span-2 h-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            <ProjectCard
              v-for="project in featuredProjects.slice(1)"
              :is-small-card="true"
              :key="project.id"
              :title="project.title"
              :description="project.description"
              :image="project.image"
              :overlayTitle="project.category"
              :team="project.team.members"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ui/ProjectCard.vue";

const featuredProjects = [
  {
    id: 1,
    title: "Khmer Text Summarization",
    category: "NLP API",
    description:
      "Develops a Large Language Model (LLM) approach to condense Khmer documents into clear, concise summaries, making information more accessible for research, education, and the public.",
    team: {
      members: [
        { name: "N. Vanna", avatar: "/profiles/adolf.jpg" },
        { name: "M. Danielle", avatar: "/profiles/danielle.jpg" },
      ],
      additionalCount: 6,
    },
    image: "/project-image-01.png",
    graphic: "https://picsum.photos/seed/picsum/400/200",
  },
  {
    id: 2,
    title: "Face Detection and Face Recognition",
    category: "AI/ML",
    description:
      "A project focused on developing robust face detection and recognition systems for security and authentication.",
    team: {
      members: [
        { name: "N. Vanna", avatar: "/profiles/adolf.jpg" },
        { name: "M. Danielle", avatar: "/profiles/danielle.jpg" },
      ],
      additionalCount: 4,
    },
    image: "/project-image-02.webp",
  },
  {
    id: 3,
    title: "FINTECH Project Management",
    category: "Finance",
    description:
      "A platform to streamline project management processes for financial technology companies.",
    team: {
      members: [
        { name: "N. Vanna", avatar: "/profiles/adolf.jpg" },
        { name: "M. Danielle", avatar: "/profiles/danielle.jpg" },
      ],
    },
    image: "/project-image-03.png",
  },
  {
    id: 4,
    title: "Course Recommendation System",
    category: "Education",
    description:
      "An AI-powered system to recommend personalized courses to students based on their interests and learning history.",
    team: {
      members: [{ name: "N. Vanna", avatar: "/profiles/adolf.jpg" }],
    },
    image: "https://picsum.photos/seed/picsum/400/250",
  },
  {
    id: 5,
    title: "CAMTour Chatbot",
    category: "Tourism",
    description:
      "A chatbot designed to assist tourists in exploring Cambodia by providing recommendations and answering queries.",
    team: {
      members: [
        { name: "N. Vanna", avatar: "/profiles/adolf.jpg" },
        { name: "M. Danielle", avatar: "/profiles/danielle.jpg" },
      ],
      additionalCount: 3,
    },
    image: "https://picsum.photos/seed/picsum/400/250",
  },
];
</script>

<style scoped>
/* No additional styling needed as we're using Tailwind CSS classes */
</style>
