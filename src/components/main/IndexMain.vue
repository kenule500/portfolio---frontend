<template>
  <div class="space-y-12 pb-20">
    <div>
      <MainHeader id="intro" />
    </div>
    <div class="md:pr-20 space-y-[160px]">
      <MainIntro />
      <About id="about" />
      <Resume id="resume" />
      <Services id="services" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  </div>
</template>

<script setup lang="ts">
import About from "./about.vue";
import Contact from "./contact.vue";
import MainHeader from "./mainHeader.vue";
import MainIntro from "./mainIntro.vue";
import Projects from "./projects.vue";
import Resume from "./resume.vue";
import Services from "./services.vue";
import Skills from "./skills.vue";
</script>

<style scoped></style>
