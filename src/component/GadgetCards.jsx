import { useState } from "react";
import productInfo from "../data/products.json";
import GadgetCard from "./GadgetCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function GadgetCards() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (id === "0") {
      setProducts([...productInfo]);
    } else {
      setProducts(productInfo.filter((product) => product.category === id));
    }
    setIsLoading(false);
  }, [id]);

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
