export default defineNuxtConfig({
  modules: ['nuxt-swiper', "@nuxt/image", '~/modules/sitemap'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/': { prerender: true, cors: true },
    '/*': { cors: true },
    '/**': { cors: true },
  },
})