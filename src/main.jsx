import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./landing";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-1 justify-center items-center">
      <Landing />
    </div>
  </StrictMode>
);
