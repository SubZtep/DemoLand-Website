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
export interface Page /*  extends Location  */ {
  name: string // page name
  path: string // page absolute path
  children: Page[]
}
interface RooterInstance {
  getNeighbour(way: Direction): Page | undefined
  getSitemap(rebuild?: boolean): Page
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
