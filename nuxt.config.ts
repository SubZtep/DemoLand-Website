import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
  mode: "universal",

  css: ["~/assets/styles/main.scss"],

  build: {
    splitChunks: {
      layouts: true
    }
  }
}

export default config
