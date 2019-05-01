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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://pro.fontawesome.com/releases/v5.8.1/js/solid.js",
        type: "text/javascript",
        integrity: "sha384-sJjbbGVKgAaulHq0KZK5MsUx9YmPj+4G3oY2vmW12iBNEFkkhObBezK0ZhSXchIs",
        crossorigin: "anonymous"
      },
      {
        defer: "",
        src: "https://pro.fontawesome.com/releases/v5.8.1/js/fontawesome.js",
        type: "text/javascript",
        integrity: "sha384-w6QYwIdCVqcYkHtaFutVu3VlDeu+pBFvlp7e0/tygMFwnWTl13KuVYfsp0ediPpA",
        crossorigin: "anonymous"
      }
    ]
  },

  loading: { color: "#fff" },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css", "~/assets/css/page-transitions.css"],

  plugins: ["~/plugins/rooter/plugin"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxtjs/axios"],

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
