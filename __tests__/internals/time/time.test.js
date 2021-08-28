import { time } from "@/internals";

describe("if a string is received", () => {
  it("convert string to number", () => {
    expect(time("2 days")).toBe(172800000);
  });
});

describe("if a number is received", () => {
  it("do nothing", () => {
    expect(time(60000)).toBe(60000);
  });
});
