<template>
  <div class="flex flex-col py-6 space-y-4">
    <div
      class="group w-full flex items-center cursor-pointer"
      :class="[
        { 'space-x-3': props.slideMenu },
        { 'justify-center': !props.slideMenu },
      ]"
      @click="anchor('intro')"
    >
      <div
        v-show="props.slideMenu != true"
        :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[100px]  hidden group-hover:block`"
      >
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Home</span>
        </div>
      </div>
      <Home />
      <span
        v-show="props.slideMenu === true"
        :class="`group-hover:text-${appStore.primaryColor}`"
        >Home</span
      >
    </div>

    <div
      class="group w-full flex items-center cursor-pointer"
      :class="[
        { 'space-x-3': props.slideMenu },
        { 'justify-center': !props.slideMenu },
      ]"
      @click="anchor('about')"
    >
      <div
        v-show="props.slideMenu != true"
        :class="`element bg-ash-200 text-white items-center  text-center absolute -left-[100px]  hidden group-hover:block`"
      >
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">About</span>
        </div>
      </div>
      <User />
      <span
        v-show="props.slideMenu === true"
        :class="`group-hover:text-${appStore.primaryColor}`"
        >About</span
      >
    </div>
    <div
      class="group w-full flex items-center cursor-pointer"
      :class="[
        { 'space-x-3': props.slideMenu },
        { 'justify-center': !props.slideMenu },
      ]"
      @click="anchor('resume')"
    >
      <div
        v-show="props.slideMenu != true"
        :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]   hidden group-hover:block`"
      >
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black font-bold mx-4">Resume</span>
        </div>
      </div>
      <Resume />
      <span
        v-show="props.slideMenu === true"
        :class="`group-hover:text-${appStore.primaryColor}`"
        >Resume</span
      >
    </div>

    <div
      class="group w-full flex items-center cursor-pointer"
      :class="[
        { 'space-x-3': props.slideMenu },
        { 'justify-center': !props.slideMenu },
      ]"
      @click="anchor('services')"
    >
      <div
        v-show="props.slideMenu != true"
        :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]  hidden group-hover:block`"
      >
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Services</span>
        </div>
      </div>
      <Services />
      <span
        v-show="props.slideMenu === true"
        :class="`group-hover:text-${appStore.primaryColor}`"
        >Services</span
      >
    </div>

    <div
      class="group w-full flex items-center cursor-pointer"
      :class="[
        { 'space-x-3': props.slideMenu },
        { 'justify-center': !props.slideMenu },
      ]"
      @click="anchor('skills')"
    >
      <div
        v-show="props.slideMenu != true"
        :class="`element bg-ash-200 text-white items-center  text-center absolute -left-[100px]   hidden group-hover:block`"
      >
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Skills</span>
        </div>
      </div>
      <Skills />
      <span
        v-show="props.slideMenu === true"
        :class="`group-hover:text-${appStore.primaryColor}`"
        >Skills</span
      >
    </div>

    <div
      class="group w-full flex items-center cursor-pointer"
      :class="[
        { 'space-x-3': props.slideMenu },
        { 'justify-center': !props.slideMenu },
      ]"
      @click="anchor('projects')"
    >
      <div
        v-show="props.slideMenu != true"
        :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]    hidden group-hover:block`"
      >
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Portfolio</span>
        </div>
      </div>
      <Portfolio />
      <span
        v-show="props.slideMenu === true"
        :class="`group-hover:text-${appStore.primaryColor}`"
        >Portfolio</span
      >
    </div>
    <div
      class="group w-full flex items-center cursor-pointer"
      :class="[
        { 'space-x-3': props.slideMenu },
        { 'justify-center': !props.slideMenu },
      ]"
      @click="anchor('contact')"
    >
      <div
        v-show="props.slideMenu != true"
        :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]   hidden group-hover:block`"
      >
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Contact</span>
        </div>
      </div>
      <Contact />
      <span
        v-show="props.slideMenu === true"
        :class="`group-hover:text-${appStore.primaryColor}`"
        >Contact</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Home from "@/shared/icons/home.vue";
import User from "@/shared/icons/user.vue";
import Resume from "@/shared/icons/resume.vue";
import Services from "@/shared/icons/services.vue";
import Portfolio from "@/shared/icons/portfolio.vue";
import Contact from "@/shared/icons/contact.vue";
import Skills from "@/shared/icons/skills.vue";
import { useAppStore } from "@/store";
import { defineProps, onMounted, onUnmounted, ref } from "vue";
import { computed } from "@vue/reactivity";

const props = defineProps({
  slideMenu: {
    type: Boolean,
    default: false,
  },
});

const appStore = useAppStore();

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

const pos = computed(() => (scrollPos.value = window.scrollY));
const scrollPos = ref(0);

const handleScroll = () => {
  scrollPos.value = window.scrollY;
  console.log("Updated scroll positio:", scrollPos.value);
};
window.addEventListener("scroll", (event) => {
  let scroll = window.scrollY;
  console.log(scroll);
});
onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.element {
  clip-path: polygon(
    25% 25%,
    75% 25%,
    83.25% 41.75%,
    100% 50%,
    83.25% 58.25%,
    75% 75%,
    25% 75%
  );
}
</style>
\
