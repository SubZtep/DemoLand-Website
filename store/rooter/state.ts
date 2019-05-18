export interface RooterState {
  upPath: string
  downPath: string
  leftPath: string
  rightPath: string
}

export default (): RooterState => ({
  upPath: "",
  downPath: "",
  leftPath: "",
  rightPath: ""
})
