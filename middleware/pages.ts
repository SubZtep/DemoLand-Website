// eslint-disable-next-line no-unused-vars
import { Context } from "@nuxt/vue-app"

export default function(context: Context): void {
  context.store.commit("site/updatePage", context.route.name)
}
