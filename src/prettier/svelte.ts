import type { Config } from "prettier";

import { plugins, frameworkOverrides, importOrder } from "./shared";
import base from ".";

export default {
  ...base,
  plugins: [...plugins.common, ...plugins.svelte],
  importOrder,
  overrides: [frameworkOverrides.svelte],
} satisfies Config;
