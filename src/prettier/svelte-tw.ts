import type { Config } from "prettier";

import { plugins } from "./shared";
import svelteConfig from "./svelte";

export default {
  ...svelteConfig,
  plugins: [...plugins.common, ...plugins.svelte, ...plugins.tw],
  tailwindStylesheet: "./src/app.css",
} satisfies Config;
