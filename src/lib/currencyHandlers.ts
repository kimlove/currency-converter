export const formatLocalCurrencyValue = (currencyValue: number, outputCurrency: string) => {
  const formattedValue = currencyValue.toLocaleString("en-GB", {
    style: "currency",
    currency: outputCurrency,
  });

  return formattedValue;
};
