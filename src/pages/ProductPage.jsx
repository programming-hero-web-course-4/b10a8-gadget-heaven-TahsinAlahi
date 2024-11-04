import { useParams } from "react-router-dom";
import productInfo from "../data/products.json";
import ProductDetail from "../component/ProductDetail";
import ProductDetailHeader from "../component/ProductDetailHeader";

function ProductPage() {
  const { product_id } = useParams();
  const product = productInfo.find((p) => p.product_id === product_id);

  return (
    <div className="pt-5 mt-6 bg-purple-700 relative pb-52 mb-80">
      <ProductDetailHeader />
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductPage;
