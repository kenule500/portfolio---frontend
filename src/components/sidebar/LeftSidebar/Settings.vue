<template>
  <div
    class="p-1 bg-[#464545] w-8 h-8 flex items-center rounded-full justify-center"
  >
    <Settings :default-color="appStore.primaryColor" />
  </div>
</template>

<script setup lang="ts">
import Settings from "@/shared/icons/settings.vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
