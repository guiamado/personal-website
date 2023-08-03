// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
    includeWorkspace: true,
  },
  css: [
    '~/styles/css/main.css',
    // 'tailwindcss'
  ],
  modules: [
    '@vueuse/nuxt',
    '@/modules/types/module',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    'types': './types'
  },
})
