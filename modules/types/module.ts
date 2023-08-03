import { defineNuxtModule } from '@nuxt/kit';
import { fileURLToPath } from 'url';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'types',
    configKey: 'types',
  },
  defaults: {},
  setup() {},
  hooks: {
    'imports:dirs': (dirs) => {
      dirs.push(fileURLToPath(new URL('./runtime', import.meta.url)));
    },
  },
});
