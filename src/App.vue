<template>
  <div :class="`font-body h-screen scrollbar-thin overflow-y-scroll scrollbar-thumb-${appStore.primaryColor} scrollbar-track-${appStore.theme} thumb`">
    <div :class="{ dark: isDark, [theme]: true }">
      <RouterView />
    </div>
    <div v-if="appStore.messageSuccess" :class="`fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-${appStore.theme} rounded-3xl border border-ash-100 p-5`">
      <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json" background="transparent" speed="1" style="width: 150px; height: 100px" autoplay></lottie-player>
      <h1 class="text-white text-center text-[20px]">MESSAGE SENT</h1>
    </div>
    <div v-if="appStore.messageFailure" :class="`fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-${appStore.theme} rounded-3xl border border-ash-100 p-5`">
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
import { onMounted, reactive } from "vue";
import { useHead } from "@vueuse/head";
import { computed } from "@vue/reactivity";

const appStore = useAppStore();
const { theme } = storeToRefs(appStore);
const isDark = useDark();
const siteData = reactive({
  title: `Kenule Nwinee`,
  description: `Since beginning my journey as a freelance designer nearly 5 years ago,
      I've done remote work for agencies, consulted for startups, and
      collaborated with talented people to create digital products for both
      business and consumer use.s`,
  image: `https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/301146394_605561811235041_6413041582243044260_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHbA33YdpU-dDWJP2jgpNBixVtqvzJU2LzFW2q_MlTYvBqEyvZxy0GEIM34-JSM16cEhVPASPH7Aq7DfpAt22zj&_nc_ohc=LHbhNi20_K4AX_-IrGy&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AfBT7mWeZpWMfZN7_mtK8Iia5Rkdcz8W93l-MjIDHQpL8A&oe=64422484`,
  // favicon: null || "/path/to/favicon.png",
});

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
    {
      property: "og:image",
      content: computed(() => siteData.image),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: computed(() => siteData.favicon),
    },
  ],
});

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
