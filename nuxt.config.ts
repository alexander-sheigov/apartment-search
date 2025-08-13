export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Квартиры',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Поиск квартир по количеству комнат, цене и площади' }
      ]
    }
  },
  
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts'
  ],

  css: ['~/assets/styles/main.scss'],

  fonts: {
    families: [
      {
        name: 'PT Root UI',
        src: [
          { url: '/fonts/pt-root-ui/pt-root-ui_light.woff2', format: 'woff2' },
          { url: '/fonts/pt-root-ui/pt-root-ui_light.woff', format: 'woff' }
        ],
        weight: 300,
        style: 'normal'
      },
      {
        name: 'PT Root UI',
        src: [
          { url: '/fonts/pt-root-ui/pt-root-ui_regular.woff2', format: 'woff2' },
          { url: '/fonts/pt-root-ui/pt-root-ui_regular.woff', format: 'woff' }
        ],
        weight: 400,
        style: 'normal'
      },
      {
        name: 'PT Root UI',
        src: [
          { url: '/fonts/pt-root-ui/pt-root-ui_medium.woff2', format: 'woff2' },
          { url: '/fonts/pt-root-ui/pt-root-ui_medium.woff', format: 'woff' }
        ],
        weight: 500,
        style: 'normal'
      },
      {
        name: 'PT Root UI',
        src: [
          { url: '/fonts/pt-root-ui/pt-root-ui_bold.woff2', format: 'woff2' },
          { url: '/fonts/pt-root-ui/pt-root-ui_bold.woff', format: 'woff' }
        ],
        weight: 700,
        style: 'normal'
      }
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *; @use "~/assets/styles/_mixins.scss" as *;'
        }
      }
    }
  }
})