<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="[`fill-${props.defaultColor}`, ` group-hover:fill-${appStore.primaryColor} w-6 h-7`, { [`fill-${appStore.primaryColor}`]: $route.query.nav === 'intro' }]">
    <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm0 2q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-5v-6h-2v6H6Zm6-8.75Z" />
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

'bg-blue': $route.query.nav === 'home'
