import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    __DEV__: "false",
    ngDevMode: "false",
  },
  build: {
    ssr: "src/index.ts",
    target: "node22",
    sourcemap: true,
    minify: false,
  },
  ssr: { noExternal: process.env.VITEST ? [] : true },
  test: { environment: "node" },
});
