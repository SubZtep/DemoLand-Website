import { Node } from "~/plugins/rooter" // eslint-disable-line no-unused-vars
export interface RooterState {
  sitemap: Node | undefined
  upPath: string
  downPath: string
  leftPath: string
  rightPath: string
}

export default (): RooterState => ({
  sitemap: undefined,
  upPath: "",
  downPath: "",
  leftPath: "",
  rightPath: ""
})
