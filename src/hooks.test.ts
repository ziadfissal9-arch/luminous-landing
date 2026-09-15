import { describe, expect, it } from "vitest";
import { scorePassword } from "./hooks";

describe("scorePassword", () => {
  it("scores an empty password as 0", () => {
    expect(scorePassword("")).toBe(0);
  });

  it("scores a short lowercase-only password as weak", () => {
    expect(scorePassword("abc")).toBe(0);
  });

  it("awards a point for length >= 8", () => {
    expect(scorePassword("abcdefgh")).toBe(1);
  });

  it("awards a point for mixed case", () => {
    expect(scorePassword("Abcdefgh")).toBe(2);
  });

  it("awards a point for a digit", () => {
    expect(scorePassword("Abcdefg1")).toBe(3);
  });

  it("scores a long password with case, digits and symbols as strong (4)", () => {
    expect(scorePassword("Abcdefg1!")).toBe(4);
  });

  it("never exceeds the maximum score of 4", () => {
    expect(scorePassword("Sup3r$ecureP@ssw0rd!!!")).toBe(4);
  });
});
