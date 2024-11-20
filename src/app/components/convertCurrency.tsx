import { TextField } from "./textField";
import { ConvertedTotal } from "./convertedTotal";
import { SelectCurrency } from "./selectCurrency";

export const ConvertCurrency = () => {
  return (
    <section className="flex flex-col gap-4 p-4 rounded-xl w-full bg-black/10">
      <TextField label="Amount" />

      <SelectCurrency />

      <ConvertedTotal amount={100} />
    </section>
  );
};
