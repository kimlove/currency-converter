import { formatLocalCurrencyValue } from "@/lib/currencyHandlers";

interface ConvertedTotalProps {
  conversionData: {
    response: {
      timestamp: number;
      date: string;
      from: string;
      to: string;
      amount: number;
      value: number;
    };
  };
}

export const ConvertedTotal = ({ conversionData }: ConvertedTotalProps) => {
  let formattedValue = null;

  if (conversionData?.response?.value && conversionData?.response?.to) {
    formattedValue = formatLocalCurrencyValue(conversionData.response.value, conversionData?.response?.to);
  }

  // if we have a formattedValue, display it
  if (formattedValue) {
    return <div className="text-3xl">{formattedValue}</div>;
  }

  // Basic error message
  return <div className="text-3xl">Error displaying value</div>;
};
