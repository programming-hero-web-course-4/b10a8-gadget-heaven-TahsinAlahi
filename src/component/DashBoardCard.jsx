import deleteImg from "../assets/delete.png";
import { useGadgetContext } from "../contexts/GadgetContext";

function DashCard({ product, type }) {
  const { addToCart } = useGadgetContext();
  const isWishlist = type === "wishlist";

  return (
    <div className="grid grid-cols-6 gap-2 shadow-sm rounded-md p-4">
      <div className="col-span-1 h-full  rounded-lg">
        <img src={product.product_image} alt={product.product_title} />
      </div>
      <div className="col-span-4 flex flex-col items-start gap-3">
        <h1 className="text-2xl font-bold">{product.product_title}</h1>
        <p>
          {isWishlist && (
            <span className="text-black font-semibold">Description : </span>
          )}
          <span className="text-gray-700">{product.description}</span>
        </p>
        <p className="font-semibold">Price: ${product.price}</p>
        {isWishlist && (
          <button
            className="px-6 py-2 bg-purple-700 text-white text-lg rounded-2xl hover:bg-purple-800"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="col-span-1 cursor-pointer flex items-center justify-center">
        <div className="p-1 rounded-full border border-red-800 w-fit hover:bg-red-100">
          <img src={deleteImg} alt="Delete Button" className="w-6" />
        </div>
      </div>
    </div>
  );
}

export default DashCard;
