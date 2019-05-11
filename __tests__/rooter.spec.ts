import { Location } from "vue-router" // eslint-disable-line no-unused-vars
import {
  Node, // eslint-disable-line no-unused-vars
  getSitemap,
  countSubString,
  getNodesFromLocations,
  getAllChildren,
  getChildren,
  getNeighbour,
  Direction
} from "../plugins/rooter"

const routes: Location[] = [
  {
    path: "/about",
    //component: undefined,
    name: "about"
  },
  {
    path: "/home",
    //component: null,
    name: "home"
  },
  {
    path: "/projects",
    //component: null,
    name: "projects"
  },
  {
    path: "/about/links",
    //component: null,
    name: "about-links"
  },
  {
    path: "/",
    //component: null,
    name: "index"
  }
]

const nodes: Node[] = getNodesFromLocations(routes)
const indexNode: Node = nodes.find(node => node.name === "index") as Node
const homeNode: Node = nodes.find(node => node.name === "home") as Node
const aboutNode: Node = nodes.find(node => node.name === "about") as Node

describe("countSubString", () => {
  it("undefined", () => {
    expect(countSubString(undefined)).toBe(0)
  })
  it("Only default snippet", () => {
    expect(countSubString("/")).toBe(1)
  })
  it("One default snippet", () => {
    expect(countSubString("/hello")).toBe(1)
  })
  it("Two default snippet", () => {
    expect(countSubString("/hello/world")).toBe(2)
  })
  it("One random snippet", () => {
    expect(countSubString("hello world", "world")).toBe(1)
  })
})

describe("getNodesFromLocations", () => {
  it("Full", () => {
    expect(nodes).toHaveLength(5)
  })
  it("No children", () => {
    expect(homeNode.children).toHaveLength(0)
  })
})

describe("getAllChildren", () => {
  it("No child", () => {
    expect(getAllChildren(nodes, homeNode)).toHaveLength(0)
  })
  it("One child", () => {
    expect(getAllChildren(nodes, aboutNode)).toHaveLength(1)
  })
  it("All children", () => {
    expect(getAllChildren(nodes, indexNode)).toHaveLength(4)
  })
})

describe("getChildren", () => {
  it("Root node", () => {
    expect(getChildren(nodes, indexNode)).toHaveLength(3)
  })
  it("No node", () => {
    expect(getChildren(nodes, homeNode)).toHaveLength(0)
  })
  it("One node", () => {
    expect(getChildren(nodes, aboutNode)).toHaveLength(1)
  })
})

describe("getNeighbour", () => {
  it("Up nowhere", () => {
    expect(getNeighbour(nodes, indexNode, Direction.Up)).toBeUndefined()
  })
  it("Up to index", () => {
    expect(getNeighbour(nodes, homeNode, Direction.Up)).toHaveProperty("name", "index")
  })
})

describe("getSitemap", () => {
  it("Full", () => {
    const sitemap: Node = getSitemap(nodes)
    expect(sitemap.name).toEqual("index")
  })
})
