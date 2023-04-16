import { AppState, Modal, PrimaryColor, Theme } from "@/store/types";
import emailjs from "emailjs-com";
import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: (): AppState => ({
    theme: Theme.darkMode,
    primaryColor: PrimaryColor.primaryColor3,
    modal: false,
    settings: false,
    slideMenu: false,
    projectPopup: false,
    messageSuccess: false,
    messageFailure: false,
  }),
  actions: {
    toggleModal(value: Modal) {
      this.modal = value.modal;
      this.settings = value.settings;
      this.slideMenu = value.slideMenu;
    },
    toggleProject() {
      this.projectPopup = !this.projectPopup;
    },
    getPrimaryColor(state: AppState): PrimaryColor {
      return state.primaryColor;
    },
    setTheme(mode: Theme) {
      localStorage.setItem("kenTheme", mode);
      this.theme = mode;
      console.log("them", this.theme);
    },
    setPrimary(mode: PrimaryColor) {
      localStorage.setItem("kenPrimary", mode);
      this.primaryColor = mode;
    },
    defaultTheme() {
      const theme = localStorage.getItem("kenTheme");
      if (!theme) {
        localStorage.setItem("kenTheme", this.theme);
      } else {
        this.theme = theme as Theme;
      }
      console.log("them", this.theme);
    },
    defaultPrimary() {
      const primary = localStorage.getItem("kenPrimary");
      if (!primary) {
        localStorage.setItem("kenPrimary", this.primaryColor);
      } else {
        this.primaryColor = primary as PrimaryColor;
      }
    },
    async sendMessage(value: string) {
      await emailjs
        .sendForm(
          "service_eytnnr9",
          "template_stotku7",
          value,
          "XUXDd5r_tthXV6tVe"
        )
        .then(
          () => {
            this.messageSuccess = !this.messageSuccess;
            setTimeout(() => {
              this.messageSuccess = !this.messageSuccess;
            }, 3000);
          },
          () => {
            this.messageFailure = !this.messageFailure;
            setTimeout(() => {
              this.messageFailure = !this.messageFailure;
            }, 3000);
          }
        );
    },
  },
});
