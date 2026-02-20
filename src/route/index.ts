import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import AboutUsPageView from "@/views/AboutUsPageView.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import HomePageView from "@/views/HomePageView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomePageView,
  },

  {
    path: "/AboutUs",
    name: "About-Us",
    component: AboutUsPageView,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactPage,
  },

  {
    path: "/Projects",
    name: "Projects",
    component: ProjectsPage,
  },
  {
    path: "/Projects/id",
    name: "Project",
    component: ProjectPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
