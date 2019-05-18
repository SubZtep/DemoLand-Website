import { RooterState } from "./state"

export default {
  hasSitemap(state: RooterState) {
    return state.sitemap !== undefined
  }
}
