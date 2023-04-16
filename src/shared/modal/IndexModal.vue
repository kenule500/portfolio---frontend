<template>
  <div
    class="h-screen"
    :class="[
      { dark: isDark, [theme]: true },
      { 'md:w-2/3': appStore.settings === true },
      { 'min-w-[360px]': appStore.slideMenu === true },
    ]"
  >
    <div class="flex justify-end">
      <span
        class="text-right mr-3 text-lg cursor-pointer p-3"
        @click="toggleModal"
      >
        X
      </span>
    </div>
    <IndexSettings v-if="appStore.settings" />
    <IndexSlideMenu v-if="appStore.slideMenu" />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { Modal } from "@/store/types";
import { useDark } from "@vueuse/core";
import { storeToRefs } from "pinia";
import IndexSettings from "@/shared/modal/Settings/IndexSettings.vue";
import IndexSlideMenu from "./SlideMenu/IndexSlideMenu.vue";

const appStore = useAppStore();
const { theme } = storeToRefs(appStore);
const isDark = useDark();

const toggleModal = () => {
  let modal: Modal = { settings: false, slideMenu: false, modal: false };
  appStore.toggleModal(modal);
};
</script>

<style scoped></style>
