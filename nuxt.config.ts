// eslint-disable-next-line no-unused-vars
import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
  mode: "universal",

  head: {
    titleTemplate: "%s - demo.land",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { rel: "favicon", href: "favicon.ico" }
    ]
  },

  css: ["~/assets/styles/tailwind.css"],

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
