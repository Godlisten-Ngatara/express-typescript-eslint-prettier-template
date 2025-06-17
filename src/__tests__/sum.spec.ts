import { calculateSum } from "#utils/sum.js";
import { describe, expect, it } from "vitest";

describe("Sum function", () => {
  it("Should add two numbers correctly", () => {
    expect(calculateSum(2, 3)).toBe(5);
  });
});
