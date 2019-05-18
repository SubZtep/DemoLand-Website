import { Component, Vue } from "nuxt-property-decorator"
import { Route } from "vue-router"

@Component
export default class TransitionMixin extends Vue {
  transition(to: Route | undefined, from: Route | undefined): string | void {
    return "slide-" + ["up", "down", "left", "right"][Math.floor(Math.random() * 4)]
  }
}
