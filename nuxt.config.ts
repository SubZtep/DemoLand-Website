// eslint-disable-next-line no-unused-vars
import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
  mode: "universal",

  head: {
    titleTemplate: "%s - demo.land",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "demo.land website" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#fff" },

  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css", "~/assets/css/page-transitions.css"],

  plugins: ["~/plugins/rooter"],

  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],

  axios: {},

  router: {
    middleware: "pages"
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
