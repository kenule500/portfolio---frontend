<template>
  <div
    class="p-3 rounded-3xl text-center"
    :class="`text-black bg-${appStore.primaryColor} w-[80%] mt-6 cursor-pointer font-medium flex justify-center space-x-2 items-center group-hover:bg-transparent ring-2 ring-${appStore.primaryColor} group-hover:border-${appStore.primaryColor}`"
  >
    <button class="flex items-center space-x-2">
      <slot />
      <span :class="`group-hover:text-${appStore.primaryColor}`">
        {{ props.text }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
