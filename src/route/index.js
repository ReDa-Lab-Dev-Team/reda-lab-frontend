import { createRouter, createWebHistory } from "vue-router";

import AboutUsPage from "@/views/AboutUsPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import HomePageView from "@/views/HomePageView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePageView
  },

  {
    path: "/AboutUs",
    name: "About-Us",
    component: AboutUsPage
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactPage
  },

  {
    path: "/Projects",
    name: "Projects",
    component: ProjectsPage
  },
  {
    path: "/Projects/id",
    name: "Project",
    component: ProjectPage
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
