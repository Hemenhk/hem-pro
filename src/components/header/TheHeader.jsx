import React from "react";
import TheNavBar from "./components/TheNavBar";
import TheAuthButtons from "./components/TheAuthButtons";

export default function TheHeader() {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="uppercase font-bold tracking-wide">sokonekt</h1>
      <div>
        <TheNavBar />
      </div>
      <div>
        <TheAuthButtons />
      </div>
    </div>
  );
}
