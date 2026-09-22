# @demo-agency/snowfall

A PlentyONE Shop PWA module that adds an animated falling snow overlay to every page. Built as a demo/test fixture for the `packages/module` publish workflow (`.github/workflows/publish-module.yml`).

## Usage

Add to `apps/web/nuxt.config.ts`:

```ts
modules: [
  '@demo-agency/snowfall',
],
snowfall: {
  enabled: true,
  flakeCount: 60,
  color: '#ffffff',
},
```

See `meta/documents/user_guide_en.md` for full options.
