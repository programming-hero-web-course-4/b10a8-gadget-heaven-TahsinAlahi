import { useGadgetContext } from "../contexts/GadgetContext";
import DashBoardCard from "./DashBoardCard";

function WishlistDash() {
  const { wishlist } = useGadgetContext();
  return (
    <div className="lg:max-w-screen-lg lg:mx-auto mt-10">
      <h1 className="text-2xl font-bold">Wishlist</h1>
      <div className="flex flex-col w-full gap-3 mt-5">
        {wishlist.map((product) => (
          <DashBoardCard
            type="wishlist"
            key={product.product_id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default WishlistDash;
