# User guide

Install the module, then add it to `apps/web/nuxt.config.ts` under `modules`:

```ts
modules: [
  '@demo-agency/snowfall',
  // ...other modules
],
```

Falling snow appears on every page automatically. Configure it under the `snowfall` key in `nuxt.config.ts`:

```ts
snowfall: {
  enabled: true,
  flakeCount: 60,
  color: '#ffffff',
},
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | `true` | Turns the snow effect on or off. |
| `flakeCount` | `number` | `60` | Number of snowflakes rendered at once. |
| `color` | `string` | `#ffffff` | CSS color used for the snowflakes. |
