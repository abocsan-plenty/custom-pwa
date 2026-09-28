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

Set `particleType` to switch the effect:

- `'snow'` — falling snow. `color` only applies here — every other type uses its own built-in palette.
- `'blossom'` — falling cherry blossom petals (pink tones), for spring.
- `'sunflower'` — falling sunflower petals (yellow/orange tones), for summer.

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
| `particleType` | `'leaves' \| 'snow' \| 'blossom' \| 'sunflower'` | `'leaves'` | Which particle effect to render. |
| `flakeCount` | `number` | `60` | Number of particles rendered at once. |
| `color` | `string` | `#ffffff` | CSS color used for snowflakes. Ignored unless `particleType` is `'snow'`. |
