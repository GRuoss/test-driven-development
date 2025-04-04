import { sub, sum } from "./calc";

describe("adding up numbers", () => {
  test("sum of zeros is zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
  test("sum of one and two is three", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("sum of number and its negative counterpart is zero", () => {
    expect(sum(25, -25)).toBe(0);
  });
});

describe("subtracting numbers", () => {
  test.each([
    [0, 0, 0],
    [3, 2, 1],
    [5, -5, 10],
  ])("sub(%f, %f) == %f", (a, b, expected) => {
    expect(sub(a, b)).toBe(expected);
  });
});

