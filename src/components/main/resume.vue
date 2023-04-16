<template>
  <div class="flex flex-col justify-between space-y-10">
    <div class="flex justify-between">
      <Headers text="RESUME"
        ><Resume default-color="white" class="h-[18px] w-[18px]"
      /></Headers>
    </div>
    <h1 class="text-[35px] max-w-[700px]">
      Education &
      <span :class="`text-${appStore.primaryColor}`">Experience</span>
    </h1>
    <div>
      <div
        v-for="profile in getEducationAndExperience"
        :key="profile.id"
        class="border-l border-l-ash-100 pl-10 sm:pl-20 relative pb-10 group"
      >
        <span
          :class="`absolute w-3 h-3 rounded-full bg-ash-100 -left-[6px] group-hover:bg-${appStore.primaryColor}`"
        ></span>
        <div class="text-ash-100">
          <span :class="`group-hover:text-${appStore.primaryColor}`"
            >{{ profile.startDate.getFullYear() }} -
            {{ profile.endDate.getFullYear() }}</span
          >
        </div>
        <h1 class="text-[23px] mt-6">
          {{ profile.title }}
          <span v-if="profile.stack" class="text-sm text-ash-100"
            >({{ profile.stack }})</span
          >
        </h1>
        <p class="text-sm text-ash-100">{{ profile.organization }}</p>
        <p class="text-sm text-ash-100 mt-2">{{ profile.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Headers from "@/components/main/headers.vue";
import Resume from "@/shared/icons/resume.vue";
import { useAppStore } from "@/store";
import { useProfileStore } from "@/store/profile";

const appStore = useAppStore();
const profileStore = useProfileStore();
const { getEducationAndExperience } = profileStore;
</script>

<style scoped></style>
