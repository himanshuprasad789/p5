// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        first: resolve(__dirname, "first/index.html"),
        second: resolve(__dirname, "second/index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
