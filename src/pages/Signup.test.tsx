import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Signup from "./Signup";

function renderSignup() {
  return render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
}

describe("Signup", () => {
  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();
    renderSignup();

    await user.click(screen.getByRole("button", { name: "Create account" }));

    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
    expect(screen.getByText("Enter a valid email address")).toBeInTheDocument();
    expect(
      screen.getByText("Password must be at least 8 characters")
    ).toBeInTheDocument();
    expect(
      screen.getByText("You must accept the terms to continue")
    ).toBeInTheDocument();
  });

  it("shows a live password strength label as the user types", async () => {
    const user = userEvent.setup();
    renderSignup();

    await user.type(screen.getByLabelText("Password"), "Abcdefg1!");
    expect(screen.getByText("Strong")).toBeInTheDocument();
  });

  it("completes signup with valid input and shows the honest demo disclaimer", async () => {
    const user = userEvent.setup();
    renderSignup();

    await user.type(screen.getByLabelText("Full name"), "Ziad Fissal");
    await user.type(screen.getByLabelText("Email address"), "ziad@example.com");
    await user.type(screen.getByLabelText("Password"), "Sup3rSecure!");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Create account" }));

    expect(screen.getByText("Welcome aboard, Ziad!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "This is a portfolio demo — no account was created and no email was sent."
      )
    ).toBeInTheDocument();
  });
});
