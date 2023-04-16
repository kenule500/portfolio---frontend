import { defineStore } from "pinia";
import { useAppStore } from ".";
import {
  EducationAndExperience,
  ProfileState,
  Project,
  Service,
  Skill,
} from "@/store/types";

export const useProfileStore = defineStore("profileStore", {
  state: (): ProfileState => ({
    educationAndExprience: [
      {
        id: 1,
        title: "Full Stack Developer",
        stack: "Bubble.io/Vue/Nestjs/Nodejs",
        organization: "WeLoveNocode",
        location: "USA",
        startDate: new Date("2021-09-01"),
        endDate: new Date("2023-05-01"),
      },
      {
        id: 2,
        title: "Full Stack Developer",
        stack: "Vue/Nestjs/Nodejs",
        organization: "Busy Expand",
        location: "Nigeria",
        startDate: new Date("2019-09-01"),
        endDate: new Date("2021-05-01"),
      },
      {
        id: 2,
        title: "Software Engineering",
        stack: "HND",
        organization: "National Institute of Infromation Technology",
        location: "Nigeria",
        startDate: new Date("2018-09-01"),
        endDate: new Date("2021-05-01"),
      },
    ],
    services: [
      {
        id: 1,
        title: "Web Design",
        description:
          "I created digital products with unique ideas use Figma & Framer",
        icon: "Design",
      },
      {
        id: 2,
        title: "Frontend Development",
        description:
          "I develop frontend apps with HTML, CSS, Tailwind, Bubble.io, Vue.js, Nuxt.js & Framer",
        icon: "Code",
      },
      {
        id: 3,
        title: "Backend Development",
        description:
          "I develop frontend apps with Nestjs & Postgres, Typeorm, MongoDb & Prisma",
        icon: "Code",
      },
    ],
    skills: [
      { id: 1, name: "Figma", imgURL: "figma" },
      { id: 2, name: "HTML", imgURL: "HTML5" },
      { id: 3, name: "CSS", imgURL: "css" },
      { id: 4, name: "Javascript", imgURL: "javascript" },
      { id: 5, name: "Typescript", imgURL: "typescript" },
      { id: 6, name: "Bubble", imgURL: "bubble" },
      { id: 4, name: "Make", imgURL: "make" },
      { id: 4, name: "Nestjs", imgURL: "nestjs" },
      { id: 4, name: "Prisma", imgURL: "prisma" },
      { id: 4, name: "Typeorm", imgURL: "typescript" },
      { id: 4, name: "Zapier", imgURL: "zapier" },
      { id: 4, name: "Vue", imgURL: "vue" },
      { id: 4, name: "Nuxtjs", imgURL: "nuxt" },
      { id: 4, name: "Nodejs", imgURL: "node" },
    ],
    projects: [
      {
        id: 1,
        name: "Bez Store",
        tools: ["wordpress", "nestjs", "vuejs"],
        img: "bex",
        link: "https://bexstores.com/",
        description:
          "The app have several features that will make it easy for users to browse, search for, and purchase new and used laptops, phones, and accessories. Here are some of the features that the app have: 1. Product listings: The app will display a list of laptops, phones, and accessories that match the user's search criteria. 2. Shopping cart and checkout: The app will allow users to add products to a shopping cart and make secure payments 3. User accounts: The app will allow users to create accounts, which will enable them to save their search criteria, view their purchase history, and receive notifications when new products are listed that match their search criteria.This was built using Bubble.io and nodejs. The user interface and authentication was built by me using bubble and nodejs was used in connecting the items from airtable to bubble",
        outcome:
          "Increased revenue: The app's secure payment features can enable sellers to receive payments more quickly and efficiently, potentially increasing their revenue.Enhanced buyer satisfaction: The app's reviews and ratings feature can help buyers make informed decisions when choosing a product to buy, which can lead to higher buyer satisfaction rates and positive reviews.Improved user experience: The app's user-friendly interface and powerful features will provide a seamless user experience, making it easier for users to find the products they are looking for.",
      },
      {
        id: 2,
        name: "NwiStore",
        tools: ["Bubble.io", "Nodejs"],
        img: "NwiStore",
        link: "https://nwistore.bubbleapps.io/version-test",
        description:
          "The app have several features that will make it easy for users to browse, search for, and purchase new and used laptops, phones, and accessories. Here are some of the features that the app have: 1. Product listings: The app will display a list of laptops, phones, and accessories that match the user's search criteria. 2. Shopping cart and checkout: The app will allow users to add products to a shopping cart and make secure payments 3. User accounts: The app will allow users to create accounts, which will enable them to save their search criteria, view their purchase history, and receive notifications when new products are listed that match their search criteria.This was built using Bubble.io and nodejs. The user interface and authentication was built by me using bubble and nodejs was used in connecting the items from airtable to bubble",
        outcome:
          "Increased revenue: The app's secure payment features can enable sellers to receive payments more quickly and efficiently, potentially increasing their revenue.Enhanced buyer satisfaction: The app's reviews and ratings feature can help buyers make informed decisions when choosing a product to buy, which can lead to higher buyer satisfaction rates and positive reviews.Improved user experience: The app's user-friendly interface and powerful features will provide a seamless user experience, making it easier for users to find the products they are looking for.",
      },
      {
        id: 3,
        name: "Shortletxplore",
        tools: ["Nestjs", "Vuejs", "Jest", "Typescript", "Javascript"],
        img: "Shortletxplore",
        link: "https://shortletxplore.com",
        description:
          "1. Search functionality: The app will allow users to search for accommodations based on location, size, amenities, and price.  2. Accommodation listings: The app will display a list of accommodations that match the user's search criteria.   3. Reviews and ratings: The app will allow users to read reviews and ratings from other travelers who have stayed in the accommodations they are interested in. Stack used for this project was Wordpress, flutterwave and Vue.the only contribution I made here is to develop the admin client side for the company admin to easy manage every transaction , users income and losses etc. I was fully involved in the admin client side and I used jest for the unit testing.",
        outcome:
          "Increased convenience: The app made it easier and more convenient for travelers and families to find and book accommodations. Enhanced guest satisfaction: The app's reviews and ratings feature can help guests make informed decisions when choosing an accommodation to book, which can lead to higher guest satisfaction rates and positive reviews.",
      },
      {
        id: 4,
        name: "Success Engines Services Limited",
        tools: ["Wordpress", "Nestjs", "Vuejs", "Jest"],
        img: "successenginesltd",
        link: "https://successenginesltd.com",
        description:
          "This is a platform built for Success Engines Services Ltd is an indigenous company duly registered in Nigeria with the aim helping the company providing durable cost-effective services by focusing on unfolding technology development in all areas of operation/activities.  The tech stack used for this project are Vue for the admin client side, Wordpress for the user client side and the database was powered by Wordpress cms. So my contribution on this project was to develop the admin client side with Vue, the authentication reading and writing data on the cms i was fully involved, and also unit test with jest was implemented also.",
        outcome:
          "Increased visibility: It increase the visibility of the mechanic company. Potential clients and customers can easily find information about the company's services and capabilities, which can lead to more business opportunities. Increased revenue: It increased revenue for the mechanic company. By attracting more clients and customers and building better relationships with them, the company can generate more business and increase its profits.",
      },
      {
        id: 5,
        name: "easyhowz",
        tools: ["Typescript", "Nestjs", "Vuejs", "Jest"],
        img: "easyhowz",
        link: "https://easyhowz.com/",
        description:
          "The app will have several features that will make it easy for users to find the property they are looking for. Here are some of the features that the app can have:  1. Search functionality: The app will allow users to search for properties based on location, type, size, and price.   2. Property listings: The app will display a list of properties that match the user's search criteria.  User accounts: The app will allow users to create accounts, which will enable them to save their search criteria. Secure payment: The app will allow users to make secure payments for the properties they choose to rent using PayStack. I was the full stack developer here using Vue, Node(nestjs) Typescript.  user authentication, database structuring pay stack implementation through node also implementation of the chat boot system powered by Tidio, unit test was powered by jest.",
        outcome:
          "Increased convenience: The app will make it easier and more convenient for users to find and rent properties. Greater visibility: The app will provide landlords and property managers with a platform to list their properties, increasing their visibility and exposure to potential renters. Improved user experience: The app's user-friendly interface and powerful features will provide a seamless user experience, making it easier for users to find the properties they are looking for.",
      },
    ],
    project: undefined,
  }),
  getters: {
    getEducationAndExperience(state: ProfileState): EducationAndExperience[] {
      return state.educationAndExprience;
    },

    getServices(state: ProfileState): Service[] {
      return state.services;
    },

    getSkills(state: ProfileState): Skill[] {
      return state.skills;
    },

    getProjects(state: ProfileState): Project[] {
      return state.projects;
    },
  },
  actions: {
    setProject(id?: number) {
      const appStore = useAppStore();
      if (id) {
        const item = this.projects.find((proj) => proj.id === id);
        this.project = item;

        appStore.toggleProject();
      } else {
        this.project = undefined;
        appStore.toggleProject();
      }
    },
  },
});
