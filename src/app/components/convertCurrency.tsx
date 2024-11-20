"use client";

import { useState } from "react";

import { TextField } from "./textField";
import { ConvertedTotal } from "./convertedTotal";
import { SelectCurrency } from "./selectCurrency";

import { useCurrencies } from "@/app/hooks/useCurrencies";

import { SelectedCurrencies } from "@/app/types/currency";

export const ConvertCurrency = () => {
  const { currencies, loading, error } = useCurrencies();
  const [selectedCurrencies, setSelectedCurrencies] = useState<SelectedCurrencies>({
    from: null,
    to: null,
  });

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

  return (
    <section className="flex flex-col gap-4 p-4 rounded-xl w-full bg-black/10">
      {currencies ? (
        <>
          <TextField label="Amount" />
          <SelectCurrency
            currencies={currencies}
            selectedCurrencies={selectedCurrencies}
            updateCurrencyHandler={updateCurrencyHandler}
          />
          <ConvertedTotal amount={100} />
        </>
      ) : null}
    </section>
  );
};
