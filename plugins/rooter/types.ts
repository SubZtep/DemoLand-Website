/** Value up, down, left or right only */
export enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right"
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
  getSitemap(): Page
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
