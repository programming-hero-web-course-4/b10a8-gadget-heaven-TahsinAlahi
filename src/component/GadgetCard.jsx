import { Link } from "react-router-dom";

function GadgetCard({ product }) {
  const { product_title, price, product_id, product_image } = product;
  return (
    <div className="grid gap-2 p-3 border border-gray-500/20 rounded-lg lg:shadow-md shadow-sm">
      <div className="rounded-lg h-56 object-cover flex items-center justify-center">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center h-full">
        <h1 className="text-2xl font-semibold">{product_title}</h1>
        <p className="text-gray-500">Price: ${price}</p>
        <Link
          className="mt-auto w-full py-1 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg text-lg text-center hover:bg-purple-500 hover:text-white duration-200"
          to={`/product/${product_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default GadgetCard;
