// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Harshith Rao",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ]
    },
  },
  modules: [
    'nuxt-mdi', '@nuxtjs/critters', 'nuxt-purgecss'
  ],
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/styles.css', "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ['vuetify'],
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
