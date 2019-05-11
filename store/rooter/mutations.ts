import { Node } from "~/plugins/rooter" // eslint-disable-line no-unused-vars
import { RooterState } from "./state" // eslint-disable-line no-unused-vars

export default {
  SET_SITEMAP(state: RooterState, sitemap: Node): void {
    state.sitemap = sitemap
  },

  SET_UP_PATH(state: RooterState, path: string): void {
    state.upPath = path
  },

  SET_DOWN_PATH(state: RooterState, path: string): void {
    state.downPath = path
  },

  SET_LEFT_PATH(state: RooterState, path: string): void {
    state.leftPath = path
  },

  SET_RIGHT_PATH(state: RooterState, path: string): void {
    state.rightPath = path
  }
}
