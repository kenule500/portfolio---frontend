<template>
  <div class="flex justify-between">
    <Headers><Home default-color="white" class="h-[18px] w-[18px]" /></Headers>
    <div class="group" @click="toggleModal">
      <Menu :height="8" :width="7" class="cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Home from "@/shared/icons/home.vue";
import Menu from "@/shared/icons/menu.vue";
import Headers from "@/components/main/headers.vue";
import { useAppStore } from "@/store";
import { Modal } from "@/store/types";

const appStore = useAppStore();
const toggleModal = () => {
  let modal: Modal = { settings: false, slideMenu: true, modal: true };
  appStore.toggleModal(modal);
};
</script>

<style scoped></style>
