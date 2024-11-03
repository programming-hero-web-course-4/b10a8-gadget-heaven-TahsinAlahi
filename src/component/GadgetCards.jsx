import { useState } from "react";
import productInfo from "../data/products.json";
import GadgetCard from "./GadgetCard";
import { useEffect } from "react";
// import Loader from "./";

function GadgetCards() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProducts(productInfo);
    setIsLoading(false);
  }, []);

  if (products.length === 0 || isLoading) return <>Loading...</>;

  return (
    <div className="col-span-3 grid grid-cols-3 gap-3">
      {products.map((product) => (
        <GadgetCard key={product.product_id} product={product} />
      ))}
    </div>
  );
}

export default GadgetCards;
