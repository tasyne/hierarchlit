import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  // React, TanStack Virtual, and the Streamlit bridge use Node's conventional
  // environment check. Vite doesn't provide `process` in browser modules, so
  // replace this expression at build time and let Rollup remove development code.
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  plugins: [react()],
  build: {
    outDir: "build",
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL("src/index.tsx", import.meta.url)),
      formats: ["es"],
      fileName: "index-[hash]",
      cssFileName: "styles",
    },
  },
  test: {
    environment: "node",
  },
});
