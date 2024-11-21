export const formatLocalCurrencyValue = (currencyValue: number, outputCurrency: string) => {
  const formattedValue = currencyValue.toLocaleString("en-GB", {
    style: "currency",
    currency: outputCurrency,
  });

  return formattedValue;
};

export const swapCurrencies = (selectedCurrencies: { from: string | null; to: string | null }) => {
  return {
    from: selectedCurrencies.to,
    to: selectedCurrencies.from,
  };
};
