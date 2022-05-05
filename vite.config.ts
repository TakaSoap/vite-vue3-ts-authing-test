import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: ["node_modules/lodash-es/", "node_modules/@types/lodash-es/"],
    },
  },
});
