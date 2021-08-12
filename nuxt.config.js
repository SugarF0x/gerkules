export default {
  target: 'static',
  head: {
    title: 'Геркулес',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Строительная компания "Геркулес"' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    "~/assets/global.sass"
  ],
  plugins: [
    '@/plugins/fragment.ts',
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    ['nuxt-storm', { nested: true, alias: true }],
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   themes: {
    //     light: {
    //       primary: '#FFCE3E',
    //       secondary: '#FEE856',
    //       background: '#1A1A1A',
    //       backgroundAlternative: '#000000',
    //       footer: '#262626'
    //     },
    //   },
    // }
  },
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    }
  },
  generate: {
    interval: 2000,
  }
}