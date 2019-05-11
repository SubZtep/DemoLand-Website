import { Component, Vue } from "nuxt-property-decorator"
import { Route } from "vue-router" // eslint-disable-line no-unused-vars

@Component
export default class TransitionMixin extends Vue {
  // transition: {
  //   mode: "out-in"
  //   css: false
  // }
  // leave(el, done) {
  //   console.log('index leave')
  //   done()
  // },
  // beforeEnter(el) {
  //   console.log('index before enter')
  // },
  // enter(el, done) {
  //   console.log('index enter')
  //   done()
  // }
  transition(to: Route | undefined, from: Route | undefined): string | void {
    // const dir = this.$rooter.getDirection(
    //   typeof from !== "undefined" ? from.path : undefined,
    //   typeof to !== "undefined" ? to.path : undefined
    // )
    // if (typeof this !== "undefined") {
    //   console.log("XXXXXXX", [from, to, this.lolka])
    // }
    // if (typeof from !== "undefined" && typeof to !== "undefined") {
    //   switch (`${from.name}-${to.name}`) {
    //     case "projects-index":
    //     case "index-about":
    //       return "slide-left"
    //     case "index-projects":
    //     case "about-index":
    //       return "slide-right"
    //     default:
    //       return "fade"
    //   }
    // }
    //return "zoom-out"
    return "slide-" + ["up", "down", "left", "right"][Math.floor(Math.random() * 4)]
  }
}
