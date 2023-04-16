<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    :class="`group-hover:stroke-${appStore.primaryColor} w-6 h-7 stroke-${props.defaultColor}`"
  >
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M29 17v11H3V17M2 8h28v8s-6 4-14 4s-14-4-14-4V8Zm14 14v-4m4-10s0-4-4-4s-4 4-4 4"
    />
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
