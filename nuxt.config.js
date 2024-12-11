import am from './locales/am.json'
import en from './locales/en.json'

const metaTitle = 'DeepWhite investment fund.'
const metaDescription =
  'Remarkable ecosystem that offers and drives inventive and sustainable solutions for both local and global markets.'
const metaUrl = process.env.NUXT_BASE_URL || 'https://advanza.am'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DeepWhite',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: metaDescription },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'description', content: metaDescription },
      { property: 'og:url', content: metaUrl + '/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: metaTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:image', content: `${metaUrl}/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: metaUrl + '/' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:description', content: metaDescription },
      { name: 'twitter:image', content: `${metaUrl}/og-image.jpg` },
      {
        name: 'google-signin-client_id',
        content:
          process.env.GOOGLE_CLIENT_ID ||
          '566952869579-aopum2ecnhmd9l42d8pj9na8ue8s643a.apps.googleusercontent.com',
      },
    ],
    link: [
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#725252',
      },
    ],
    script: [
      {
        src: `https://maps.googleapis.com/maps/api/js?key=${
          process.env.GOOGLE_MAPS_KEY ||
          'AIzaSyA3JhCxkxVmSxMVVnwYgW-xUk-FQvzAKHE'
        }&v=weekly`,
        defer: true,
      },
      {
        src: 'https://apis.google.com/js/api:client.js',
      },
    ],
  },

  pageTransition: 'page',
  layoutTransition: 'page',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/global-mixin.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/recaptcha',
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
      },
    ],
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'https://api-advanza.advanza.am',
  },

  i18n: {
    locales: ['en', 'am'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, am },
    },
  },

  recaptcha: {
    hideBadge: true,
    siteKey:
      process.env.GOOGLE_RECAPTCHA_KEY ||
      '6LcTXVQlAAAAAAtqqL0KIpxi1sGh7t_CAuj0rSzn',
    version: 3,
  },

  publicRuntimeConfig: {
    GOOGLE_CLIENT_ID:
      process.env.GOOGLE_CLIENT_ID ||
      '566952869579-aopum2ecnhmd9l42d8pj9na8ue8s643a.apps.googleusercontent.com',
  },

  styleResources: {
    scss: ['~/assets/scss/_variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
