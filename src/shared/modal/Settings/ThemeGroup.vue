<template>
  <div
    :class="`border-2 border-${borderColor} rounded-lg cursor-pointer h-7 w-16 overflow-hidden`"
    @click="setTheme(props.theme)"
  >
    <div :class="`h-full w-full bg-${props.theme}`"></div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { Theme } from "@/store/types";
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { defineProps } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: Theme.darkMode,
  },
});
const appStore = useAppStore();
const { theme } = storeToRefs(appStore);

const borderColor = computed(() =>
  theme.value === props.theme ? `${appStore.primaryColor}` : "white"
);

const setTheme = (value: unknown) => {
  appStore.setTheme(value as Theme);
};
</script>

<style scoped></style>
