import StarRating from "./StarRating";
import cartImg from "../assets/cart_white.png";
import wishlistImg from "../assets/wishlist.png";

function ProductDetail({ product }) {
  return (
    <div className="w-10/12 mx-auto p-4 border border-black rounded-3xl grid grid-cols-3 bg-white absolute top-1/2 right-1/2 translate-x-1/2">
      <div className="col-span-1 bg-gray-500 rounded-xl shadow-sm">
        <img src="" alt="" />
      </div>
      <div className="col-span-2 h-full flex flex-col items-start gap-4 w-3/4 pl-7">
        <h1 className="text-2xl font-bold">{product.product_title}</h1>
        <p className="text-lg font-semibold">Price : ${product.price}</p>
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
          <h3 className="text-xl font-semibold text-left text-black mb-3">
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
            <p className="text-xl px-4 py-1 bg-gray-600/15 rounded-xl">
              {product.rating}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            role="button"
            className="bg-purple-600 flex items-center gap-1 px-4 py-2 rounded-xl hover:bg-purple-700 shadow-md"
          >
            <p className="text-xl text-white font-bold">Add To Cart</p>
            <img
              src={cartImg}
              alt="Add to cart"
              className="w-6 aspect-square"
            />
          </div>
          <div
            role="button"
            className="flex items-center justify-center bg-gray-400/20 p-2 rounded-full hover:bg-gray-300 shadow-sm"
          >
            <img src={wishlistImg} alt="Add to wishlist" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
