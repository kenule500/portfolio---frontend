<template>
  <div class="flex flex-col md:pl-24 px-7 pt-16">
    <h1 :class="`text-3xl`">Settings</h1>
    <div class="space-y-4 mt-14">
      <p>Colors</p>
      <div class="flex flex-wrap flex-row items-start space-x-2 md:space-x-4">
        <PrimaryColorGroup
          v-for="color in colors"
          :key="color"
          :color="color"
        />
      </div>
    </div>
    <div class="space-y-4 mt-14">
      <p>Background</p>
      <div class="flex items-start space-x-5">
        <ThemeGroup v-for="them in themes" :key="them" :theme="them" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryColorGroup from "@/shared/modal/Settings/PrimaryColorGroup.vue";
import { PrimaryColor, Theme } from "@/store/types";
import ThemeGroup from "@/shared/modal/Settings/ThemeGroup.vue";

const colors = Object.values(PrimaryColor);
const themes = Object.values(Theme);
</script>

<style scoped></style>
