export default {
  setUpPath({ commit }, path: string) {
    commit("SET_UP_PATH", path)
  },

  setDownPath({ commit }, path: string) {
    commit("SET_DOWN_PATH", path)
  },

  setLeftPath({ commit }, path: string) {
    commit("SET_LEFT_PATH", path)
  },

  setRightPath({ commit }, path: string) {
    commit("SET_RIGHT_PATH", path)
  }
}
