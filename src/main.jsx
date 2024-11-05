import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import route from "./RouterRoutes";
import { RouterProvider } from "react-router-dom";
import GadgetProvider from "./contexts/GadgetContext";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <GadgetProvider>
        <RouterProvider router={route} />
      </GadgetProvider>
    </HelmetProvider>
  </StrictMode>
);
