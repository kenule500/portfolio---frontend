<template>
  <div class="flex flex-col py-6 space-y-4">
    <RouterLink :to="{ name: 'home', query: { nav: 'intro' } }" class="group w-full flex items-center cursor-pointer" :class="[{ 'space-x-3': props.slideMenu }, { 'justify-center': !props.slideMenu }]" @click="anchor('intro', 50)">
      <div v-show="props.slideMenu != true" :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[100px]  hidden group-hover:block`">
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Home</span>
        </div>
      </div>
      <Home />
      <span v-show="props.slideMenu === true" :class="[`group-hover:text-${appStore.primaryColor}`, { [`text-${appStore.primaryColor}`]: $route.query.nav === 'intro' }]">Home</span>
    </RouterLink>

    <RouterLink :to="{ name: 'home', query: { nav: 'about' } }" class="group w-full flex items-center cursor-pointer" :class="[{ 'space-x-3': props.slideMenu }, { 'justify-center': !props.slideMenu }]" @click="anchor('about', 50)">
      <div v-show="props.slideMenu != true" :class="`element bg-ash-200 text-white items-center  text-center absolute -left-[100px]  hidden group-hover:block`">
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">About</span>
        </div>
      </div>
      <User />
      <span v-show="props.slideMenu === true" :class="[`group-hover:text-${appStore.primaryColor}`, { [`text-${appStore.primaryColor}`]: $route.query.nav === 'about' }]">About</span>
    </RouterLink>
    <RouterLink :to="{ name: 'home', query: { nav: 'resume' } }" class="group w-full flex items-center cursor-pointer" :class="[{ 'space-x-3': props.slideMenu }, { 'justify-center': !props.slideMenu }]" @click="anchor('resume', 50)">
      <div v-show="props.slideMenu != true" :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]   hidden group-hover:block`">
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black font-bold mx-4">Resume</span>
        </div>
      </div>
      <Resume />
      <span v-show="props.slideMenu === true" :class="[`group-hover:text-${appStore.primaryColor}`, { [`text-${appStore.primaryColor}`]: $route.query.nav === 'resume' }]">Resume</span>
    </RouterLink>

    <RouterLink :to="{ name: 'home', query: { nav: 'services' } }" class="group w-full flex items-center cursor-pointer" :class="[{ 'space-x-3': props.slideMenu }, { 'justify-center': !props.slideMenu }]" @click="anchor('services', 50)">
      <div v-show="props.slideMenu != true" :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]    hidden group-hover:block`">
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Services</span>
        </div>
      </div>
      <Services />
      <span v-show="props.slideMenu === true" :class="[`group-hover:text-${appStore.primaryColor}`, { [`text-${appStore.primaryColor}`]: $route.query.nav === 'services' }]">Services</span>
    </RouterLink>

    <RouterLink :to="{ name: 'home', query: { nav: 'skills' } }" class="group w-full flex items-center cursor-pointer" :class="[{ 'space-x-3': props.slideMenu }, { 'justify-center': !props.slideMenu }]" @click="anchor('skills', 50)">
      <div v-show="props.slideMenu != true" :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]    hidden group-hover:block`">
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Skills</span>
        </div>
      </div>
      <Skills />
      <span v-show="props.slideMenu === true" :class="[`group-hover:text-${appStore.primaryColor}`, { [`text-${appStore.primaryColor}`]: $route.query.nav === 'skills' }]">Skills</span>
    </RouterLink>

    <RouterLink :to="{ name: 'home', query: { nav: 'projects' } }" class="group w-full flex items-center cursor-pointer" :class="[{ 'space-x-3': props.slideMenu }, { 'justify-center': !props.slideMenu }]" @click="anchor('projects', 50)">
      <div v-show="props.slideMenu != true" :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]    hidden group-hover:block`">
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Portfolio</span>
        </div>
      </div>
      <Portfolio />
      <span v-show="props.slideMenu === true" :class="[`group-hover:text-${appStore.primaryColor}`, { [`text-${appStore.primaryColor}`]: $route.query.nav === 'projects' }]">Portfolio</span>
    </RouterLink>

    <RouterLink :to="{ name: 'home', query: { nav: 'contact' } }" class="group w-full flex items-center cursor-pointer" :class="[{ 'space-x-3': props.slideMenu }, { 'justify-center': !props.slideMenu }]" @click="anchor('contact', 50)">
      <div v-show="props.slideMenu != true" :class="`element bg-ash-200 text-white  items-center  text-center absolute -left-[115px]    hidden group-hover:block`">
        <div class="flex p-4 text-center">
          <span class="text-[12px] text-black mx-4 font-bold">Contact</span>
        </div>
      </div>
      <Contact />
      <span v-show="props.slideMenu === true" :class="[`group-hover:text-${appStore.primaryColor}`, { [`text-${appStore.primaryColor}`]: $route.query.nav === 'contact' }]">Contact</span>
    </RouterLink>
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
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  slideMenu: {
    type: Boolean,
    default: false,
  },
});

const appStore = useAppStore();

const anchor = (element: string, offset: number) => {
  const myElement = document.getElementById(element);
  if (myElement) {
    myElement.style.scrollMarginTop = `${offset}px`; // Apply the offset
    myElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    myElement.style.scrollMarginTop = "0"; // Reset the scroll-margin-top value
  }
  router.push({ name: "home", query: { nav: element } });
};
</script>

<style scoped>
.element {
  clip-path: polygon(25% 25%, 75% 25%, 83.25% 41.75%, 100% 50%, 83.25% 58.25%, 75% 75%, 25% 75%);
}
</style>
\
