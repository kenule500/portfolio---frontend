<template>
  <div class="flex flex-col justify-between space-y-10">
    <div class="flex justify-between">
      <Headers text="SERVICES"
        ><Services default-color="white" class="h-[18px] w-[18px]"
      /></Headers>
    </div>
    <h1 class="text-[35px] max-w-[700px]">
      My
      <span :class="`text-${appStore.primaryColor}`">Services</span>
    </h1>

    <div
      v-for="service in getServices"
      :key="service.id"
      :class="`border border-ash-100 hover:border-${appStore.primaryColor} md:mr-28 p-10 rounded-3xl`"
    >
      <div class="flex justify-between">
        <span class="text-[25px]">{{ service.title }}</span>
        <component
          :is="getIconComponent(service.icon)"
          :default-color="appStore.primaryColor"
        />
      </div>
      <p class="mt-4 text-sm text-ash-100">
        {{ service.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Headers from "@/components/main/headers.vue";
import Services from "@/shared/icons/services.vue";
import Design from "@/shared/icons/design.vue";
import Code from "@/shared/icons/code.vue";
import { useAppStore } from "@/store";
import { useProfileStore } from "@/store/profile";

const { getServices } = useProfileStore();
const appStore = useAppStore();
console.log("icon", getServices[0].icon);

function getIconComponent(icon: string) {
  switch (icon) {
    case "Design":
      return Design;
    // Add other cases for other component names here
    default:
      return Code;
  }
}
</script>

<style scoped></style>
