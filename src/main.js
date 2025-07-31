import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import AboutUsPage from "./views/AboutUsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },

  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
