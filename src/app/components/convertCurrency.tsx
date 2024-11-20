"use client";

import { useState, useEffect } from "react";

import { TextField } from "./textField";
import { ConvertedTotal } from "./convertedTotal";
import { SelectCurrency } from "./selectCurrency";

import { useCurrencies } from "@/app/hooks/useCurrencies";

import { SelectedCurrencies } from "@/app/types/currency";

const initCurrencies = {
  from: null,
  to: null,
};

export const ConvertCurrency = () => {
  const { currencies, loading, error } = useCurrencies();
  const [amount, setAmount] = useState("");
  const [conversionData, setConversionData] = useState(null);
  const [selectedCurrencies, setSelectedCurrencies] = useState<SelectedCurrencies>({
    from: null,
    to: null,
  });

  useEffect(() => {
    if (selectedCurrencies.from && selectedCurrencies.to && amount) {
      const convertUrl = `/api/convert?from=${selectedCurrencies.from}&to=${selectedCurrencies.to}&amount=${amount}`;

      const fetchConversion = async () => {
        try {
          const res = await fetch(convertUrl);
          if (res.ok) {
            const data = await res.json();
            setConversionData(data);
          }
        } catch (err) {
          console.error(err);
        } finally {
          //   setLoading(false);
        }
      };

      fetchConversion();
    }
  }, [selectedCurrencies, amount]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const updateCurrencyHandler = (type: string, value: string) => {
    if (type && value) {
      setSelectedCurrencies((prev) => {
        return {
          ...prev,
          [type]: value,
        };
      });
    } else {
      console.error("Problem detected with updateCurrencyHandler");
    }
  };

  const swapCurrencies = () => {
    setSelectedCurrencies((prev) => {
      return {
        from: prev.to,
        to: prev.from,
      };
    });
  };

  const updateAmountHandler = (value: string) => {
    if (/^\d+(\.\d{0,2})?$/.test(value)) {
      setAmount(value);
    } else {
      setAmount(value.slice(0, -1));
      setConversionData(null); // reset data
    }
  };

  return (
    <section className="flex flex-col gap-4 p-4 rounded-xl w-full bg-black/10">
      {currencies ? (
        <>
          <TextField amount={amount} updateAmountHandler={updateAmountHandler} />
          <SelectCurrency
            currencies={currencies}
            selectedCurrencies={selectedCurrencies}
            updateCurrencyHandler={updateCurrencyHandler}
            swapCurrencies={swapCurrencies}
          />
          {conversionData ? <ConvertedTotal conversionData={conversionData} /> : null}
        </>
      ) : null}
    </section>
  );
};
