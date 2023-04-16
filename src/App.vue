<template>
  <div
    :class="`font-body h-screen scrollbar-thin overflow-y-scroll scrollbar-thumb-${appStore.primaryColor} scrollbar-track-${appStore.theme} thumb`"
  >
    <div :class="{ dark: isDark, [theme]: true }">
      <router-view />
    </div>
    <div
      v-if="appStore.messageSuccess"
      :class="`fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-${appStore.theme} rounded-3xl border border-ash-100 p-5`"
    >
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
        background="transparent"
        speed="1"
        style="width: 150px; height: 100px"
        autoplay
      ></lottie-player>
      <h1 class="text-white text-center text-[20px]">MESSAGE SENT</h1>
    </div>
    <div
      v-if="appStore.messageFailure"
      :class="`fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-${appStore.theme} rounded-3xl border border-ash-100 p-5`"
    >
      <Error default-color="red" />
      <h1 class="text-white text-center text-[20px]">MESSAGE ERROR</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Error from "@/shared/icons/error.vue";
import { storeToRefs } from "pinia";
import { useAppStore } from "./store/index";
import { useDark } from "@vueuse/core";
import { onMounted } from "vue";

const appStore = useAppStore();
const { theme } = storeToRefs(appStore);
const isDark = useDark();

onMounted(() => {
  appStore.defaultTheme();
  appStore.defaultPrimary();
});
</script>

<style lang="scss">
.thumb::-webkit-scrollbar-thumb {
  border-radius: 60px !important;
}
.primary1 path {
  @apply fill-primary1;
}
.primary2 path {
  @apply fill-primary2;
}
.primary3 path {
  @apply fill-primary3;
}
.primary4 path {
  @apply fill-primary4;
}
.primary5 path {
  @apply fill-primary5;
}
.primary6 path {
  @apply fill-primary5;
}
.primary7 path {
  @apply fill-primary6;
}
.ashSvg path {
  @apply fill-ash-100;
}

.bgDark {
  /* Styles for dark mode */
  @apply bg-bgDark text-white;
}
.bgRed {
  /* Styles for light mode */
  @apply bg-bgRed  text-white;
}
.bgBlue {
  /* Styles for light mode */
  @apply bg-bgBlue text-white;
}
</style>
