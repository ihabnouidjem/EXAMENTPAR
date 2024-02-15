"use client";
import Image from "next/image";
import { ClientPage } from "../components/ClientPage";
import { Dashboard } from "../components/Dashboard";
import { TechGuyPage } from "../components/TechGuyPage";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full h-12 sticky border-b-[0.5px] border-zinc-700 flex items-center justify-center">
        <p className="text-[26px] font-semibold text-zinc-900 ">
          TECH SERVICE APP
        </p>
      </div>
      {false && <ClientPage />}
      {false && <TechGuyPage />}
      {true && <Dashboard />}
    </main>
  );
}
