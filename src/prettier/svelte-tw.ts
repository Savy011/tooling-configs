import type { Config } from "prettier";

import svelteConfig from "./svelte";
import { plugins } from "./shared";

export default {
  ...svelteConfig,
  plugins: [...plugins.common, ...plugins.svelte, ...plugins.tw],
  tailwindStylesheet: "./src/app.css",
} satisfies Config;
