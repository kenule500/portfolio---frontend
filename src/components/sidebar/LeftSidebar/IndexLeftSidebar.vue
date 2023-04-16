<template>
  <div class="h-screen flex justify-center items-center">
    <div
      :class="`flex-col border w-[90%] p-4 py-9 rounded-3xl relative border-${appStore.primaryColor}`"
    >
      <Settings
        class="absolute -top-3 -left-3 cursor-pointer"
        @click="toggleModal"
      />
      <!-- Header  -->
      <LeftSideHeader />
      <div class="p-8">
        <img
          src="../../../assets/ken.jpg"
          alt="kenule"
          class="h-full w-full rounded-3xl"
        />
      </div>
      <div class="flex flex-col justify-center items-center text-center">
        <h1 :class="`text-3xl text-${appStore.primaryColor}`">Kenule Nwinee</h1>
        <p>Base in Port Harcourt, Nigeria</p>
        <p :class="`text-ash-100 text-[14px] mt-3`">
          &copy; {{ new Date().getFullYear() }} Kenule. All Rights Reserved
        </p>
      </div>

      <!-- Icons  -->
      <div class="flex justify-center items-center space-x-3 mt-5">
        <a
          href="https://web.facebook.com/kenulenwinee35"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            :class="`border border-ash-100 p-2 rounded-full hover:border-${appStore.primaryColor} group`"
          >
            <Facebook class="h-4 w-4" />
          </div>
        </a>
        <a
          href="https://twitter.com/KenuleNwinee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            :class="`border border-ash-100 p-2 rounded-full hover:border-${appStore.primaryColor} group`"
          >
            <Twitter class="h-4 w-4" />
          </div>
        </a>
        <a
          href="https://github.com/kenule500/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            :class="`border border-ash-100 p-2 rounded-full hover:border-${appStore.primaryColor} group`"
          >
            <Github class="h-4 w-4" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/kenule-nwinee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            :class="`border border-ash-100 p-2 rounded-full hover:border-${appStore.primaryColor} group`"
          >
            <LinkedIn class="h-4 w-4" />
          </div>
        </a>
      </div>
      <div class="flex justify-center items-center group">
        <Button text="HIRE ME!" @click="anchor('contact')"
          ><Message default-color="black"
        /></Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Settings from "@/components/sidebar/LeftSidebar/Settings.vue";
import Facebook from "@/shared/icons/facebook.vue";
import Twitter from "@/shared/icons/twitter.vue";
import Github from "@/shared/icons/github.vue";
import LinkedIn from "@/shared/icons/linkedin.vue";
import { useAppStore } from "@/store";
import LeftSideHeader from "./LeftSideHeader.vue";
import Button from "@/shared/Button.vue";
import Message from "@/shared/icons/message.vue";
import { Modal } from "@/store/types";

const appStore = useAppStore();

const toggleModal = () => {
  let modal: Modal = { settings: true, slideMenu: false, modal: true };
  appStore.toggleModal(modal);
};

const anchor = (element: string) => {
  const myElement = document.getElementById(element);
  if (myElement) {
    myElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};
</script>

<style scoped></style>
