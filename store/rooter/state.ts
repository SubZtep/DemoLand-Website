import { Page } from "~/plugins/rooter/types"
export interface RooterState {
  sitemap: Page | undefined
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
