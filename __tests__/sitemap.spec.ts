import { Location } from "vue-router"
import Sitemap from "../plugins/rooter/sitemap"
import { Direction, Page } from "../plugins/rooter/types"

const routes: Location[] = [
  {
    path: "/about",
    name: "about"
  },
  {
    path: "/home",
    name: "home"
  },
  {
    path: "/projects",
    name: "projects"
  },
  {
    path: "/about/links",
    name: "about-links"
  },
  {
    path: "/",
    name: "index"
  }
]

const sitemap = new Sitemap(routes)

describe("Get pages from locations", () => {
  it("Page count", () => {
    expect(sitemap.getPages()).toHaveLength(5)
  })
  it("No children", () => {
    expect(sitemap.getPage("home").children).toHaveLength(0)
  })
})

describe("Get all children", () => {
  it("All children", () => {
    const page = sitemap.getPage("index")
    expect(sitemap.getAllChildren(page)).toHaveLength(4)
  })
  it("No child", () => {
    const page = sitemap.getPage("home")
    expect(sitemap.getAllChildren(page)).toHaveLength(0)
  })
  it("One child", () => {
    const page = sitemap.getPage("about")
    expect(sitemap.getAllChildren(page)).toHaveLength(1)
  })
})

describe("Get Children", () => {
  it("Root node", () => {
    const page = sitemap.getPage("index")
    expect(sitemap.getChildren(page)).toHaveLength(3)
  })
  it("No node", () => {
    const page = sitemap.getPage("home")
    expect(sitemap.getChildren(page)).toHaveLength(0)
  })
  it("One node", () => {
    const page = sitemap.getPage("about")
    expect(sitemap.getChildren(page)).toHaveLength(1)
  })
})

describe("getNeighbour", () => {
  it("Up nowhere", () => {
    const page = sitemap.getPage("index")
    expect(sitemap.getNeighbour(page, Direction.Up)).toBeUndefined()
  })
  it("Up to index", () => {
    const page = sitemap.getPage("home")
    expect(sitemap.getNeighbour(page, Direction.Up)).toHaveProperty("name", "index")
  })
})

describe("getSitemap", () => {
  it("Full", () => {
    const sm: Page = sitemap.getSitemap()
    expect(sm.name).toEqual("index")
  })
})
