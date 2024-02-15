"use client";
import { Login } from "@/components/Login";
import Image from "next/image";
import { createContext, useState } from "react";
import { ClientPage } from "../components/ClientPage";
import { Dashboard } from "../components/Dashboard";
import { TechGuyPage } from "../components/TechGuyPage";

export const appContext = createContext<any>("");

export default function Home() {
  const [user, setUser] = useState<any>(null);
  return (
    <appContext.Provider value={{ user, setUser }}>
      <main className="w-full">
        <div className="w-full h-12 sticky border-b-[0.5px] border-zinc-700 flex items-center justify-center">
          <p className="text-[26px] font-semibold text-zinc-900 ">
            TECH SERVICE APP
          </p>
        </div>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* {user?.status === "client" && <ClientPage />}
            {user?.status === "tech guy" && <TechGuyPage />}
            {user?.status === "admin" && <Dashboard />} */}
            {true && <ClientPage />}
            {true && <TechGuyPage />}
            {true && <Dashboard />}
          </>
        )}
      </main>
    </appContext.Provider>
  );
}
