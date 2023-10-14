// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Harshith Rao",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  modules: [
    'nuxt-mdi', 'nuxt-vercel-analytics', 'nuxt-delay-hydration', '@nuxtjs/fontaine', '@nuxtjs/critters'
  ],
  fontMetrics: {
    fonts: ['Inter', { family: 'Poppins', src: '/fonts/Poppins-Bold.ttf' }],
  },
  critters: {
    config: {
      preload: 'swap',
    },
  },
  delayHydration: {
    mode: 'mount',
    debug: process.env.NODE_ENV === 'development'
  } ,
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
