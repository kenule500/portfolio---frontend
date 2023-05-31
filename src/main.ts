import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router";
import "@/assets/tailwind.css";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import useDefineRule from "./composables/useDefineRule";
import { createHead } from "@vueuse/head";

const head = createHead();
useDefineRule();

library.add(faSearch);

createApp(App)
  .use(createPinia())
  .use(router)
  .use(head)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
