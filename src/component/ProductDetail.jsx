import StarRating from "./StarRating";
import cartImg from "../assets/cart_white.png";
import wishlistImg from "../assets/wishlist.png";
import { useGadgetContext } from "../contexts/GadgetContext";

function ProductDetail({ product }) {
  const { addToCart, addToWishlist } = useGadgetContext();

  return (
    <div className="w-10/12 mx-auto lg:p-4 p-1 border border-black rounded-3xl grid lg:grid-cols-3 grid-cols-1 bg-white lg:absolute lg:top-1/2 lg:right-1/2 lg:translate-x-1/2 gap-9 lg:gap-0">
      <div className="lg:col-span-1 rounded-xl shadow-sm flex items-center justify-center">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="w-full rounded-lg"
        />
      </div>
      <div className="lg:col-span-2 h-full flex flex-col items-start gap-4 lg:w-3/4 lg:pl-7 p-3">
        <h1 className="lg:text-2xl text-xl font-bold">
          {product.product_title}
        </h1>
        <p className="lg:text-lg text-lg font-semibold">
          Price : ${product.price}
        </p>
        <p
          className={`px-4 py-1 w-fit rounded-2xl border font-semibold ${
            product.availability
              ? "bg-green-400/40 border-green-900 text-green-800"
              : "bg-red-400/70 border-red-900 text-red-800"
          }`}
        >
          {product.availability ? "In Stock" : "Out of Stock"}
        </p>
        <p>{product.description}</p>
        <div className="text-gray-500">
          <h3 className="md:text-xl text-lg font-semibold text-left text-black mb-3">
            Specification
          </h3>
          <ol>
            {product.specification.map((spec, i) => (
              <li key={i} className="pl-2">
                {i + 1}. {spec}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="mb-1 font-bold">Rating</h2>
          <div className="flex gap-2 items-center">
            <StarRating rating={product.rating} size={35} />
            <p className="lg:text-xl text-base px-4 py-1 bg-gray-600/15 rounded-xl">
              {product.rating}
            </p>
          </div>
        </div>
        <div className="flex items-center lg:gap-6 gap-3">
          <div
            role="button"
            className="bg-purple-600 flex items-center gap-1 px-4 py-2 rounded-xl hover:bg-purple-700 shadow-md"
            onClick={() => addToCart(product)}
          >
            <p className="lg:text-xl text-base text-white font-bold select-none">
              Add To Cart
            </p>
            <img
              src={cartImg}
              alt="Add to cart"
              className="w-6 aspect-square lg:block hidden"
            />
          </div>
          <div
            role="button"
            className="flex items-center justify-center bg-gray-400/20 p-2 rounded-full hover:bg-gray-300 shadow-sm select-none"
            onClick={() => addToWishlist(product)}
          >
            <img src={wishlistImg} alt="Add to wishlist" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
