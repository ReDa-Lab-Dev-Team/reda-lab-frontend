import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProjectListView from "@/views/ProjectListView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/AboutUs",
    name: "About-Us",
    component: AboutView,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/Projects",
    name: "Projects",
    component: ProjectListView,
  },
  {
    path: "/Projects/:id",
    name: "Project",
    component: ProjectDetailView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
