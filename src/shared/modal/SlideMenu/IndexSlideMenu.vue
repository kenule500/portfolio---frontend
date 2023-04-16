<template>
  <div class="flex flex-col space-y-10 pl-20 overflow-y-auto h-[500px]">
    <h1>Menu</h1>
    <IndexRightSidebar slide-menu class="-ml-[15px]" />
    <div class="space-y-3">
      <h1>Socail</h1>
      <div class="flex space-x-4">
        <a
          href="https://web.facebook.com/kenulenwinee35"
          target="_blank"
          rel="noopener noreferrer"
          ><div class="group"><Facebook class="w-3 h-4" /></div
        ></a>
        <a
          href="https://www.linkedin.com/in/kenule-nwinee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="group"><Linkedin class="w-3 h-4" /></div>
        </a>
        <a
          href="https://github.com/kenule500/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="group"><Github class="w-3 h-4" /></div>
        </a>
        <div class="group"><Twitter class="w-3 h-4" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IndexRightSidebar from "@/components/sidebar/RightSidebar/IndexRightSidebar.vue";
import Facebook from "@/shared/icons/facebook.vue";
import Github from "@/shared/icons/github.vue";
import Linkedin from "@/shared/icons/linkedin.vue";
import Twitter from "@/shared/icons/twitter.vue";
</script>

<style scoped></style>
