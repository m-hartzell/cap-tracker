import "./index.css";

import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";

import CloudinaryPlugin from "./plugin/cloudinary";

const app = createApp(App);

app.use(router);
app.use(CloudinaryPlugin);

app.mount("#app");
