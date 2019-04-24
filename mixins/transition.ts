import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class TransitionMixin extends Vue {
  transition(to, from): string | void {
    if (typeof from !== "undefined" && typeof to !== "undefined") {
      switch (`${from.name}-${to.name}`) {
        case "projects-index":
        case "index-about":
          return "slide-left"
        case "index-projects":
        case "about-index":
          return "slide-right"
        default:
          return "fade"
      }
    }
  }

  beforeEnter() {
    console.log("enter")
  }

  /* enter() {
    console.log("leave")
  } */
}
