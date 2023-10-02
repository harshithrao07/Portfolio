// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Portfolio | Harshith Rao",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ]
    },
  },
  modules: [
    'nuxt-mdi'
  ],
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/styles.css', "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
