import { useParams } from "react-router-dom";
import productInfo from "../data/products.json";
import ProductDetail from "../component/ProductDetail";

function ProductPage() {
  const { product_id } = useParams();
  const product = productInfo.find((p) => p.product_id === product_id);

  return (
    <div className="pt-5 mt-6 bg-purple-500">
      <header className="text-center w-2/4 mx-auto text-white">
        <h2 className="text-3xl font-bold mb-4">Product Details</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </header>
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductPage;
