import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
  enabled: boolean;
  flakeCount: number;
  color: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'snowfall',
    configKey: 'snowfall',
  },
  defaults: {
    enabled: true,
    flakeCount: 60,
    color: '#ffffff',
  },
  setup(options, nuxt) {
    if (!options.enabled) {
      return;
    }

    nuxt.options.runtimeConfig.public.snowfall = options;

    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve('./runtime/snow.client'));
  },
});
