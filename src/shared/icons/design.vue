<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    :class="`group-hover:stroke-${appStore.primaryColor} w-6 h-7 stroke-${props.defaultColor}`"
  >
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8.5" cy="4" r="1" />
      <circle cx="4.5" cy="9.5" r=".5" />
      <circle cx="4.5" cy="5.5" r="1" />
      <path
        d="M9.52 12.28a1 1 0 0 0-.65-.88a2 2 0 0 1 .63-3.9h1.87a2 2 0 0 0 1.89-2.67a6.5 6.5 0 1 0-6.13 8.67a6.3 6.3 0 0 0 1.74-.24a.9.9 0 0 0 .65-.98Z"
      />
    </g>
  </svg>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
const props = defineProps({
  defaultColor: {
    type: String,
    default: "ash-100",
  },
});
</script>
<style scoped></style>
