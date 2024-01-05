import { it, describe, expect } from "vitest"
import { partition } from "../src"

describe("simple", () => {
  it("should equal", () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const [target, rest] = partition(arr, (o) => o % 2 === 0)

    expect(target).toEqual([2, 4, 6])
    expect(rest).toEqual([1, 3, 5])
  })

  it("should partition with empty array", () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const [target, rest] = partition(arr, (o) => Boolean(o))

    expect(target).toEqual([1, 2, 3, 4, 5, 6])
    expect(rest).toEqual([])
  })
})
