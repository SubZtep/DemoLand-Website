export default function({ store, route }): void {
  store.dispatch("site/setPage", route.name)
}
