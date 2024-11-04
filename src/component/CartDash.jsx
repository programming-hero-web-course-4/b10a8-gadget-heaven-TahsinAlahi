import { useGadgetContext } from "../contexts/GadgetContext";
import sortImg from "../assets/sort.png";
import DashBoardCard from "./DashBoardCard";

function CartDash() {
  const { cart, handlePurchase } = useGadgetContext();
  let compCart = cart;
  const total = cart.reduce((acc, cur) => acc + cur.price, 0).toFixed(2);

  function handleSorting() {
    const tempCart = [...cart].sort((a, b) => a.price - b.price);
    compCart = tempCart;
  }

  return (
    <div className="lg:max-w-screen-lg lg:mx-auto mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Total Cost: ${total}</h1>
          <div
            className="flex items-center gap-3 px-5 py-2 bg-white border-2 border-purple-700 cursor-pointer rounded-3xl"
            role="button"
            onClick={handleSorting}
          >
            <p className="text-purple-700 font-semibold">Sort by Price</p>
            <img src={sortImg} alt="Sort by Price" className="w-6" />
          </div>
          <button
            className="flex items-center gap-3 px-5 py-2 text-white border-2 border-purple-700  bg-purple-700 cursor-pointer rounded-3xl"
            onClick={handlePurchase}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 mt-5">
        {compCart.map((product) => (
          <DashBoardCard
            type="cart"
            key={product.product_id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default CartDash;
