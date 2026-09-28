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

Mit `particleType: 'snow'` wird stattdessen auf Schneefall umgeschaltet. `color` gilt nur für Schnee – Blätter verwenden immer die eingebaute Herbstpalette:

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
| `particleType` | `'leaves' \| 'snow'` | `'leaves'` | Welcher Partikeleffekt angezeigt wird. |
| `flakeCount` | `number` | `60` | Anzahl der gleichzeitig angezeigten Partikel. |
| `color` | `string` | `#ffffff` | CSS-Farbe der Schneeflocken. Wird ignoriert, wenn `particleType` auf `'leaves'` steht. |
