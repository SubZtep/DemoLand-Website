import Vue from "vue"
/*
console.log("Juhuuqqqqq")

Vue.prototype.$rooter = () => {
  console.log("Juhuu")
}
 */

const rooter = () => {
  console.log("IO am")
}

export default ({ app }, inject) => {
  inject("rooter", rooter)
}
