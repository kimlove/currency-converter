import { render, screen, fireEvent } from "@testing-library/react";
import { TextField } from "./textField";

describe("TextField", () => {
  it("renders the input with the correct props", () => {
    const mockUpdateAmountHandler = jest.fn();
    const testAmount = "100";

    render(<TextField amount={testAmount} updateAmountHandler={mockUpdateAmountHandler} />);

    const input = screen.getByPlaceholderText("Please enter a currency value...") as HTMLInputElement;

    expect(input.value).toBe(testAmount);

    // change the input and check the mocked function has been called
    fireEvent.change(input, { target: { value: "200" } });
    expect(mockUpdateAmountHandler).toHaveBeenCalledWith("200");
  });
});
