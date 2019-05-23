import { Component, Vue } from "nuxt-property-decorator"
import { Route } from "vue-router"

@Component
export default class TransitionMixin extends Vue {
  transition(to: Route | undefined, from: Route | undefined): string | void {
    // return "slide-" + ["up", "down", "left", "right"][Math.floor(Math.random() * 4)]
    if (from === undefined || to === undefined) {
      return "fade"
    }
    if (to.path === "/") {
      return "slide-up"
    }

    const fromCount: number = (from.path.match(/\//g) as RegExpMatchArray).length
    const toCount: number = (to.path.match(/\//g) as RegExpExecArray).length

    if (fromCount < toCount) {
      return "slide-down"
    } else if (fromCount > toCount) {
      return "slide-up"
    }

    //TODO: order pages

    return (from.name as string) < (to.name as string) ? "slide-left" : "slide-right"
  }
}
