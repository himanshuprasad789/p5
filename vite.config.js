// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
// import { arr } from "./route";

// const input = {};
// for (let i = 0; i < arr.length; i++) {
//   input[arr[i].href] = resolve(__dirname, `${arr[i]?.href}/index.html`);
// }
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // ...input,
        first: resolve(__dirname, "first/index.html"),
        second: resolve(__dirname, "second/index.html"),
        third: resolve(__dirname, "third/index.html"),
        fourth: resolve(__dirname, "fourth/index.html"),
        // fifth: resolve(__dirname, "fifth/index.html"),
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
