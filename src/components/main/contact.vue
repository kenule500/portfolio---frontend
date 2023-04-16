<template>
  <div class="flex flex-col justify-between space-y-10">
    <div class="flex justify-between">
      <Headers text="CONTACT"
        ><Contact default-color="white" class="h-[18px] w-[18px]"
      /></Headers>
    </div>
    <h1 class="text-[35px] max-w-[700px]">
      Let's Work
      <span :class="`text-${appStore.primaryColor}`">Together!</span>
    </h1>
    <h1 class="text-[20px]">starboynwinee@gmail.com</h1>
    <form
      ref="form"
      class="flex flex-col space-y-10"
      @submit.prevent="sendMessage"
    >
      <div
        class="flex sm:space-x-3 flex-col sm:flex-row space-y-8 sm:space-y-0"
      >
        <div class="w-[100%] xs:w-[50%] flex flex-col space-y-2">
          <label>FULL NAME</label>
          <Field
            v-model="contactForm.from_name"
            :rules="{ required: true }"
            name="from_name"
            placeholder="Your Full Name"
            class="bg-transparent focus:outline-none"
            type="text"
          />
          <p class="text-[12px] text-rose-400">{{ errors.from_name }}</p>
        </div>
        <div class="w-[100%] xs:w-[50%] flex flex-col space-y-2">
          <label>EMAIL</label>
          <Field
            v-model="contactForm.from_email"
            name="from_email"
            :rules="{ email: true, required: true }"
            placeholder="Your Email"
            class="bg-transparent focus:outline-none"
            type="email"
          />
          <p class="text-[12px] text-rose-400">{{ errors.from_email }}</p>
        </div>
      </div>
      <div
        class="flex sm:space-x-3 flex-col sm:flex-row space-y-8 sm:space-y-0"
      >
        <div class="w-[100%] xs:w-[50%] flex flex-col space-y-2">
          <label>PHONE</label>
          <Field
            v-model="contactForm.phone"
            name="phone"
            placeholder="Your Phone Number"
            class="bg-transparent focus:outline-none"
            type="phone"
          />
        </div>
        <div class="w-[100%] xs:w-[50%] flex flex-col space-y-2">
          <label>SUBJECT</label>
          <Field
            v-model="contactForm.subject"
            name="subject"
            placeholder="Your Subject"
            class="bg-transparent focus:outline-none"
            type="text"
            rules="required"
          />
          <p class="text-[12px] text-rose-400">{{ errors.subject }}</p>
        </div>
      </div>
      <div class="w-[50%] flex flex-col space-y-2">
        <label>BUDGET</label>
        <Field
          v-model="contactForm.budget"
          name="budget"
          placeholder="Your Budget"
          class="bg-transparent focus:outline-none"
          type="text"
        />
      </div>
      <div class="w-[100%] flex flex-col space-y-2">
        <label>MESSAGE</label>
        <Field
          v-slot="{ field }"
          v-model="contactForm.message"
          name="message"
          rules="required"
        >
          <textarea
            v-bind="field"
            rows="6"
            placeholder="Your Message"
            :class="`bg-transparent focus:outline-none border-b scrollbar-thin scrollbar-thumb-${appStore.primaryColor} scrollbar-track-transparent`"
          />
          <p class="text-[12px] text-rose-400">{{ errors.message }}</p>
        </Field>
      </div>
      <!-- <div
        class="flex flex-col sm:flex-row space-x-2 sm:items-center space-y-3 sm:space-y-0"
        @click="handleImageClick"
      >
        <div class="flex space-x-2">
          <File />
          <label>ADD AN ATTACHMENT</label>
          <input
            ref="imageInput"
            hidden
            name="files"
            accept="*/*"
            placeholder="Your Budget"
            class="bg-transparent focus:outline-none"
            type="file"
            @change="handleImageChange"
          />
        </div>
        <span v-if="fileName" class="text-xs text-ash-100"
          >({{ fileName }})</span
        >
      </div> -->

      <div class="group sm:w-[50%]">
        <Button :disabled="!meta.dirty" text="SEND MESSAGE" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Contact from "@/shared/icons/contact.vue";
import Headers from "@/components/main/headers.vue";
import { useAppStore } from "@/store";
import { Field, useForm, Form } from "vee-validate";
import Button from "@/shared/Button.vue";
import { ContactForm } from "@/store/types";
import File from "@/shared/icons/file.vue";
import { onMounted, onUnmounted, reactive, ref } from "vue";
import emailjs from "emailjs-com";

const appStore = useAppStore();
const imageInput = ref();
const form = ref();
const fileName = ref("");

const contactForm: ContactForm = reactive({
  from_name: "",
  from_email: "",
  phone: "",
  subject: "",
  budget: "",
  message: "",
  files: null,
});
const { meta, errors, resetForm } = useForm<ContactForm>({
  initialValues: contactForm,
});

const sendMessage = async () => {
  await appStore.sendMessage(form.value);
  if (appStore.messageSuccess) {
    resetForm();
  }
};

// const handleImageClick = () => {
//   imageInput.value.click();
// };
// const handleImageChange = (event: Event): void => {
//   const target = event.target as HTMLInputElement;
//   const file: File | null = (target.files && target.files[0]) || null;
//   if (file) {
//     contactForm.files = file;
//     fileName.value = file.name;
//     // const reader = new FileReader();
//     // reader.readAsDataURL(file);
//     // reader.onload = (event: ProgressEvent<FileReader>) => {
//     //   console.log(event.target?.result);
//     // };
//   }
// };
</script>

<style scoped></style>

<!-- For multiple files  -->

<!-- const handleImageChange = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const files: FileList | null = target.files;
  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      contactForm.files.push(file);
      fileName.value += file.name + " ";
    }
  }
}; -->
