import { Location } from "vue-router" // eslint-disable-line no-unused-vars

/** Value up, down, left or right only */
export enum Direction {
  Up = "up", // eslint-disable-line no-unused-vars
  Down = "down", // eslint-disable-line no-unused-vars
  Left = "left", // eslint-disable-line no-unused-vars
  Right = "right" // eslint-disable-line no-unused-vars
}

/** Page to navigate */
export interface Neighbour {
  direction: Direction // Way
  path: string // Link to page
}

/** Sitemap tree Node (a single page) */
export interface Node /*  extends Location  */ {
  name: string // page name
  path: string // page absolute path
  children: Node[]
}

/** Full sitemap `Node` tree */
let sitemap: Node

/**
 * Count snippet in string (helper)
 * @param str Full string
 * @param subStr Search snippet
 */
export const countSubString = (str: string | undefined, snippet: string = "/"): number =>
  typeof str === "undefined" ? 0 : str.split(snippet).length - 1

/**
 * Convert `Location` array to `Node` array
 * @param routes Routes from context
 */
export const getNodesFromLocations = (routes: Location[]): Node[] =>
  routes.map(page => ({
    name: page.name as string,
    path: page.path as string,
    children: []
  }))

/**
 * All the children recursive
 * @param routes Routes from context
 * @param node Current page
 */
export const getAllChildren = (nodes: Node[], node: Node): Node[] =>
  nodes.filter(cn => cn.path !== node.path && cn.path.startsWith(node.path))

/**
 * All the children
 * @param routes Routes from context
 * @param node Current page
 */
export const getChildren = (nodes: Node[], node: Node): Node[] =>
  getAllChildren(nodes, node)
    .filter(cn => {
      const sep: number = node.path === "/" ? 0 : 1
      const path: string = cn.path.substring(node.path.length)
      return countSubString(path) === sep
    })
    .map(child => {
      child.children = getChildren(nodes, child)
      return child
    })

/**
 *
 * @param nodes Routes from context
 * @param node Current page
 * @param way Neighbour direction
 */
export const getNeighbour = (nodes: Node[], node: Node, way: Direction): Node | undefined => {
  const path = node.path

  if (way === Direction.Down) {
    const children = getChildren(nodes, node)
    return children.length > 0 ? children[0] : undefined
  }

  if (path === "/") return // index page doesn't have parent or neighbours

  const parentPath = countSubString(path) === 1 ? "/" : path.substring(0, path.lastIndexOf("/"))
  const parent = nodes.find(n => n.path === parentPath) as Node

  if (way === Direction.Up) return parent

  const siblings: Node[] = getChildren(nodes, parent)
  const idx = siblings.findIndex(n => n.name === node.name)

  if (way === Direction.Left && idx > 0) return siblings[idx - 1]
  if (way === Direction.Right && idx < siblings.length) return siblings[idx + 1]
}

/**
 * Get the intore sidemap, parsed to `Node` object
 * @param routes Routes from context
 * @param rebuild Should force rebuild sitemap?
 */
export function getSitemap(nodes: Node[], rebuild = true): Node {
  if (!sitemap || rebuild) {
    const indexNode = nodes.find(item => item.path === "/") as Node
    sitemap = { ...indexNode }
    sitemap.children = getChildren(nodes, indexNode)
  }
  return sitemap
}

interface RooterInstance {
  canNavTo(): boolean
  getNeighbour(way: Direction): Node | undefined
  getRoutes(): Location[]
  getSitemap(rebuild?: boolean): Node
  getNeighbours(): Neighbour[]
  getDirection(fromPath: string | undefined, toPath: string | undefined): Direction | undefined
}

declare module "@nuxt/vue-app" {
  interface Context {
    $rooter: RooterInstance
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $rooter: RooterInstance
  }
}

export default (ctx, inject) => {
  const routes: Location[] = ctx.app.router.options.routes //TODO: order it
  const nodes: Node[] = getNodesFromLocations(routes)

  inject("rooter", {
    getRoutes: (): Location[] => {
      return ctx.app.router.options.routes //TODO: order it
    },

    /**
     * Can navigate to direction?
     */
    canNavTo: (way: Direction): boolean => {
      const path: string = ctx.route.path
      const currentNode = nodes.find(n => n.path === path) as Node
      return !!getNeighbour(nodes, currentNode, way)
    },

    /**
     * Get neightbour
     */
    getNeighbour: (way: Direction): Node | undefined => {
      const path: string = ctx.route.path
      const currentNode = nodes.find(n => n.path === path) as Node
      return getNeighbour(nodes, currentNode, way)
    },

    /**
     * Build sitemap tree
     */
    getSitemap: (rebuild = true): Node => {
      return getSitemap(nodes)
    },

    /**
     * Get neighbours
     */
    getNeighbours: (): Neighbour[] => {
      const current = ctx.route.path
      const routes = ctx.app.router.options.routes //TODO: order it

      const siblings = routes
        .map(
          (route): Neighbour | undefined => {
            if (
              route.path !== "/" &&
              countSubString(route.path, "/") === countSubString(current, "/")
            ) {
              return route
            }
          }
        )
        .filter(Boolean)

      const currentIndex = siblings.findIndex(route => route.path === current)
      const neighbours: Neighbour[] = []
      if (currentIndex > 0) {
        neighbours.push({
          direction: Direction.Left,
          path: siblings[currentIndex - 1].path
        })
      }
      if (currentIndex < siblings.length - 1) {
        neighbours.push({
          direction: Direction.Right,
          path: siblings[currentIndex + 1].path
        })
      }
      return neighbours
    },

    getDirection(fromPath: string | undefined, toPath: string | undefined): Direction | undefined {
      //if (typeof fromPath === "undefined" || typeof toPath === "undefined") return undefined

      return undefined
    }
  })
}
