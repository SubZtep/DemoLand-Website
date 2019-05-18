import { countSubString } from "../plugins/rooter/utils"

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
