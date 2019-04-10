// eslint-disable-next-line no-unused-vars
import { State } from "./state"

export default {
  updatePage(state: State, page: string): void {
    state.page = page
  }
}
