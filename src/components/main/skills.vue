<template>
  <div class="flex flex-col justify-between space-y-10">
    <div class="flex justify-between">
      <Headers text="SKILLS"
        ><Skills default-color="white" class="h-[18px] w-[18px]"
      /></Headers>
    </div>
    <h1 class="text-[35px] max-w-[700px]">
      My
      <span :class="`text-${appStore.primaryColor}`">Advantage</span>
    </h1>
    <div class="flex lg:pr-20 flex-wrap justify-between">
      <div
        v-for="skill in getSkills"
        :key="skill.id"
        class="space-y-6 flex flex-col items-center w-[45%] sm:w-[30%] md:w-[23%] mb-10"
      >
        <div
          :class="`flex flex-col py-8 items-center w-full h-[205px]  rounded-[35%] border hover:border-${appStore.primaryColor} border-ash-100 justify-between`"
        >
          <img
            :src="require(`@/assets/${skill.imgURL}.png`)"
            :alt="skill.name"
            class="h-[90px]"
          />
          <span :class="`text-${appStore.primaryColor}`">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skills from "@/shared/icons/skills.vue";
import Headers from "@/components/main/headers.vue";
import { useAppStore } from "@/store";
import { useProfileStore } from "@/store/profile";

const { getSkills } = useProfileStore();
const appStore = useAppStore();
console.log("img", getSkills[0].imgURL);
</script>

<style scoped></style>
