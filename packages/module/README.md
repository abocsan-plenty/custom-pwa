# Modules

Extensions published to [PlentyMarketplace](https://marketplace.plentymarkets.com/) live here, one subfolder per extension:

```
packages/module/<name>/
  package.json          # name, version, publishConfig.access:public, files:["dist","marketplace.json","meta"]
  marketplace.json      # price, shortDescription, categories
  meta/images/icon_{author,plugin}_{xs,sm,md}.png   (6 files)
  meta/documents/{support_contact,changelog,user_guide}_{en,de}.md   (6 files)
  src/...                # module source, see https://github.com/plentymarkets/pwa-module-boilerplate
```

Publish a module via the `Publish Module` GitHub Actions workflow (`.github/workflows/publish-module.yml`), see `docs/guide/modules/index.md` for setup and usage.
