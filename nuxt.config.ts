module.exports = {
  mode: "universal",

  head: {
    titleTemplate: "%s ·d҉e҉m҉o҉.҉l҉a҉n҉d҉",
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
    "~/plugins/rooter/plugin"
    //{ src: "~/plugins/rooter", ssr: false }
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
          {
            set: "@fortawesome/pro-solid-svg-icons",
            icons: ["faArrowAltUp", "faArrowAltDown", "faArrowAltLeft", "faArrowAltRight"]
          },
          {
            set: "@fortawesome/pro-regular-svg-icons",
            icons: ["faAdjust", "faArchive"]
          },
          {
            set: "@fortawesome/pro-light-svg-icons",
            icons: ["faCube"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: [
              "faGithub",
              "faLinkedin",
              "faTwitter",
              "faInstagram",
              "faFacebookF",
              "faTwitch",
              "faItchIo",
              "faYoutube",
              "faLastfm",
              "faSoundcloud",
              "faMixcloud"
            ]
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
