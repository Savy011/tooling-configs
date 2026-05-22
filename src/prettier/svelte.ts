import type { Config } from "prettier";

import { frameworkOverrides, plugins } from "./shared";
import tsConfig from "./ts";

export default {
  ...tsConfig,
  plugins: [...plugins.common, ...plugins.svelte],
  overrides: [frameworkOverrides.svelte],
} satisfies Config;
