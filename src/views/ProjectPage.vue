<template>
  <!-- header section -->
  <section
    class="bg-[linear-gradient(rgba(26,54,93,0.9),rgba(21,50,90,0.9)),url('/ITC2.png')] bg-cover bg-center pt-18 min-h-[60vh]"
  >
    <div class="max-w-[1024px] flex flex-row items-center justify-between mx-auto">
      <div class="max-w-[800px] py-20">
        <ul>
          <li class="text-6xl text-white mb-4">{Title}</li>
          <li class="text-4xl text-white mb-4">{Author}</li>
          <li class="text-4xl text-white mb-4">{Published : }</li>
          <li class="text-4xl text-white mb-4">{Tags : }</li>
        </ul>
      </div>

      <div>
        <DownloadPDFButton />
      </div>
    </div>
  </section>

  <!-- Abstract -->
  <section class="max-w-[1024px] mx-auto">
    <div class="my-7">
      <h1 class="text-4xl text-blue-900 mb-4">Abstract</h1>
      <p class="text-2xl text-blue-900 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <div class="my-7">
      <h1 class="text-4xl text-blue-900 mb-4">Media</h1>
      <p class="text-2xl text-blue-900 mb-4">List of Media Player</p>
    </div>

    <div class="my-7">
      <h1 class="text-4xl text-blue-900 mb-4">Collaborator</h1>
      <div class="flex flex-row gap-[16px] flex-wrap">
        <MemberCard :CardData="UserObject" />
        <MemberCard :CardData="UserObject" />
        <MemberCard :CardData="UserObject" />
        <MemberCard :CardData="UserObject" />
        <MemberCard :CardData="UserObject" />
        <MemberCard :CardData="UserObject" />
        <MemberCard :CardData="UserObject" />
      </div>
    </div>
  </section>
</template>

<script setup>
import DownloadPDFButton from "@/components/DownloadPDFButton.vue";
import MemberCard from "@/components/MemberCard.vue";
const UserObject = {
  imageSrc: "/AboutUs/Advisor.png",
  name: "Bunkhloem PEL",
  academicLevel: "4th Year Student.",
};
</script>
