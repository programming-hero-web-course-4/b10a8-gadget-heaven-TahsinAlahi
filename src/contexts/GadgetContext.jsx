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

  function removeFromList(product, type) {
    if (type === "cart") {
      setCart((prev) =>
        prev.filter((item) => item.product_id !== product.product_id)
      );
    } else if (type === "wishlist") {
      setWishlist((prev) =>
        prev.filter((item) => item.product_id !== product.product_id)
      );
    }
  }

  return (
    <GadgetContext.Provider
      value={{
        cart,
        wishlist,
        purchasedProduct,
        addToCart,
        addToWishlist,
        removeFromList,
      }}
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
