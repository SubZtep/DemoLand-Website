// eslint-disable-next-line no-unused-vars
export default function(context): void {
  context.store.commit("site/updatePage", context.route.name)
}
