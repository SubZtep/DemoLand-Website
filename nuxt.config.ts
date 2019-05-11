// eslint-disable-next-line no-unused-vars
import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
  mode: "universal",

  head: {
    titleTemplate: "%s - d҉e҉m҉o҉.҉l҉a҉n҉d҉",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "demo.land website" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  //loading: false,

  css: ["~/assets/css/tailwind.css", "~/assets/css/page-transitions.css"],

  plugins: [
    "~/plugins/rooter"
    //{ src: "~/plugins/rooter", ssr: false }
    //{ src: "~/plugins/d3tree", ssr: false }
  ],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          //import whole set
          {
            set: "@fortawesome/pro-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          },
          //import 2 icons from set
          // please note this is PRO set in this example,
          // you must have it in your node_modules to actually import
          {
            set: "@fortawesome/pro-regular-svg-icons",
            icons: ["faAdjust", "faArchive"]
          }
        ]
      }
    ]
  ],

  router: {
    middleware: ["pages", "rooter"]
  },

  build: {
    postcss: {
      plugins: [require("tailwindcss")("./tailwind.config.ts"), require("autoprefixer")]
    },
    loaders: {
      cssModules: {
        localIdentName: "[name]__[local]__[hash:base64:5]"
      }
    }
  }
}

export default config
