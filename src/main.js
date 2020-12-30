import { createApp } from "vue";
import Router from "./routes";
import App from "./App.vue";

import "./index.css";

import CloudinaryPlugin from "./plugin/cloudinary";

const app = createApp(App);

app.use(Router);
app.use(CloudinaryPlugin);

app.mount("#app");
