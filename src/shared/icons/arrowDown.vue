<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :class="`fill-${props.defaultColor} group-hover:fill-${appStore.primaryColor}`"
  >
    <path
      fill="currentColor"
      d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"
    />
  </svg>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/store";
import { defineProps } from "vue";

const appStore = useAppStore();
const props = defineProps({
  defaultColor: {
    type: String,
    default: "ash-100",
  },
});
</script>
<style scoped></style>
