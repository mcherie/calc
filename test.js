const assert = require("assert")
const operations = require("./operations.js")

it("correctly calculates the sum of 1 and 3", () => {
  assert.equal(operations.add(1, 3), 4)
})

it("correctly calculates the sum of -1 and -1", () => {
  assert.equal(operations.add(-1, -1), -2)
})

it("correctly calculates the difference of 33 and 3", () => {
  assert.equal(operations.add(33, 3), 10)
})

it("correctly calculates the product of 12 and 12", () => {
  assert.equal(operations.add(12, 12), 144)
})

it("correctly calculates the quotient of 10 and 2", () => {
  assert.equal(operations.add(10, 2), 5)
})