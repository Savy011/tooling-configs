import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "prettier/index": "./src/prettier/index.ts",
    "prettier/ts": "./src/prettier/ts.ts",
    "prettier/svelte": "./src/prettier/svelte.ts",
    "prettier/svelte-tw": "./src/prettier/svelte-tw.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  outputOptions: {
    entryFileNames: "[name].js",
    chunkFileNames: "prettier/[name].js",
  },
});
