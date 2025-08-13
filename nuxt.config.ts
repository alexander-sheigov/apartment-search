// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // App configuration
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
  
  modules: ['@pinia/nuxt'],
})