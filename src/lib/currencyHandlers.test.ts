import { formatLocalCurrencyValue, swapCurrencies } from "./currencyHandlers";

describe("formatLocalCurrencyValue", () => {
  // the built in currency formatter might be unpredictable depending on environment, so probably not ideal when testing against hardcoded strings
  it("formats a currency value correctly", () => {
    const result = formatLocalCurrencyValue(1234.56, "USD");
    expect(result).toBe("US$1,234.56");
  });

  it("formats a value for a different currency", () => {
    const result = formatLocalCurrencyValue(98765.43, "EUR");
    expect(result).toBe("€98,765.43");
  });

  it("handles small currency values", () => {
    const result = formatLocalCurrencyValue(0.05, "GBP");
    expect(result).toBe("£0.05");
  });
});

describe("swapCurrencies", () => {
  it("swaps two currencies", () => {
    const selectedCurrencies = { from: "USD", to: "EUR" };
    const result = swapCurrencies(selectedCurrencies);
    expect(result).toEqual({ from: "EUR", to: "USD" });
  });

  it("handles null values correctly", () => {
    const selectedCurrencies = { from: null, to: "GBP" };
    const result = swapCurrencies(selectedCurrencies);
    expect(result).toEqual({ from: "GBP", to: null });
  });
});
