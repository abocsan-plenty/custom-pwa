# User guide

Install the module, then add it to `apps/web/nuxt.config.ts` under `modules`:

```ts
modules: [
  '@demo-agency/snowfall',
  // ...other modules
],
```

Falling leaves appear on every page automatically, in a mix of natural autumn tones (orange, red, brown, gold — not a single flat color). Configure it under the `snowfall` key in `nuxt.config.ts`:

```ts
snowfall: {
  enabled: true,
  particleType: 'leaves',
  flakeCount: 60,
},
```

Set `particleType: 'snow'` to switch to falling snow instead. `color` only applies to snow — leaves always use their built-in autumn palette:

```ts
snowfall: {
  enabled: true,
  particleType: 'snow',
  flakeCount: 60,
  color: '#ffffff',
},
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | `true` | Turns the effect on or off. |
| `particleType` | `'leaves' \| 'snow'` | `'leaves'` | Which particle effect to render. |
| `flakeCount` | `number` | `60` | Number of particles rendered at once. |
| `color` | `string` | `#ffffff` | CSS color used for snowflakes. Ignored when `particleType` is `'leaves'`. |
