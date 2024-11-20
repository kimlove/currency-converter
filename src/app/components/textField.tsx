interface TextFieldProps {
  amount: string;
  updateAmountHandler: (value: string) => void;
}

export const TextField = ({ amount, updateAmountHandler }: TextFieldProps) => {
  return (
    <div>
      <input
        type="text"
        className="border p-4 py-2 w-full rounded-lg border-0 text-2xl focus:ring-black text-black	"
        value={amount}
        placeholder="Please enter a currency value..."
        maxLength={12}
        onChange={(e) => updateAmountHandler(e.target.value)}
      />
    </div>
  );
};
