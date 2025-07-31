import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },

  {
    path: "/AboutUs",
    name: "About-Us",
    component: AboutUsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;