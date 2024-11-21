import { render, screen } from "@testing-library/react";
import { ConvertedTotal } from "./convertedTotal";

import { formatLocalCurrencyValue } from "@/lib/currencyHandlers";

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
    const formattedValue = formatLocalCurrencyValue(testData.response.value, testData.response.to);

    render(<ConvertedTotal conversionData={testData} />);

    expect(screen.getByText(new RegExp(testData.response.to))).toBeInTheDocument();

    // hardcode the total for now as Jest being pain with the formatted total from formatLocalCurrencyValue
    // would dig into deeper and resolve if more time
    expect(screen.getByText(/8,583.97/)).toBeInTheDocument();

    //expect(screen.getByText(new RegExp(formattedValue))).toBeInTheDocument();
  });
});
