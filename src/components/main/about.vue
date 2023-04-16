<template>
  <div class="flex flex-col justify-between space-y-10">
    <div class="flex justify-between">
      <Headers text="ABOUT"
        ><User default-color="white" class="h-[18px] w-[18px]"
      /></Headers>
    </div>
    <h1 class="text-[35px] max-w-[700px]">
      Every great design begin with an even
      <span :class="`text-${appStore.primaryColor}`">better story</span>
    </h1>
    <p class="text-ash-100 max-w-[700px]">
      Since beginning my journey as a freelance designer nearly 5 years ago,
      I've done remote work for agencies, consulted for startups, and
      collaborated with talented people to create digital products for both
      business and consumer use. I'm quietly confident, naturally curious, and
      perpetually working on improving my chopsone design problem at a time.
    </p>
  </div>
</template>

<script setup lang="ts">
import Headers from "@/components/main/headers.vue";
import User from "@/shared/icons/user.vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
</script>

<style scoped></style>
