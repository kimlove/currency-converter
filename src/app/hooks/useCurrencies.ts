import { useState, useEffect } from "react";

import { Currency } from "@/app/types/currency";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<Currency[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currenciesUrl = "/api/currencies"; // use our server based api route so we don't need to expose our API key to the client (path: /app/api/currencies/route.ts)

      try {
        const res = await fetch(currenciesUrl);
        if (res.ok) {
          const data = await res.json();

          if (data?.response && data.response.length > 0) {
            setCurrencies(data.response);
          } else {
            throw new Error("No currencies found in the response.");
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return { currencies, loading, error };
};
