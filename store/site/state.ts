export interface SiteState {
  page: string
}

export default (): SiteState => ({
  page: "index"
})
