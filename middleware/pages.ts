export default function ({ store, route }): void {
  // Set current page name

  store.dispatch("site/setPage", route.name)
}
