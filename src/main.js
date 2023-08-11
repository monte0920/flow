import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.config.devtools = false;
app.config.debug = false;
app.config.silent = true;
app.mount("#app");
