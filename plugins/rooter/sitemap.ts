import { Location } from "vue-router"
import { Page, Direction } from "./types"
import { countSubString } from "./utils"

export default class Sitemap {
  _routes: Location[]
  _pages: Page[]
  _sitemap: Page

  constructor(routes: Location[]) {
    this._routes = routes
  }

  /**
   * Convert `Location` array to `Page` array
   */
  getPages(): Page[] {
    if (this._pages === undefined) {
      this._pages = this._routes.map(page => ({
        name: page.name as string,
        path: page.path as string,
        children: []
      }))
    }
    return this._pages
  }

  /**
   * Get a single page
   * @param pageName Page name
   */
  getPage(pageName: string): Page {
    const page = this.getPages().find(page => page.name === pageName)
    if (page === undefined) {
      throw new Error(`Page '${pageName}' not found`)
    }
    return page
  }

  /**
   * Get given page's all children page (multi-level, child, grand child, etc.)
   * @param page Current page
   */
  getAllChildren(page: Page): Page[] {
    return this.getPages().filter(cp => cp.path !== page.path && cp.path.startsWith(page.path))
  }

  /**
   * Get given page's all children page (one level)
   * @param routes Routes from context
   * @param node Current page
   */
  getChildren(page: Page): Page[] {
    return this.getAllChildren(page)
      .filter(cp => {
        const sep: number = page.path === "/" ? 0 : 1
        const path: string = cp.path.substring(page.path.length)
        return countSubString(path) === sep
      })
      .map(child => {
        child.children = this.getChildren(child)
        return child
      })
  }

  /**
   *
   * @param nodes Routes from context
   * @param node Current page
   * @param way Neighbour direction
   */
  getNeighbour(page: Page, way: Direction): Page | undefined {
    const path = page.path

    if (way === Direction.Down) {
      const children = this.getChildren(page)
      return children.length > 0 ? children[0] : undefined
    }

    if (path === "/") return // index page doesn't have parent or neighbours

    const parentPath = countSubString(path) === 1 ? "/" : path.substring(0, path.lastIndexOf("/"))
    const parent = this.getPages().find(p => p.path === parentPath) as Page

    if (way === Direction.Up) return parent

    const siblings: Page[] = this.getChildren(parent)
    const idx = siblings.findIndex(p => p.name === page.name)

    if (way === Direction.Left && idx > 0) return siblings[idx - 1]
    if (way === Direction.Right && idx < siblings.length) return siblings[idx + 1]
  }

  /**
   * Get the entire sitemap, index page and children recursive
   */
  getSitemap(): Page {
    if (this._sitemap === undefined) {
      const indexPage = this.getPages().find(page => page.path === "/") as Page
      this._sitemap = { ...indexPage }
      this._sitemap.children = this.getChildren(indexPage)
    }
    return this._sitemap
  }
}
