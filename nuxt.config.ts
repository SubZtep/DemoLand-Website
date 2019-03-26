// eslint-disable-next-line no-unused-vars
import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
  mode: "universal",

  head: {
    titleTemplate: "%s - demo.land",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },

  css: ["~/assets/styles/main.scss"],

  router: {
    middleware: "pages"
  },

  build: {
    splitChunks: {
      layouts: true
    }
  }
}

export default config
