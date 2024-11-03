import { Link } from "react-router-dom";

function GadgetCard({ product }) {
  const { product_title, price, product_id } = product;
  return (
    <div className="grid grid-rows-2 gap-2 p-3 border border-gray-500/20 rounded-lg shadow-md">
      <div className="bg-gray-600 rounded-lg min-h-48"></div>
      <div className="flex flex-col gap-2 justify-center h-full">
        <h1 className="text-2xl font-semibold">{product_title}</h1>
        <p className="text-gray-500">Price: ${price}</p>
        <Link
          className="mt-auto w-full py-1 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg text-lg text-center"
          to={`/product/${product_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default GadgetCard;
