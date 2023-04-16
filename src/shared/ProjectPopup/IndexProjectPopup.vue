<template>
  <div class="w-full">
    <div class="flex justify-end">
      <span class="text-right text-lg cursor-pointer p-3"> X </span>
    </div>
    <div class="flex justify-center items-center w-full h-full md:pb-24 pb-2">
      <div
        class="md:w-[80%] w-[100%] h-[100%] flex overflow-y-scroll md:overflow-y-hidden"
        :class="[{ dark: isDark, [theme]: true }]"
        @click.stop
      >
        <ProjectItem :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { useDark } from "@vueuse/core";
import { storeToRefs } from "pinia";
import ProjectItem from "./ProjectItem.vue";
import { useProfileStore } from "@/store/profile";

const appStore = useAppStore();
const profileStore = useProfileStore();

const { project } = profileStore;
const { theme } = storeToRefs(appStore);
const isDark = useDark();
</script>

<style scoped></style>
