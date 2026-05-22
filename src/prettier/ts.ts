import type { Config } from "prettier";

import base from ".";
import { importOrder, plugins } from "./shared";

export default {
  ...base,
  plugins: [...plugins.common],
  importOrder,
} satisfies Config;
