"use client";

import { useState, useEffect } from "react";

import { TextField } from "./textField";
import { ConvertedTotal } from "./convertedTotal";
import { SelectCurrency } from "./selectCurrency";

import { useCurrencies } from "@/app/hooks/useCurrencies";
import { useConversion } from "@/app/hooks/useConversion";

import { SelectedCurrencies } from "@/app/types/currency";

export const ConvertCurrency = () => {
  const { currencies, loading, error } = useCurrencies();
  const [amount, setAmount] = useState("");
  const [selectedCurrencies, setSelectedCurrencies] = useState<SelectedCurrencies>({
    from: null,
    to: null,
  });

  const {
    conversionData,
    loading: conversionLoading,
    error: conversionError,
  } = useConversion(selectedCurrencies, amount);

  const containerClasses = "flex flex-col gap-4 p-6 rounded-xl w-full bg-black/10 shadow-2xl border-2 border-black/20";

  if (loading) return <div className={containerClasses}>Loading...</div>;
  if (error) return <div className={containerClasses}>Error: {error}</div>;

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
    }
  };

  return (
    <section className={containerClasses}>
      {currencies ? (
        <>
          <TextField amount={amount} updateAmountHandler={updateAmountHandler} />
          <SelectCurrency
            currencies={currencies}
            selectedCurrencies={selectedCurrencies}
            updateCurrencyHandler={updateCurrencyHandler}
            swapCurrencies={swapCurrencies}
          />
          <div className="pt-6 pb-1 mt-4 text-3xl border-t border-t-black/20 text-center">
            {conversionLoading && <div className="opacity-50">Updating...</div>}
            {conversionError && <div className="text-lg text-red-700 font-bold">Error: {conversionError}</div>}
            {!conversionLoading &&
              !conversionError &&
              (conversionData ? (
                <ConvertedTotal conversionData={conversionData} />
              ) : (
                <span className="text-lg">Enter a currency value and select two currencies to get started!</span>
              ))}
          </div>
        </>
      ) : null}
    </section>
  );
};
