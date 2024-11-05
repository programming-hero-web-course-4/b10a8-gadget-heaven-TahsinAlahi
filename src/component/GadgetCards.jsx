import { useState, useEffect } from "react";
import productInfo from "../data/products.json";
import GadgetCard from "./GadgetCard";
import { useParams } from "react-router-dom";
import NoProduct from "./NoProduct";

function GadgetCards() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (id === "0" || id === undefined) {
      setProducts([...productInfo]);
    } else {
      setProducts(productInfo.filter((product) => product.category === id));
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) return <>Loading...</>;

  if (products.length === 0) return <NoProduct />;

  return (
    <div className="col-span-3 grid lg:grid-cols-3 grid-cols-1 gap-3">
      {products.map((product) => (
        <GadgetCard key={product.product_id} product={product} />
      ))}
    </div>
  );
}

export default GadgetCards;
