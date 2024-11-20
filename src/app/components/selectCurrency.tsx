import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import { Currency, SelectedCurrencies } from "@/app/types/currency";

interface SelectCurrencyProps {
  currencies: Currency[];
  selectedCurrencies: any;
  updateCurrencyHandler: (type: string, value: string) => void;
}

export const SelectCurrency = ({ currencies, selectedCurrencies, updateCurrencyHandler }: SelectCurrencyProps) => {
  return (
    <div className="w-full flex flex-col items-center sm:flex-row gap-4 justify-between">
      <div className="w-full">
        <Select
          onValueChange={(code) => updateCurrencyHandler("from", code)}
          value={selectedCurrencies.from || undefined}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Convert From" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="px-3">Convert From</SelectLabel>
              {currencies.map((currency: any) => (
                <SelectItem
                  value={currency.short_code}
                  key={currency.id}
                  className="cursor-pointer"
                  // disabled={currency.short_code === selectedCurrencies.to}
                >
                  <div className="flex gap-2">
                    <strong>{currency.short_code}</strong>
                    <span>&ndash;</span>
                    <span>{currency.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <button type="button" className="p-2 rounded bg-white">
          Swap
        </button>
      </div>
      <div className="w-full">
        <Select onValueChange={(code) => updateCurrencyHandler("to", code)} value={selectedCurrencies.to || undefined}>
          <SelectTrigger className="w-full]">
            <SelectValue placeholder="Convert To" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="px-3">Convert To</SelectLabel>
              {currencies.map((currency: any) => (
                <SelectItem
                  value={currency.short_code}
                  key={currency.id}
                  className="cursor-pointer"
                  // disabled={currency.short_code === selectedCurrencies.to}
                >
                  <div className="flex gap-2">
                    <strong>{currency.short_code}</strong>
                    <span>&ndash;</span>
                    <span>{currency.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
