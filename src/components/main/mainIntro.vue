<template>
  <div>
    <h1 class="text-[40px] sm:text-[80px] leading-tight font-light">
      Hi from
      <span :class="`text-${appStore.primaryColor} font-normal italic`">KENULE</span>,<br />
      I'm a Bubble.io, Vue.js, Nuxt.js, Node.js & Nest.js Developer.
    </h1>
    <p class="text-ash-100 mt-10">I design and code beautifully simple and complex things.</p>
    <p class="text-ash-100">Creating visually stunning websites and web applications that captivate users.</p>

    <div class="justify-end flex mt-6">
      <div class="relative border border-ash-100 rounded-full p-4 hidden md:block">
        <ArrowDown class="absolute h-14 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
        <img src="../../assets/round-text.png" alt="" class="spin" />
      </div>
    </div>
    <div class="flex justify-between xs:justify-start xs:space-x-32">
      <div>
        <h1 :class="`text-${appStore.primaryColor}`"><span class="text-[80px]">4</span><span class="text-[40px]">+</span></h1>
        <p class="text-ash-100 -mt-5">YEARS OF</p>
        <p class="text-ash-100">EXPERIENCE</p>
      </div>
      <div>
        <h1 :class="`text-${appStore.primaryColor}`"><span class="text-[80px]">10</span><span class="text-[40px]">+</span></h1>
        <p class="text-ash-100 -mt-5">Projects</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowDown from "@/shared/icons/arrowDown.vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
</script>

<style scoped>
.spin {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
