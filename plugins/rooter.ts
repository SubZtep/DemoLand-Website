import { Context } from "@nuxt/vue-app"

/**
 * Value up, down, left or right only
 */
export enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right"
}

export interface Neighbour {
  direction: Direction
  path: string
}

const countSubString = (str: string, subStr: string): number => str.split(subStr).length - 1

export default (ctx, inject) => {
  inject("rooter", {
    getNeighbours: (): Neighbour[] => {
      const current = ctx.route.path
      const routes = ctx.app.router.options.routes //TODO: order it
      //console.log("ROUTES", routes)

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
      //console.log("SIBLINGS", [siblings, currentIndex])
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
    }
  })
}
