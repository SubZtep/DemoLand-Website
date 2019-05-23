import { Direction, Page } from "~/plugins/rooter/types"

export default function ({ app, store }): void {
  // Set the arrows target or no arrow

  let tmp: Page | undefined
  tmp = app.$rooter.getNeighbour(Direction.Up)
  store.dispatch("rooter/setUpPath", tmp ? tmp.path : "")

  tmp = app.$rooter.getNeighbour(Direction.Down)
  store.dispatch("rooter/setDownPath", tmp ? tmp.path : "")

  tmp = app.$rooter.getNeighbour(Direction.Left)
  store.dispatch("rooter/setLeftPath", tmp ? tmp.path : "")

  tmp = app.$rooter.getNeighbour(Direction.Right)
  store.dispatch("rooter/setRightPath", tmp ? tmp.path : "")
}
