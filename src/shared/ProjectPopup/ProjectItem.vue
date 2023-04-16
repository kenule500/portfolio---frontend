<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex flex-col pb-2 md:w-[50%] w-[100%] mb-4">
      <img
        :src="require(`@/assets/${props.project?.img}.png`)"
        class="w-full h-full"
        alt=""
      />
      <div class="justify-around flex flex-col pl-4 h-[20%] space-y-2">
        <a
          :href="props.project?.link"
          target="_blank"
          rel="noopener noreferrer"
          :class="`text-[20px] hover:text-${appStore.primaryColor} mt-3`"
          >{{ props.project?.name }}</a
        >
        <div class="flex flex-wrap items-center space-x-1">
          <div
            v-for="tool in props.project?.tools"
            :key="tool"
            :class="`bg-white group-hover:bg-${appStore.primaryColor} text-black text-sm p-1 px-2 rounded-3xl mt-2`"
          >
            <span>{{ tool }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="`md:w-[50%] w-[100%] p-3  md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-${appStore.primaryColor} md:scrollbar-track-${appStore.theme} thumb`"
    >
      <h1>Description</h1>
      <p class="text-ash-100">
        {{ props.project?.description }}
      </p>
      <h1 class="mt-6">Project Outcome</h1>
      <p class="text-ash-100">
        {{ props.project?.outcome }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "@/store/types";
import { PropType, defineProps } from "vue";
import { useAppStore } from "@/store";
const appStore = useAppStore();

const props = defineProps({
  project: {
    type: Object as PropType<Project | undefined>,
    default: undefined,
  },
});
</script>

<style scoped></style>
