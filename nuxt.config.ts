// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Anggi Dev Blog',
      titleTemplate: '%s - Anggi Dev Blog',
      meta: [{ name: 'description', content: 'Blog Seputar Teknologi dan Linux' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://anggi.dev',
    identity: {
      type: 'Person',
    },
    twitter: '@anggi-dev',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
    'nuxt-module-feed',
  ],

  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      trackerUrl: 'https://cloud.umami.is/script.js', siteId: 'f0ca3d38-726c-41b9-b2fb-b5f7b27ab91a',
    },
  },

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  feed: {
    sources: [
      {
        path: '/feed.xml', // The route to your feed.
        type: 'rss2', // Can be: rss2, atom1, json1
        cacheTime: 60 * 15, // How long should the feed be cached
      },
    ],
  },
})
