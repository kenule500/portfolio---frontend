import { defineStore } from "pinia";
import { useAppStore } from ".";
import { EducationAndExperience, ProfileState, Project, Service, Skill } from "@/store/types";

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
        description: "I created digital products with unique ideas use Figma & Framer",
        icon: "Design",
      },
      {
        id: 2,
        title: "Frontend Development",
        description: "I develop frontend apps with HTML, CSS, Tailwind, Bubble.io, Vue.js, Nuxt.js & Framer",
        icon: "Code",
      },
      {
        id: 3,
        title: "Backend Development",
        description: "I develop frontend apps with Nestjs & Postgres, Typeorm, MongoDb & Prisma",
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
        name: "Shortletxplore",
        tools: ["Nestjs", "Vuejs", "Jest", "Typescript", "Javascript"],
        img: "Shortletxplore",
        link: "https://shortletxplore.com",
        description: `
          • Developed the admin client-side using Vue.js for Shortletxplore, a travel accommodation platform.
          • Created a user-friendly interface for the admin dashboard to enable easy management of transactions, users' income, and losses.
          • Utilized Jest for unit testing to ensure code quality and functionality.
          • Collaborated with the team to ensure the successful delivery of the project.
          • Improved the efficiency of the booking process by providing an intuitive and easy-to-use admin client side.
          • Contributed to the increased convenience of travelers and families by developing a platform that enables them to find and book accommodations based on location, size, amenities, and price.
          • Provided the company admin with valuable insights and data through easy management of transactions, income, and losses.
          • Leveraged Vue.js to create a responsive and dynamic user interface for the admin dashboard.
          • Implemented best practices for software development, such as clean code and code reviews.
          
          Achieved successful project delivery within the stipulated timeline.
        `,
        outcome:
          "Increased convenience: The app made it easier and more convenient for travelers and families to find and book accommodations. Enhanced guest satisfaction: The app's reviews and ratings feature can help guests make informed decisions when choosing an accommodation to book, which can lead to higher guest satisfaction rates and positive reviews.",
      },
      {
        id: 3,
        name: "NwiStore",
        tools: ["Bubble.io", "Nodejs"],
        img: "NwiStore",
        link: "https://nwistore.bubbleapps.io/version-test",
        description: `
          • Developed the admin client-side using Vue.js for Shortletxplore, a travel accommodation platform.
          • Created a user-friendly interface for the admin dashboard to enable easy management of transactions, users' income, and losses.
          • Utilized Jest for unit testing to ensure code quality and functionality.
          • Collaborated with the team to ensure the successful delivery of the project.
          • Improved the efficiency of the booking process by providing an intuitive and easy-to-use admin client side.
          • Contributed to the increased convenience of travelers and families by developing a platform that enables them to find and book accommodations based on location, size, amenities, and price.
          • Provided the company admin with valuable insights and data through easy management of transactions, income, and losses.
          • Leveraged Vue.js to create a responsive and dynamic user interface for the admin dashboard.
          • Implemented best practices for software development, such as clean code and code reviews.

          Achieved successful project delivery within the stipulated timeline.
        `,
        outcome:
          "Increased revenue: The app's secure payment features can enable sellers to receive payments more quickly and efficiently, potentially increasing their revenue.Enhanced buyer satisfaction: The app's reviews and ratings feature can help buyers make informed decisions when choosing a product to buy, which can lead to higher buyer satisfaction rates and positive reviews.Improved user experience: The app's user-friendly interface and powerful features will provide a seamless user experience, making it easier for users to find the products they are looking for.",
      },
      {
        id: 4,
        name: "Success Engines Services Limited",
        tools: ["Wordpress", "Nestjs", "Vuejs", "Jest"],
        img: "successenginesltd",
        link: "https://successenginesltd.com",
        description: `
          • Developed and implemented an admin client-side using Vue.js for Success Engines Services Limited's platform.
          • Integrated authentication and database operations with the WordPress CMS.
          • Implemented unit testing with Jest to ensure code quality and functionality.
          • Collaborated with the team to ensure successful delivery of the project.
          • Utilized Vue.js to create a responsive and dynamic user interface for the admin dashboard.
          • Leveraged WordPress to power the user-facing client side and ensure efficient content management.
          
          Achieved successful project delivery within the stipulated timeline. Contributed to the increased visibility of the mechanic company by developing a user-friendly platform.
        `,
        outcome:
          "Increased visibility: It increase the visibility of the mechanic company. Potential clients and customers can easily find information about the company's services and capabilities, which can lead to more business opportunities. Increased revenue: It increased revenue for the mechanic company. By attracting more clients and customers and building better relationships with them, the company can generate more business and increase its profits.",
      },
      {
        id: 5,
        name: "easyhowz",
        tools: ["Typescript", "Nestjs", "Vuejs", "Jest"],
        img: "easyhowz",
        link: "https://easyhowz.com/",
        description: `
          • Developed a full-stack property rental platform, Easy Howz, using Node.js, Typescript, Vue.js, and Nest.js.
          • Implemented user authentication to ensure secure access to user accounts.
          • Structured the database to enable efficient and scalable storage and retrieval of property data.
          • Integrated PayStack to enable users to make secure and convenient payments for rental properties.
          • Implemented a chatbot system powered by Tidio to provide users with real-time support and assistance.
          • Conducted unit testing with Jest to ensure the reliability and quality of the code.
          • Designed and developed a user-friendly interface for the platform to provide a seamless and enjoyable user experience.
          
          Successfully delivered the project within the specified timeline and requirements. Provided landlords and property managers with a platform to list their properties, increasing their visibility and exposure to potential renters.
        `,
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
