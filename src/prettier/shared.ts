export const plugins = {
  common: ["@ianvs/prettier-plugin-sort-imports"],
  svelte: ["prettier-plugin-svelte"],
  tw: ["prettier-plugin-tailwindcss"],
} as const;

export const frameworkOverrides = {
  svelte: {
    files: "*.svelte",
    options: {
      parser: "svelte",
    },
  },
} as const;

export const importOrder = [
  "<TYPES>",
  "",
  "<BUILTIN_MODULES>",
  "",
  "<THIRD_PARTY_MODULES>",
  "",
  "^\\$app",
  "",
  "^\\$assets/",
  "",
  "^\\$components/",
  "",
  ["^\\$env", "varlock/env"],
  "",
  "^\\$lib/",
  "",
  "^\\$ui/",
  "",
  "^(?!.*[.]css$)[./].*$",
  "",
  ".css$",
];
