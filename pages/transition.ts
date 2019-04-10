import { Vue } from "nuxt-property-decorator"

export default class Transition extends Vue {
  // eslint-disable-next-line no-unused-vars
  transition(to: any, from: any): string {
    // console.log("XXX [to, from]")
    // return "page"
    return "slide-left" // return "slide-left"
  }
}
