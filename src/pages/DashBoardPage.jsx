import CartDash from "../component/CartDash";
import DashBoardHeader from "../component/DashBoardHeader";
import WishlistDash from "../component/WishlistDash";
import { useState } from "react";

function DashBoardPage() {
  const [isCartActive, setIsCartActive] = useState(true);
  return (
    <>
      <DashBoardHeader
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
      />
      {isCartActive ? <CartDash /> : <WishlistDash />}
    </>
  );
}

export default DashBoardPage;
