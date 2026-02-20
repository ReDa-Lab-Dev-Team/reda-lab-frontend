import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
});

app.use(router);
app.mount("#app");
