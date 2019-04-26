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
    getNeighbours: (): void => {
      console.log("LOL", ctx.route.path)
      const current = ctx.route.path
      const routes = ctx.app.router.options.routes //TODO: order it

      // Find siblings

      let direction = Direction.Left
      //FIXME: it's sitemap, find current and check prev/next items to not for nav
      return routes
        .map(
          ({ path }): Neighbour | undefined => {
            if (path !== "/" && countSubString(path, "/") === countSubString(current, "/")) {
              if (path !== current) {
                return { direction, path }
              }
              direction = Direction.Right
            }
          }
        )
        .filter(Boolean)
    }
  })
}
