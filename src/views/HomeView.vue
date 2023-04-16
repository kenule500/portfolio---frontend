<template>
  <div class="min-h-full">
    <div class="flex justify-center">
      <div class="w-[25%] hidden xl:block">
        <div class="sticky top-0">
          <IndexLeftSidebar />
        </div>
      </div>
      <main class="xl:w-[75%] px-[15px] md:px-[40px] pt-16 xl:pl-40">
        <IndexMain />
      </main>
      <div
        :class="`w-[50px] border-2 border-${appStore.primaryColor} bg-${appStore.theme} rounded-full fixed top-1/2 transform -translate-y-1/2 right-10 hidden md:block`"
      >
        <IndexRightSidebar />
      </div>
    </div>
  </div>
  <div
    v-if="appStore.modal"
    class="bg-overlay min-w-full fixed top-0 z-40 flex justify-end bg-opacity-90"
    @click="toggleModal"
  >
    <IndexModal @click.stop />
  </div>
  <!-- projectI Item Popup  -->
  <div
    v-if="appStore.projectPopup"
    class="bg-overlay min-w-full fixed top-0 z-40 flex justify-center h-screen bg-opacity-90"
    @click="profileStore.setProject()"
  >
    <IndexProjectPopup />
  </div>
</template>

<script lang="ts" setup>
import IndexLeftSidebar from "@/components/sidebar/LeftSidebar/IndexLeftSidebar.vue";
import IndexRightSidebar from "@/components/sidebar/RightSidebar/IndexRightSidebar.vue";
import IndexModal from "@/shared/modal/IndexModal.vue";
import IndexMain from "@/components/main/IndexMain.vue";
import { useAppStore } from "@/store";
import { Modal } from "@/store/types";
import IndexProjectPopup from "@/shared/ProjectPopup/IndexProjectPopup.vue";
import { useProfileStore } from "@/store/profile";

const appStore = useAppStore();
const profileStore = useProfileStore();

const toggleModal = () => {
  let modal: Modal = { settings: false, slideMenu: false, modal: false };
  appStore.toggleModal(modal);
};
// const toggleProject = () => {
//   appStore.toggleProject();
// };
</script>
<style scoped></style>
