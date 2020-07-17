
import pkg from './package'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'og:title', content: pkg.description },
      { name: 'og:description', content: pkg.description },
      { name: 'og:site_name', content: pkg.description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://nuxtjs.org' },
      { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@nuxt_js' },
      { name: 'twitter:title', content: pkg.description },
      { name: 'twitter:description', content: pkg.description },
      { name: 'twitter:image', content: 'https://nuxtjs.org/meta_640.png' },
      { name: 'twitter:image:alt', content: 'NuxtJS Logo' },
      { name: 'apple-mobile-web-app-status-bar', content: '#aa7700' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // IOS 
      { rel: 'apple-touch-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
 plugins: [
  {
    src: '~/plugins/sw.js',
    ssr: false
  }
],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  pwa: {
    workbox: {
      importScripts: [
        'custom-sw.js'
      ],
    },
    manifest: {
      name: "PIPOLOCO",
      short_name: "pipo",
      description: "dummy application to demo manifest without SW",
      start_url: "/",
      scope: "/",
      background_color: "#EEE",
      theme_color: "#0D8775",
      display: "standalone",
      orientation: "portrait-primary",
      dir: "ltr",
      lang: "en-US",
      icons: [
        {
          src: "/_nuxt/icons/icon_120.f38c0b.png",
          type: "image/png",
          sizes: "120x120"
        },
        {
          src: "/_nuxt/icons/icon_144.f38c0b.png",
          type: "image/png",
          sizes: "144x144"
        },
        {
          src: "/_nuxt/icons/icon_152.f38c0b.png",
          type: "image/png",
          sizes: "152x152"
        },
        {
          src: "/_nuxt/icons/icon_192.f38c0b.png",
          type: "image/png",
          sizes: "192x192"
        }
      ]
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
