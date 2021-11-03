export default {
  target: "static",
  ssr: false,
  head: {
    title: "Геркулес",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: 'Строительная компания "Геркулес"' },
      { hid: "author", name: "author", content: "github.com/SugarF0x" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  css: ["~/assets/global.sass"],
  plugins: ["@/plugins/fragment.ts"],
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/composition-api/module",
    "@nuxt/image",
    ["nuxt-storm", { nested: true, alias: true }],
  ],
  modules: ["@nuxtjs/robots", "@nuxtjs/sitemap"],
  robots: {},
  sitemap: {
    hostname: "https://hercules-construct.ru",
  },
  content: {},
  image: {
    dir: "assets/img",
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
  },
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-property-in-object", { loose: true }]],
    },
  },
  generate: {
    interval: 2000,
  },
}
