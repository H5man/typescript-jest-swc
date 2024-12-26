import { sum } from "."

describe("sum", () => {
    it("returns correct number", () => {
        expect(sum(1, 2)).toBe(3)
    })
})