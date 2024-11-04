import { useContext, createContext, useState } from "react";

const GadgetContext = createContext();

function GadgetProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [purchasedProduct, setPurchasedProduct] = useState([]);

  function addToCart(product) {
    const doesExist = cart.find(
      (item) => item.product_id === product.product_id
    );

    if (doesExist) return;

    setCart((prev) => [...prev, product]);
  }

  function addToWishlist(product) {
    const doesExist = wishlist.find(
      (item) => item.product_id === product.product_id
    );

    if (doesExist) return;

    setWishlist((prev) => [...prev, product]);
  }

  return (
    <GadgetContext.Provider
      value={{ cart, wishlist, purchasedProduct, addToCart, addToWishlist }}
    >
      {children}
    </GadgetContext.Provider>
  );
}

export default GadgetProvider;

export function useGadgetContext() {
  const context = useContext(GadgetContext);

  if (context === undefined)
    throw new Error("useGadgetContext must be used within a GadgetProvider");

  return context;
}
