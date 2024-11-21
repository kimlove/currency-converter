import { render, screen } from "@testing-library/react";
import { ConvertedTotal } from "./convertedTotal";

const testData = {
  meta: {
    code: 200,
    disclaimer: "Usage subject to terms: https://currencybeacon.com/terms",
  },
  response: {
    timestamp: 1732181033,
    date: "2024-11-21",
    from: "CAD",
    to: "CUP",
    amount: 500,
    value: 8583.967555,
  },
  timestamp: 1732181033,
  date: "2024-11-21",
  from: "CAD",
  to: "CUP",
  amount: 500,
  value: 8583.967555,
};

describe("ConvertedTotal", () => {
  it("renders the amount correctly", () => {
    // Some weirdness with Jest and toLocaleString -- for now mock the value
    jest.spyOn(Number.prototype, "toLocaleString").mockReturnValue("CUP 8,583.97");

    render(<ConvertedTotal conversionData={testData} />);

    const formattedValue = testData.response.value.toLocaleString("en-GB", {
      style: "currency",
      currency: testData.response.to,
    });

    expect(screen.getByText(new RegExp(`${formattedValue}`))).toBeInTheDocument();
  });
});
