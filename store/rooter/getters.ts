import { RooterState } from "./state" // eslint-disable-line no-unused-vars

export default {
  hasSitemap(state: RooterState) {
    return typeof state.sitemap !== "undefined"
  }
}
