import deleteImg from "../assets/delete.png";

function DashCard({ product, type }) {
  const isWishlist = type === "wishlist";

  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-1 h-full bg-gray-500 rounded-lg">
        <img src="" alt="pro" />
      </div>
      <div className="col-span-4 flex flex-col items-start gap-3">
        <h1 className="text-2xl font-bold">Title</h1>
        <p>
          {isWishlist && (
            <span className="text-black font-semibold">Description : </span>
          )}
          <span className="text-gray-700">Line</span>
        </p>
        <p className="font-semibold">Price: $ price</p>
        {isWishlist && (
          <button className="px-6 py-2 bg-purple-700 text-white text-lg rounded-2xl hover:bg-purple-800">
            Add to Cart
          </button>
        )}
      </div>
      <div className="col-span-1 cursor-pointer">
        <div className="p-1 rounded-full border border-red-800 w-fit hover:bg-red-100">
          <img src={deleteImg} alt="Delete Button" className="w-6" />
        </div>
      </div>
    </div>
  );
}

export default DashCard;
