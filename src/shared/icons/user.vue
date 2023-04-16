<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :class="`fill-${props.defaultColor} group-hover:fill-${appStore.primaryColor} w-6 h-7`"
  >
    <path
      d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12ZM76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52Z"
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
