# @savy011/config

my personal tooling configs — prettier, *(eslint, oxlint, oxc coming soon-ish)* — consolidated into one package.

## Configs

| entry | description |
| :--- | :--- |
| `@savy011/config/prettier` | base config, no plugins |
| `@savy011/config/prettier/svelte` | svelte + import sorting |
| `@savy011/config/prettier/svelte-tw` | svelte + tailwind + import sorting |

## Usage

install:

```sh
pnpm add -D @savy011/config
```

### Prettier

```js
// prettier.config.js
import config from "@savy011/config/prettier";
export default config;
```

```js
import config from "@savy011/config/prettier/svelte";
export default config;
```

```js
import config from "@savy011/config/prettier/svelte-tw";
export default config;
```

## Scripts

| command | action |
| :--- | :--- |
| `pnpm build` | builds with tsdown |

> personal use — configs reflect my own opinions.
