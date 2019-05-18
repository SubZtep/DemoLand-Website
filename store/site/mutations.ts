import { SiteState } from "./state"

export default {
  SET_PAGE(state: SiteState, page: string): void {
    state.page = page
  }
}
