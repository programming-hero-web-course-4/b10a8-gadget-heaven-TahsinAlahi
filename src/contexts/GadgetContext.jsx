import { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";

const GadgetContext = createContext();

function GadgetProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [purchasedProduct, setPurchasedProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addToCart(product) {
    const doesExist = cart.find(
      (item) => item.product_id === product.product_id
    );

    if (doesExist)
      return toast.warn(`${product.product_title} already in cart`);

    setCart((prev) => [...prev, product]);
    toast.success(`${product.product_title} added to cart`);
  }

  function addToWishlist(product) {
    const doesExist = wishlist.find(
      (item) => item.product_id === product.product_id
    );

    if (doesExist)
      return toast.warn(`${product.product_title} already in wishlist`);

    setWishlist((prev) => [...prev, product]);
    toast.success(`${product.product_title} added to wishlist`);
  }

  function removeFromList(product, type) {
    if (type === "cart") {
      setCart((prev) =>
        prev.filter((item) => item.product_id !== product.product_id)
      );
      toast.success(`${product.product_title} removed from cart`);
    } else if (type === "wishlist") {
      setWishlist((prev) =>
        prev.filter((item) => item.product_id !== product.product_id)
      );
      toast.success(`${product.product_title} removed from wishlist`);
    }
  }

  function handlePurchase() {
    if (cart.length === 0) return;
    setPurchasedProduct((prev) => [...prev, ...cart]);
    setCart([]);
    setIsModalOpen(true);
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
        handlePurchase,
        isModalOpen,
        setIsModalOpen,
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
