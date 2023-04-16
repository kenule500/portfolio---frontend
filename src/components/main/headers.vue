<template>
  <div
    class="flex space-x-2 justify-between px-3 items-center border border-ash-100 rounded-full py-1"
  >
    <slot />
    <p class="text-sm text-white">{{ props.text }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "INTRODUCE",
  },
});
</script>

<style lang="scss" scoped></style>
