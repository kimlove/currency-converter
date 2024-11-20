import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export const SelectCurrency = () => {
  return (
    <div className="w-full flex flex-col items-center sm:flex-row gap-4 justify-between">
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Convert From" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Currency</SelectLabel>
              <SelectItem value="usd">USD</SelectItem>
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
        <Select>
          <SelectTrigger className="w-full]">
            <SelectValue placeholder="Convert To" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Currency</SelectLabel>
              <SelectItem value="gbp">GBP</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
