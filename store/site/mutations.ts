import { SiteState } from "./state" // eslint-disable-line no-unused-vars

export default {
  SET_PAGE(state: SiteState, page: string): void {
    state.page = page
  }
}
