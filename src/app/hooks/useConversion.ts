import { useState, useEffect } from "react";

export const useConversion = (selectedCurrencies: { from: string | null; to: string | null }, amount: string) => {
  const [conversionData, setConversionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversion = async () => {
      if (!selectedCurrencies.from || !selectedCurrencies.to || !amount) return;

      const convertUrl = `/api/convert?from=${selectedCurrencies.from}&to=${selectedCurrencies.to}&amount=${amount}`;
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const res = await fetch(convertUrl);
        if (res.ok) {
          const data = await res.json();
          setConversionData(data);
        } else {
          throw new Error(`Failed to fetch conversion: ${res.statusText}`);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversion();
  }, [selectedCurrencies, amount]);

  return { conversionData, loading, error };
};
