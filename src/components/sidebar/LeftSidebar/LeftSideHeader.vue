<template>
  <div class="flex justify-between">
    <div class="flex">
      <h1 :class="`text-4xl italic font-bold text-${appStore.primaryColor}`">
        Kenule
      </h1>
      <span
        :class="`rounded-full w-5 h-5 text-[12px] border border-${appStore.primaryColor} text-center -mt-3`"
        >K</span
      >
    </div>
    <div class="flex flex-col space-y-1 text-[14px] text-right">
      <span class="leading-none">Full Stack</span>
      <span class="leading-none">Developer</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";

const appStore = useAppStore();
</script>

<style scoped></style>
