import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import route from "./RouterRoutes";
import { RouterProvider } from "react-router-dom";
import GadgetProvider from "./contexts/GadgetContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GadgetProvider>
      <RouterProvider router={route} />
    </GadgetProvider>
  </StrictMode>
);
