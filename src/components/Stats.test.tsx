import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Stats from "./Stats";
import { stats } from "../data";

describe("Stats", () => {
  it("renders a StatCard for every stat without violating the Rules of Hooks", () => {
    render(<Stats />);
    for (const s of stats) {
      expect(screen.getByText(s.label)).toBeInTheDocument();
    }
  });
});
