# @savy011/config

my personal tooling configs — prettier, _(eslint, oxlint, oxc coming soon-ish)_ — consolidated into one package.

## Configs

| entry                                | description                        |
| :----------------------------------- | :--------------------------------- |
| `@savy011/config/prettier`           | base config, no plugins            |
| `@savy011/config/prettier/ts`        | typescript + import sorting        |
| `@savy011/config/prettier/svelte`    | svelte + import sorting            |
| `@savy011/config/prettier/svelte-tw` | svelte + tailwind + import sorting |

## Usage

install:

```sh
pnpm add -D @savy011/config
```

### Prettier

pick your config and drop it in `prettier.config.js`:

```js
export { default } from "@savy011/config/prettier";          // base
export { default } from "@savy011/config/prettier/ts";       // typescript
export { default } from "@savy011/config/prettier/svelte";   // svelte
export { default } from "@savy011/config/prettier/svelte-tw"; // svelte + tailwind
```

## Scripts

| command      | action                |
| :----------- | :-------------------- |
| `pnpm build` | builds with tsdown    |
| `pnpm fmt`   | formats with prettier |

> personal use — configs reflect my own opinions.
