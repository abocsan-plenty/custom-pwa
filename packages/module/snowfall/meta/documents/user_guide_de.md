# Benutzerhandbuch

Installieren Sie das Modul und fügen Sie es in `apps/web/nuxt.config.ts` unter `modules` hinzu:

```ts
modules: [
  '@demo-agency/snowfall',
  // ...weitere Module
],
```

Fallende Blätter erscheinen danach automatisch auf jeder Seite, in natürlichen Herbsttönen (Orange, Rot, Braun, Gold – keine einzelne Farbe). Konfiguration erfolgt über den Schlüssel `snowfall` in `nuxt.config.ts`:

```ts
snowfall: {
  enabled: true,
  particleType: 'leaves',
  flakeCount: 60,
},
```

Mit `particleType` wird der Effekt umgeschaltet:

- `'snow'` – Schneefall. `color` gilt nur hier – alle anderen Typen verwenden ihre eigene eingebaute Palette.
- `'blossom'` – fallende Kirschblütenblätter (Rosatöne), für den Frühling.
- `'sunflower'` – fallende Sonnenblumenblätter (Gelb-/Orangetöne), für den Sommer.

```ts
snowfall: {
  enabled: true,
  particleType: 'snow',
  flakeCount: 60,
  color: '#ffffff',
},
```

| Option | Typ | Standard | Beschreibung |
| --- | --- | --- | --- |
| `enabled` | `boolean` | `true` | Schaltet den Effekt ein oder aus. |
| `particleType` | `'leaves' \| 'snow' \| 'blossom' \| 'sunflower'` | `'leaves'` | Welcher Partikeleffekt angezeigt wird. |
| `flakeCount` | `number` | `60` | Anzahl der gleichzeitig angezeigten Partikel. |
| `color` | `string` | `#ffffff` | CSS-Farbe der Schneeflocken. Wird ignoriert, außer `particleType` steht auf `'snow'`. |
