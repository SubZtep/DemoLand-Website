import { Direction, Node } from "~/plugins/rooter" // eslint-disable-line no-unused-vars

export default function({ app, store }): void {
  let tmp: Node | undefined
  tmp = app.$rooter.getNeighbour(Direction.Up)
  store.dispatch("rooter/setUpPath", tmp ? tmp.path : "")

  tmp = app.$rooter.getNeighbour(Direction.Down)
  store.dispatch("rooter/setDownPath", tmp ? tmp.path : "")

  tmp = app.$rooter.getNeighbour(Direction.Left)
  store.dispatch("rooter/setLeftPath", tmp ? tmp.path : "")

  tmp = app.$rooter.getNeighbour(Direction.Right)
  store.dispatch("rooter/setRightPath", tmp ? tmp.path : "")
}
