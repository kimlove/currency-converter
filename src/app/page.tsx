import { Header } from "@/app/components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] place-items-center">
      <Header>A simple currency conversion tool</Header>
      <main className="w-6/12 bg-white/10"></main>
    </div>
  );
}
