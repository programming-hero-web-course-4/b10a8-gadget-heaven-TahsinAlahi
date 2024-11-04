import { useContext, createContext } from "react";

const GadgetContext = createContext();

function GadgetProvider({ children }) {
  return <GadgetContext.Provider>{children}</GadgetContext.Provider>;
}

export default GadgetProvider;

export function useGadgetContext() {
  const context = useContext(GadgetContext);

  if (context === undefined)
    throw new Error("useGadgetContext must be used within a GadgetProvider");

  return context;
}
