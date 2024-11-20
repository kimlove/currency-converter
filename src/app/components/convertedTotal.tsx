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

  return <div className="pt-4 mt-4 text-4xl border-t border-t-black/20 text-center ">{formattedValue}</div>;
};
