<template>
  <div
    :class="`${border} border-${props.color} rounded-full cursor-pointer ${defaultTransition}`"
    @click="setPrimary(props.color)"
  >
    <div :class="`h-5 w-5 bg-${props.color} m-1 rounded-full`"></div>
  </div>
</template>

<script setup lang="ts">
import useTailwindConfig from "@/composables/useTailwindConfig";
import { useAppStore } from "@/store";
import { PrimaryColor } from "@/store/types";
import { storeToRefs } from "pinia";
import { computed, defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: PrimaryColor.primaryColor1,
  },
});
const { defaultTransition } = useTailwindConfig();
const appStore = useAppStore();
const { primaryColor } = storeToRefs(appStore);

const border = computed(() =>
  primaryColor.value === props.color ? "border-2" : ""
);

const setPrimary = (value: unknown) => {
  console.log("color", props.color);
  appStore.setPrimary(value as PrimaryColor);
};
</script>

<style scoped></style>
