// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Основные настройки
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // App конфигурация
  app: {
    head: {
      title: 'Поиск квартир',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Приложение для поиска квартир с фильтрацией' }
      ]
    }
  },
  
  // Модули
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts'
  ],

  // CSS
  css: ['~/assets/styles/main.scss'],

  // Конфигурация шрифтов
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

  // Настройки сборщика
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  }
})