import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("shows the current year in the copyright line", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} Luminous. All rights reserved.`)).toBeInTheDocument();
  });

  it("labels each social link distinctly", () => {
    render(<Footer />);
    expect(screen.getByLabelText("X (Twitter)")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  });
});
