import { Plugin } from "vue";

// config
const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUD_NAME,
};

const cloudinaryPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$cloudinary = cloudinaryConfig;
  },
};

export default cloudinaryPlugin;
