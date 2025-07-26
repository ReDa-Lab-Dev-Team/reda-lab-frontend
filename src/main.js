import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
