import { render, screen } from "@testing-library/react";
import { ConvertedTotal } from "./convertedTotal"; // Update the import path as necessary

describe("ConvertedTotal", () => {
  it("renders the amount correctly", () => {
    const amount = 123.45;

    render(<ConvertedTotal amount={amount} />);
    expect(screen.getByText(amount.toString())).toBeInTheDocument();
  });
});
