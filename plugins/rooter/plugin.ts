import { Location } from "vue-router"
import { Page, Direction, Neighbour } from "./types"
import Sitemap from "./sitemap"

export default (ctx, inject) => {
  const routes: Location[] = ctx.app.router.options.routes //TODO: order it

  /** Full sitemap, Page with children */
  const sitemap = new Sitemap(routes)

  inject("rooter", {
    /**
     * Get neightbour
     */
    getNeighbour: (way: Direction): Page | undefined => {
      const path: string = ctx.route.path
      const currentPage = sitemap.getPages().find(p => p.path === path) as Page
      return sitemap.getNeighbour(currentPage, way)
    },

    /**
     * Build sitemap tree
     */
    getSitemap: (): Page => {
      return sitemap.getSitemap()
    }
  })
}
