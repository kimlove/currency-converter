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
  const formattedValue = conversionData.response.value.toLocaleString("en-GB", {
    style: "currency",
    currency: conversionData?.response?.to,
  });

  return <div className="text-3xl">{formattedValue}</div>;
};
