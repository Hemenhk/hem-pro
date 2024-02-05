import TheHeader from "../components/header/TheHeader";
import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col">
      <header className="py-3 px-10 border-b">
        <TheHeader />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
Ö