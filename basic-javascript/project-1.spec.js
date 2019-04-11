const helpers = require("./project-1")

describe("project-1.js", () => {
  describe("multiplyByTen(num)", () => {
    it("should multiply num by 10", () => {
      expect(helpers.multiplyByTen(2)).toBe(20)
    })
    it("should return null if num is a string", () => {
      expect(helpers.multiplyByTen("9")).toBeNull()
    })
    it("should return null if num is an array", () => {
      expect(helpers.multiplyByTen([1, 2])).toBeNull()
    })
    it("should return null if num is an object", () => {
      expect(helpers.multiplyByTen({ key1: 2, key2: 5 })).toBeNull()
    })
    it("should return null if no num", () => {
      expect(helpers.multiplyByTen()).toBeNull()
    })
    it("should use first argument, and ignore the others, if there are more than one argument", () => {
      expect(helpers.multiplyByTen(2, 5, 8)).toBe(20)
    })
  })
})
