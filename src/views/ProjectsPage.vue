<template>
  <section
    class="bg-[linear-gradient(rgba(26,54,93,0.9),rgba(21,50,90,0.9)),url('/ITC2.png')] bg-cover bg-center flex items-center min-h-[60vh]"
  >
    <div class="container flex flex-col justify-center py-20">
      <h1 class="text-6xl text-white mb-4">Let's explore our research.</h1>
      <p class="text-4xl text-white mb-4">Lorem Ipsum blahb blah</p>
    </div>
  </section>

  <section class="flex flex-row justify-center gap-20 my-7">
    <div class="flex flex-col gap-4 pt-4 border-t-2 border-blue-900">
      <h1 class="text-4xl text-blue-900">All Project and research</h1>
      <ProjectCard
        title="Real time fire and smoke alarm system using CNN"
        end_date="2024-08-30"
        tags="[LLM, CNN]"
        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute "
      />

      <ProjectCard
        title="Real time fire and smoke alarm system using CNN"
        end_date="2024-08-30"
        tags="[LLM, CNN]"
        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute "
      />

      <ProjectCard
        title="Real time fire and smoke alarm system using CNN"
        end_date="2024-08-30"
        tags="[LLM, CNN]"
        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute "
      />

      <ProjectCard
        title="Real time fire and smoke alarm system using CNN"
        end_date="2024-08-30"
        tags="[LLM, CNN]"
        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute "
      />
    </div>

    <div class="flex flex-col gap-4 pt-4 border-t-2 border-blue-900">
      <h1 class="text-4xl text-blue-900">Popular Topic</h1>
      <NewProjectCard title="Real time fire and smoke alarm system using CNN" tags="[LLM, CNN]" />
      <NewProjectCard title="Real time fire and smoke alarm system using CNN" tags="[LLM, CNN]" />
      <NewProjectCard title="Real time fire and smoke alarm system using CNN" tags="[LLM, CNN]" />
      <NewProjectCard title="Real time fire and smoke alarm system using CNN" tags="[LLM, CNN]" />
      <NewProjectCard title="Real time fire and smoke alarm system using CNN" tags="[LLM, CNN]" />
    </div>
  </section>
</template>

<script setup>
import NewProjectCard from "@/components/NewProjectCard.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>
