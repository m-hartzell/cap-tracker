declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

// Add env to import.meta
interface ImportMeta {
  env: any;
}
