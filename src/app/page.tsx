import { Header } from "@/app/components/header";
import { ConvertCurrency } from "./components/convertCurrency";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] place-items-center">
      <Header>A simple currency conversion tool</Header>
      <main className="px-4 w-full max-w-[640px]">
        <ConvertCurrency />
      </main>
    </div>
  );
}
