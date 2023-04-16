<template>
  <div class="flex flex-col justify-between space-y-10">
    <div class="flex justify-between">
      <Headers text="PORTFOLIO"
        ><Portfolio default-color="white" class="h-[18px] w-[18px]"
      /></Headers>
    </div>
    <h1 class="text-[35px] max-w-[700px]">
      Featured
      <span :class="`text-${appStore.primaryColor}`">Projects</span>
    </h1>

    <div class="flex flex-wrap space-y-14 justify-between">
      <div
        v-for="(project, index) in getProjects"
        :key="project.id"
        :class="`cursor-pointer relative w-[${reduceWidth(index)}] group`"
      >
        <div
          :class="`rounded-3xl overflow-hidden  h-[${increaseHeight(index)}]`"
          @click="profileStore.setProject(project.id)"
        >
          <img
            :src="require(`@/assets/${project.img}.png`)"
            class="w-full h-full"
            alt=""
          />
          <div
            class="absolute flex-wrap space-x-1 bottom-16 xl:bottom-20 left-2 hidden md:flex"
          >
            <div
              v-for="tool in project.tools"
              :key="tool"
              :class="`bg-white group-hover:bg-${appStore.primaryColor} text-sm text-black p-1 px-2  rounded-3xl`"
            >
              <span>{{ tool }}</span>
            </div>
          </div>
        </div>

        <a :href="project.link" target="_blank" rel="noopener noreferrer"
          ><p class="text-[25px] mt-6 group-hover:underline">
            {{ project.name }}
          </p></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Headers from "@/components/main/headers.vue";
import Portfolio from "@/shared/icons/portfolio.vue";
import { useAppStore } from "@/store";
import { useProfileStore } from "@/store/profile";
import { computed, onMounted, onUnmounted, ref } from "vue";

const { getProjects } = useProfileStore();

const appStore = useAppStore();
const profileStore = useProfileStore();
const screenWidth = ref(window.innerWidth);

const reduceWidth = computed(() => (index: number) => {
  if (screenWidth.value >= 768 && (index === 1 || index === 2)) {
    return "45%";
  } else {
    return "100%";
  }
});

const increaseHeight = computed(() => (index: number) => {
  if (screenWidth.value >= 768 && (index === 1 || index === 2)) {
    return "300px";
  }
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

// Update screenWidth ref on resize
const handleResize = () => {
  screenWidth.value = window.innerWidth;
};
</script>

<style scoped></style>
