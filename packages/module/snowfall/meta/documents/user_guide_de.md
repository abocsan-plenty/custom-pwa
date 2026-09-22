# Benutzerhandbuch

Installieren Sie das Modul und fügen Sie es in `apps/web/nuxt.config.ts` unter `modules` hinzu:

```ts
modules: [
  '@demo-agency/snowfall',
  // ...weitere Module
],
```

Schneefall erscheint danach automatisch auf jeder Seite. Konfiguration erfolgt über den Schlüssel `snowfall` in `nuxt.config.ts`:

```ts
snowfall: {
  enabled: true,
  flakeCount: 60,
  color: '#ffffff',
},
```

| Option | Typ | Standard | Beschreibung |
| --- | --- | --- | --- |
| `enabled` | `boolean` | `true` | Schaltet den Schneeeffekt ein oder aus. |
| `flakeCount` | `number` | `60` | Anzahl der gleichzeitig angezeigten Schneeflocken. |
| `color` | `string` | `#ffffff` | CSS-Farbe der Schneeflocken. |
