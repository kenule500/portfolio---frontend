import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from "vue-router";
// import { useRoute, useRouter } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
    beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
      if (to.query.nav) {
        const element = to.query.nav;
        if (typeof element === "string") {
          const myElement = document.getElementById(element);
          console.log("elemetn", myElement);
          if (myElement) {
            myElement.style.scrollMarginTop = `50px`; // Apply the offset
            myElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
            myElement.style.scrollMarginTop = "0"; // Reset the scroll-margin-top value
          }
        }
        router.go(-1);
      } else {
        router.push({ name: "home", query: { nav: "intro" } });
      }
      next();
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import(/* webpackChunkName: "admin" */ "@/views/AdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   next();
// });

export default router;
