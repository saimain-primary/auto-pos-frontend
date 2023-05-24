import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

if (localStorage.getItem("token")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
}

const app = createApp(App);

app.component("v-select", vSelect);
app.use(createPinia());
app.use(router);

app.mount("#app");
