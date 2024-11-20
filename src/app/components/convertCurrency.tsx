import { TextField } from "./textField";
import { ConvertedTotal } from "./convertedTotal";

export const ConvertCurrency = () => {
  return (
    <section className="flex flex-col gap-4 p-4 rounded-xl w-full bg-white/10">
      <TextField label="Amount" />

      <div className="w-full flex flex-col sm:flex-row gap-4 justify-between">
        <div className="w-full p-4 rounded-xl bg-white/10">Convert from</div>
        <div className="p-4 rounded-xl bg-white/10">Swap</div>
        <div className="w-full p-4 rounded-xl bg-white/10">Convert to</div>
      </div>

      <ConvertedTotal amount={100} />
    </section>
  );
};
