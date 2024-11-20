import { render, screen } from "@testing-library/react";
import { Header } from "./header"; // Update the import path as necessary

describe("Header", () => {
  it("renders the children correctly", () => {
    const text = "A simple currency conversion tool";

    render(<Header>{text}</Header>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
