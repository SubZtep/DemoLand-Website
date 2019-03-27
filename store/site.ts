import { Module, VuexModule, Mutation } from "vuex-module-decorators"

@Module({ namespaced: true, name: "Site" })
export default class Site extends VuexModule {
  page = "index"

  @Mutation
  updatePage(page: string) {
    this.page = page
  }
}
