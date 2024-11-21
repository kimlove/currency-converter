import { Header } from "@/app/components/header";
import { ConvertCurrency } from "./components/convertCurrency";

export default function Home() {
  // Basic server side check for correct values in .env file
  // Generally you'd want stronger validation here, but should be enough for this task
  const envSettingCheck = process.env.API_URL && process.env.API_KEY;

  return (
    <div className="grid grid-rows-[1fr] place-items-center">
      <Header>A simple currency conversion tool</Header>

      <main className="px-4 w-full max-w-[720px]">
        {!envSettingCheck ? (
          <div className="flex flex-col gap-4 p-4 rounded-xl w-full bg-black/10 text-center">
            <p>
              Please check your <strong>.env</strong> file, <strong>API_URL</strong> and/or <strong>API_KEY</strong>{" "}
              values are missing.
            </p>
            <p>
              The <strong>.env.sample</strong> file should get you started
            </p>
          </div>
        ) : (
          <ConvertCurrency />
        )}
      </main>
    </div>
  );
}
